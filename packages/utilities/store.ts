import type { Writable } from 'svelte/store'

/**
 * Creates a store with the initial value and the new methods.
 * @param initialValue The initial value of the store.
 * @param onChange An optional function that is called when the store is updated.
 * @returns A store with the initial value and the new methods.
 */

export default function createStore<
    T, 
    U extends Utilities.StoreConfig<T> = Utilities.StoreConfig<T>>(initialValue: T, config: U): Utilities.Store<T, U> {

    /**
     * Create the store with the initial value.
     */
    const store: Writable<T> = writable<T>(initialValue)

    /**
     * Updates the store by passing the current value to the updater function.
     * @param updater A function that receives the current value of the store and returns a new value.
     * @returns The updated value of the store.
     */
    const update: typeof store.update = updater => store.update(value => {
        const newValue = updater(value)
        config.onChange?.(newValue)
        return newValue
    })

    /**
     * Gets the current value of the store.
     */
    const value = () => get(store)

    /**
     * Sets the store to a new value.
     * @param value The new value for the store.
     * @returns The new value of the store.
     */
    const set: typeof store.set = value => update(() => value)

    /**
     * Resets the store to its initial value.
     * @returns The current value of the store
     */
    const reset = () => set(initialValue)

    /**
     * Return the store with the new methods.
     */
    return { ...store, ...config, value, update, set, reset }

}
