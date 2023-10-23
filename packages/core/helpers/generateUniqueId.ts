import { v4 as uuid } from 'uuid'

export function generateUniqueId(prefix?: string) {
    return prefix ? `${prefix.toLowerCase()}-${uuid()}` : uuid()
}
