import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { resolve } from 'node:path'

const ignoredWarnings = [
    'missing-declaration',
    'css-unused-selector',
    'a11y-invalid-attribute',
    'a11y-click-events-have-key-events',
    'vite-plugin-svelte-css-no-scopable-elements'
]

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: [
        vitePreprocess()
    ],
    onwarn: (warning, handler) => {
        if (ignoredWarnings.includes(warning.code)) return
        console.log(warning.code)
        handler(warning)
    },
    kit: {
        adapter: adapter({
            polyfill: true
        }),
        alias: {
            $lib: resolve(process.cwd(), './src/lib'),
            $components: resolve(process.cwd(), './src/lib/components')
        },
        env: {
            dir: resolve(process.cwd(), '../')
        }
    }
}
