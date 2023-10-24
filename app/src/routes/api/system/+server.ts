import type { SystemConfig } from '@packages/core/managers/SystemManager'
import sql_selectSystem from '@packages/schema/sql/selectSystem.sql'
import sql_updateSystem from '@packages/schema/sql/updateSystem.sql'

import { json } from '@sveltejs/kit'

export async function GET({ locals}) {
    const { db } = locals
    const rows = await db.get(sql_selectSystem)
    return json(rows)
}

export async function PATCH({ request, locals }) {
    const config = await request.json() as SystemConfig
    const { db } = locals
    await db.run(sql_updateSystem, config.locale, config.timezone)
    return json(config)
}
