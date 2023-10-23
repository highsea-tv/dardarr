import { App } from '@packages/core/abstracts'

export enum PlexEvents {
    DATA_ADDED = 'DATA_ADDED',
    DATA_UPDATED = 'DATA_UPDATED',
    DATA_DELETED = 'DATA_DELETED'
}

export class Plex extends App<typeof PlexEvents> {

    public icon: string = '/icons/apps/plex.png'
    
}
