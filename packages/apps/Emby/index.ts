import { App } from '@packages/core/abstracts/App'

export enum EmbyEvents {
    DATA_ADDED = 'DATA_ADDED',
    DATA_UPDATED = 'DATA_UPDATED',
    DATA_DELETED = 'DATA_DELETED'
}

export class Emby extends App<typeof EmbyEvents> {

    public icon: string = '/icons/apps/emby.png'

}
