import chokidar from 'chokidar'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import prettier from 'prettier'

const typesDir = resolve(process.cwd(), './packages/types')

function extractPathsFromSchema(schema, prefix = '') {
    const paths = []

    if (schema.type === 'object' && schema.properties) {
        for (const key in schema.properties) {
            const newPrefix = prefix ? `${prefix}.${key}` : key
            paths.push(...extractPathsFromSchema(schema.properties[key], newPrefix))
        }
    } else if (['string', 'number', 'boolean', 'array', 'null'].includes(schema.type)) {
        paths.push(prefix)
    }

    return paths
}

( async () => {

    const l10nFile = resolve(process.cwd(), './packages/schema/json/l10n.json')

    chokidar.watch([l10nFile], { ignored: ['**/package.json'] }).on('all', async (event, path) => {

        if (['add', 'change', 'unlink'].includes(event)) {

            if (path.includes(l10nFile)) {
                await generateTranslationTypes()
            }

        }

    })

    async function generateTranslationTypes() {

        const fileContents = await readFile(l10nFile, 'utf-8')
        const fileJson = JSON.parse(fileContents)
        const outputFilePath = resolve(typesDir, 'translations.d.ts')

        const properties = extractPathsFromSchema(fileJson)

        let output = `
        /**
         * This file was automatically generated by \`scripts/generate-types.js\`
         * Do not edit this file manually. Any manual changes will be overwritten.
         */\n\n
         
         export {}

         declare global {
         type Translation = `
        for (const property of properties) {
            output += `\n    | '${property}'`
        }

        output += '\n}\n'

        const formattedOutput = await prettier.format(output, { parser: 'typescript' })
        await writeFile(outputFilePath, formattedOutput, 'utf-8')

    }

})()
