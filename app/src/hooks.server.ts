import { verifyInstall } from '$lib/middleware'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence(verifyInstall)
