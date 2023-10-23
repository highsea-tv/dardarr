import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import rawPlugin from 'vite-raw-plugin'

import autoImport from 'unplugin-auto-import/vite'

console.log(process.cwd())

export default defineConfig({
    define: {
        cwd: JSON.stringify(process.cwd())
    },
    server: {
        https: false,
        watch: {
            followSymlinks: true,
            ignored: [
                '!**/node_modules/@packages/**',
            ]
        }
    },
    envDir: resolve(process.cwd(), '../'),
    build: {
        cssMinify: true,
        manifest: true,
        minify: true,
        ssrManifest: true
    },
    optimizeDeps: {
        exclude: [
            '@packages/core',
            '@packages/integrations',
            '@packages/styles',
            '@packages/types'
        ],
        esbuildOptions: {
            target: 'es2020'
        }
    },
    plugins: [
        // mkcert({
        //     autoUpgrade: true
        // }),
        rawPlugin({
            fileRegex: /\.sql$/
        }),
        autoImport({
            dts: resolve(process.cwd(), '../packages/types/auto-imports.d.ts'),
            imports: ['svelte', 'svelte/store', { 
                '@packages/core': [['default', 'Dardarr']],
                '@packages/core/helpers': [['i18n', 'i18n']]
            }]
        }),
        sveltekit()
    ]
})
