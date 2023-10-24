import { error, type Handle } from '@sveltejs/kit'

import { CONFIG_PATH, DATABASE_FILE } from '@packages/config'
import { access, mkdir, writeFile } from 'node:fs/promises'

import sqlite from 'sqlite'
import sqlite3 from 'sqlite3'

import sql_createTables from '@packages/schema/sql/createTables.sql'
import sql_verifyInstall from '@packages/schema/sql/verifyInstall.sql'

export const verifyInstall: Handle = async ({ event, resolve }) => {

    let db: sqlite.Database

    const configPathExists = await access(CONFIG_PATH).then(() => true).catch(() => false)
    const databaseFileExists = await access(DATABASE_FILE).then(() => true).catch(() => false)

    if (!configPathExists) {
        try {
            await mkdir(CONFIG_PATH, { recursive: true })
        } catch(err) {
            throw error(500, { message: 'Unable to create the `config` directory. Please ensure that the proper permissions are granted.' })
        }
    }

    if (!databaseFileExists) {
        try {

            await writeFile(DATABASE_FILE, '')

            db = await sqlite.open({
                filename: DATABASE_FILE,
                driver: sqlite3.Database,
                mode: sqlite3.OPEN_READWRITE
            })

            await db.exec(sql_createTables)

        } catch(err) {
            
            throw error(500, { message: 'Unable to create the `config` database file. Please ensure that the proper permissions are granted.' })

        }
    } else {

        db = await sqlite.open({
            filename: DATABASE_FILE,
            driver: sqlite3.Database,
            mode: sqlite3.OPEN_READWRITE
        })

    }
    
    event.locals.db = db
    
    try {
        await db.run(sql_verifyInstall, 1)
    } catch (err) {
        if (!event.url.pathname.startsWith('/install') && !event.url.pathname.startsWith('/api')) {
            return new Response(null, { status: 303, headers: { Location: '/install' }})
        }
    }
    
    return resolve(event)

}
