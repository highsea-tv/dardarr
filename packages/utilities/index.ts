import ping from '@packages/utilities/ping'
import sleep from '@packages/utilities/sleep'
import createStore from '@packages/utilities/store'

export const utilities = {
    createStore,
    ping,
    sleep
} as const

export default utilities
