import { CONFIG_PATH as ENV_CONFIG_PATH } from '$env/static/private'
import { resolve } from 'node:path'

export const CONFIG_PATH = resolve(process.cwd(), '../', ENV_CONFIG_PATH)
export const DATABASE_FILE = resolve(CONFIG_PATH, 'database.sqlite')
