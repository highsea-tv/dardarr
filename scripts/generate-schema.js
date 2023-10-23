import chokidar from 'chokidar'
import { compileFromFile } from 'json-schema-to-typescript'
import { readFile, writeFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'
import prettier from 'prettier'

( async () => {

    const JSONSchemaDir = resolve(process.cwd(), './packages/schema/json')
    const DTSOutputDir = resolve(process.cwd(), './packages/types/schema')

    chokidar.watch(JSONSchemaDir).on('all', async (event, path) => {
        if (['add', 'change'].includes(event)) {

            const fileName = basename(path)

            if (fileName.endsWith('.json') && fileName !== 'package.json') {

                try {

                    const rawFileContents = await readFile(path, 'utf-8')
                    
                    if (rawFileContents && rawFileContents !== '') {
    
                        console.log(`⏳ Generating types for ${fileName}...`)
    
                        const outputFileName = fileName.replace('.json', '.d.ts')
                        const outputFilePath = resolve(DTSOutputDir, outputFileName)
    
                        const generatedTypes = await compileFromFile(path, {
                            bannerComment: '',
                            additionalProperties: false,
                            strictIndexSignatures: true
                        })
    
                        const output = `
                        /**
                         * This file was automatically generated by \`scripts/generate-schema.js\`
                         * Do not edit this file manually. Any manual changes will be overwritten.
                         */
    
                        export {}
    
                        declare global {
    
                            namespace Schema {
    
                                ${generatedTypes}
                                
                            }
    
                        }`
    
                        const formattedOutput = await prettier.format(output, { parser: 'typescript' })
                        await writeFile(outputFilePath, formattedOutput, 'utf-8')
    
                        console.log(`✅ Generated types for ${fileName}`)
    
                    } else {
    
                        console.warn(`⚠️ ${fileName} is empty, skipping`)
    
                    }
    
                } catch(err) {
    
                    console.error(`❌ Unable to generate types for ${fileName}`, err)
    
                }

            }

        }
    })

})()
