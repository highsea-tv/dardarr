import { Manager } from '@packages/core/abstracts/Manager'

export enum SystemEvents {
    LANGUAGE_CHANGED = 'LANGUAGE_CHANGED',
    TIMEZONE_CHANGED = 'TIMEZONE_CHANGED'
}

export interface SystemConfig {
    locale: Locale
    timezone: string
}

class SystemManager extends Manager<SystemConfig, typeof SystemEvents> {

    public async init() {
        const fetchConfig = await fetch('/api/system')
        const config = await fetchConfig.json() as SystemConfig
        this.addData('config', config)
    }

    public getLocale() {
        return this.getData('config').locale
    }

    public getTimezone() {
        return this.getData('config').timezone
    }

    public async setLocale(locale: Locale) {
        const currentConfig = this.getData('config')
        const updatedConfig = { ...currentConfig, locale }
        this.updateData('config', updatedConfig)

        await fetch('/api/system', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ locale })
        })

        this.dispatchEvent(SystemEvents.LANGUAGE_CHANGED, updatedConfig)

        if (typeof document !== 'undefined') {
            document.documentElement.lang = locale
        }

    }

    public setTimezone(timezone: string) {
        const currentConfig = this.getData('config')
        const updatedConfig = { ...currentConfig, timezone }
        this.updateData('config', updatedConfig)
        this.dispatchEvent(SystemEvents.TIMEZONE_CHANGED, updatedConfig)
    }

}

export default new SystemManager()
