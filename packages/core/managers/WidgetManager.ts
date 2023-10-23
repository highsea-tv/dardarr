import { Manager } from '@packages/core/abstracts/Manager';

export enum WidgetEvents {
    WIDGET_CREATED = 'WIDGET_CREATED',
    WIDGET_RESIZED = 'WIDGET_RESIZED',
    WIDGET_DELETED = 'WIDGET_DELETED'
}

export class WidgetManager extends Manager<typeof WidgetEvents> {

}
