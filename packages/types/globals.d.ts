import type { Writable } from 'svelte/store'

declare global {

    const INTEGRATIONS: typeof import('@packages/integrations')['integrations']
    const UTILITIES: typeof import('@packages/utilities')['utilities']

    type Locale = keyof typeof import('@packages/locales')['locales']

    namespace App {
        
        type EventCallback = (event: CustomEvent) => void

        type StateOption = ObjectProp<typeof STATE>
        type Integrations = { [key in Keys<typeof INTEGRATIONS>]: InstanceType<typeof INTEGRATIONS[key]> }
        type Utilities = { [key in Keys<typeof UTILITIES>]: typeof UTILITIES[key] }

    }

    namespace Utilities {

        interface StoreConfig<T> {
            onChange?: (value: T) => void
        }

        type Store<T, U extends Utilities.StoreConfig<T>> = Writable<T> & {
            value: () => T
            reset: () => void
        } & U

        type Ping = typeof import('@packages/utilities/ping')['default']
        type Sleep = typeof import('@packages/utilities/sleep')['default']

    }

    namespace Svelte {

        type ActionReturnType<T> = {
            update?: (params?: T) => void
            destroy?: () => void
        } | void

        type HTMLActionType<T> = (node: HTMLElement, params?: T) => ActionReturnType<T>
        type HTMLActionEntry<T> = HTMLActionType<T> | [HTMLActionType<T>, T]

    }

    interface Window {
        Dardarr: typeof import('@packages/core')['default']
    }

}
