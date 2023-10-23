import { AppRegistry } from '@packages/apps'
import { App } from '@packages/core/abstracts/App'
import { Manager } from '@packages/core/abstracts/Manager'

export type AppTypes = keyof typeof AppRegistry
export type AppInstances = InstanceType<typeof AppRegistry[AppTypes]>

export enum AppEvents {
    APP_CREATED = 'APP_CREATED',
    APP_UPDATED = 'APP_UPDATED',
    APP_DELETED = 'APP_DELETED'
}

class AppManager extends Manager<AppInstances, typeof AppEvents> {

    /**
     * Creates a new app instance of a specific type with a unique ID and adds it to the manager's data.
     * 
     * @param type - The type of App to create.
     * @returns The created app instance.
     *
     * @remarks
     * This method relies on the appRegistry to determine which App subclass to instantiate.
     */
    public createApp(type: AppTypes, config: AppInstances['config']) {

        const AppClass = AppRegistry[type]

        if (!AppClass) {
            throw new Error(`App type ${type} is not registered`)
        }

        const appInstance = new AppClass(config)
        const appId = appInstance.uuid

        if (this.getData(appId)) {
            throw new Error(`App with id ${appId} already exists`)
        }

        // No need to update the dataStore here, as it will be updated by the updateDataAndStore method.
        this.addData(appId, appInstance)
        this.dispatchEvent(AppEvents.APP_CREATED, appInstance)

        return appInstance

    }

    /**
     * Retrieves an existing app instance by its unique ID.
     * 
     * @param id - The ID of the App to retrieve.
     * @returns The retrieved app instance, or undefined if not found.
     */
    public getApp(id: string) {
        return this.getData(id)
    }

    /**
     * Returns an array of all apps currently in the manager's data store.
     *
     * @returns An array of app instances.
     */
    public getAllApps() {
        return Array.from(this.dataMap.values())
    }

    /**
     * Updates an existing app instance by its unique ID with new properties.
     * 
     * @param id - The ID of the App to update.
     * @param updates - An object containing the properties to update on the app instance.
     */
    public updateApp(id: string, updates: Partial<App>) {

        const existingAppInstance = this.getData(id)

        if (!existingAppInstance) {
            throw new Error(`App with id ${id} does not exist`)
        }

        // Update the properties of the existing app instance.
        for (const key in updates) {
            if (Object.prototype.hasOwnProperty.call(updates, key)) {
                existingAppInstance[key] = updates[key]
            }
        }

        this.updateData(id, existingAppInstance)
        this.dispatchEvent(AppEvents.APP_UPDATED, existingAppInstance)

    }

    /**
     * Deletes an existing app instance by its unique ID.
     * 
     * @param id - The ID of the App to delete.
     */
    public deleteApp(id: string) {
        const existingAppInstance = this.getData(id)

        if (!existingAppInstance) {
            throw new Error(`App with id ${id} does not exist`)
        }

        this.deleteData(id)
        this.dispatchEvent(AppEvents.APP_DELETED, existingAppInstance)

    }

}

export default new AppManager()
