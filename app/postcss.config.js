import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import cssnanoLight from 'cssnano-preset-lite'
import { resolve } from 'path'
import postcssImport from 'postcss-import'
import poscssNested from 'postcss-nested'
import stylelint from 'stylelint'

/** @type {import('postcss-load-config').Config} */
export default {
    plugins: [
        postcssImport({
            plugins: [
                stylelint({
                    configFile: resolve(process.cwd(), '../.stylelintrc'),
                    fix: true
                })
            ]
        }),
        poscssNested(),
        autoprefixer(),
        cssnano({
            preset: cssnanoLight({ 
                discardComments: { 
                    removeAll: true 
                }
            })
        })
    ]
}
