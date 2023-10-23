import { glob } from 'glob'
import { compileFromFile } from 'json-schema-to-typescript'
import { resolve } from 'node:path'

( async () => {

    const JSONSchemaDir = resolve(process.cwd(), './packages/schema/json')
    const jsonFiles = await glob(resolve(JSONSchemaDir, './**/*.json'))

    let output = `
    `

    for (const jsonFile of jsonFiles) {

        const generatedTypes = await compileFromFile(jsonFile, {
            bannerComment: '',
            additionalProperties: false,
            strictIndexSignatures: true
        })

        console.log(generatedTypes)

    }

})()
