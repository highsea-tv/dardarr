import { EventDispatcher, type EventEnum } from '@packages/core/abstracts/EventDispatcher'
import { writable } from 'svelte/store'

export enum ManagerEvents {
    DATA_ADDED = 'DATA_ADDED',
    DATA_UPDATED = 'DATA_UPDATED',
    DATA_DELETED = 'DATA_DELETED'
}

export abstract class Manager<DataType, EventType extends EventEnum<EventType> = typeof ManagerEvents> extends EventDispatcher<EventType, DataType> {

    // Map of data stores.
    protected dataMap: Map<string, DataType> = new Map()

    // Svelte store for the data map.
    public dataStore = writable(this.dataMap)

    public abstract init(): Promise<void>

    /**
     * Updates the internal dataMap and dataStore based on the provided key and value.
     * 
     * @param key - The key corresponding to the data entry.
     * @param value - The value associated with the key. If undefined, it indicates a request to delete the key.
     *
     * @remarks
     * The method ensures reactivity in Svelte components by cloning the dataMap before updating the dataStore.
     * This approach addresses Svelte's reliance on reference identity checks for detecting data changes. By providing 
     * a new reference to the store, reactive updates are consistently triggered in subscribed Svelte components.
     */
    protected updateDataAndStore(key: string, value?: DataType) {
        value !== undefined ? this.dataMap.set(key, value) : this.dataMap.delete(key)
        this.dataStore.set(new Map(this.dataMap))
    }

    /**
     * Adds a new data entry to the dataMap and updates the dataStore.
     * 
     * @param key - The key corresponding to the data entry.
     * @param value - The data to be added.
     *
     * @remarks
     * If the key already exists, a warning is logged and no changes are made.
     */
    protected addData(key: string, value: DataType) {

        if (this.dataMap.has(key)) {
            throw new Error(`Data with key ${key} already exists.`)
        }

        this.updateDataAndStore(key, value)

    }

    /**
     * 
     * @param key 
     * @returns 
     */
    protected getData(key: string): DataType | undefined {
        return this.dataMap.get(key)
    }

    /**
     * Updates an existing data entry in the dataMap and dataStore.
     * 
     * @param key - The key corresponding to the data entry.
     * @param value - The new data value for the specified key.
     *
     * @remarks
     * If the key does not exist, a warning is logged and no changes are made.
     */
    protected updateData(key: string, value: DataType) {

        if (!this.dataMap.has(key)) {
            throw new Error(`Data with key ${key} does not exist.`)
        }

        this.updateDataAndStore(key, value)

    }

    /**
     * Deletes a data entry from the dataMap and updates the dataStore.
     * 
     * @param key - The key of the data entry to be deleted.
     *
     * @remarks
     * If the key does not exist, a warning is logged and no changes are made.
     */
    protected deleteData(key: string) {
            
        if (!this.dataMap.has(key)) {
            throw new Error(`Data with key ${key} does not exist.`)
        }

        this.updateDataAndStore(key)
        
    }

}
