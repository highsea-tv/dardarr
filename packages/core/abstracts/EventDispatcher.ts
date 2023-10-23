export type EventType<T> = keyof T
export type EventEnum<T> = Record<string, keyof T>
export type EventCallback<Event extends EventEnum<Event>, Data> = (event: EventType<Event>, data: Data) => void

export abstract class EventDispatcher<Event extends Record<string, EventType<Event>>, Data> {

    // Map of event types to callback functions.
    private listeners: { [EventKey in EventType<Event>]?: Set<EventCallback<Event, Data>> } = {}

    /**
     * Attach an event listener to the current instance.
     * 
     * @param event - The event type to listen for.
     * @param callback - The callback function to execute when the event is dispatched.
     *
     * @remarks
     * This method is used to simplify event listener attachment for instances.
     */
    public on(event: EventType<Event>, callback: EventCallback<Event, Data>) {
        this.addEventListener(event, callback)
    }

    /**
     * Registers a callback function to be executed when a specific event is dispatched.
     * 
     * @param event - The event type to listen for.
     * @param callback - The callback function to execute when the event is dispatched.
     *
     * @remarks
     * Multiple callbacks can be registered for the same event type.
     */
    protected addEventListener<EventKey extends EventType<Event>>(event: EventKey, callback: EventCallback<Event, Data>) {
        if (!this.listeners[event]) this.listeners[event] = new Set()
        this.listeners[event].add(callback)
    }

    /**
     * Unregisters a specific callback function from a given event type.
     * 
     * @param event - The event type to stop listening for.
     * @param callback - The callback function to unregister.
     *
     * @remarks
     * If the specified callback is not registered for the event, no changes are made.
     */
    protected removeEventListener<EventKey extends EventType<Event>>(event: EventKey, callback: EventCallback<Event, Data>) {
        this.listeners[event]?.delete(callback)
    }

    /**
     * Dispatches an event, triggering all registered callbacks for that event type.
     * 
     * @param event - The event type to dispatch.
     *
     * @remarks
     * All registered callbacks for the dispatched event are executed with the current instance as the argument.
     */
    protected dispatchEvent<EventKey extends EventType<Event>>(event: EventKey, data: Data) {
        if (!this.listeners[event]) return
        for (const callback of this.listeners[event]) callback(event, data)
    }

}
