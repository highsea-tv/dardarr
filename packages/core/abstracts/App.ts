import { type EventEnum } from '@packages/core/abstracts/EventDispatcher'
import { generateUniqueId } from '@packages/core/helpers/generateUniqueId'
import { AppEvents } from '@packages/core/managers/AppManager'

export interface AppConfig {
    internalAddress: string
    externalAddress?: string
}

export abstract class App<Events extends EventEnum<Events> = typeof AppEvents> {

    public uuid!: string
    public config!: AppConfig

    public abstract icon: string

    public constructor(config: AppConfig) {
        this.uuid = generateUniqueId(this.constructor.name)
        this.config = config
    }

}
