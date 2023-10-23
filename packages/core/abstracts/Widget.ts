// import { EventDispatcher } from '@packages/core/abstracts/EventDispatcher'
// import { generateUniqueId } from '@packages/core/helpers/generateUniqueId'
// import type { SvelteComponent } from 'svelte'

// export enum WidgetEvents {
//     WIDGET_CREATED = 'WIDGET_CREATED',
//     WIDGET_RESIZED = 'WIDGET_RESIZED',
//     WIDGET_MOVED = 'WIDGET_MOVED',
//     WIDGET_REMOVED = 'WIDGET_REMOVED'
// }

// export interface WidgetConfig {
//     title: string
// }

// export abstract class Widget extends EventDispatcher<typeof WidgetEvents> {
    
//     public id!: string
//     public config!: WidgetConfig

//     public abstract component: typeof SvelteComponent

//     public constructor(config: WidgetConfig) {
//         super()
//         this.id = generateUniqueId(this.constructor.name)
//         this.config = config
//     }

// }
