import { Emby } from '@packages/apps/Emby'
import { Plex } from '@packages/apps/Plex'

/**
 * AppRegistry is a central registry for all app integration classes within Dardarr.
 *
 * It serves as a convenient way to register, organize, and access different app integrations
 * by associating unique keys (representing app types) with their corresponding app classes.
 *
 * How it works:
 *
 * 1. Import all app integration classes (e.g., Emby, Plex) into this file.
 *
 * 2. Add the imported classes as values to this constant, associating them with unique keys.
 *    The keys serve as identifiers for each app integration type.
 *
 * 3. By using this registry, the AppManager can dynamically create instances of app integrations
 *    based on the specified app type. This ensures that only registered app types can be created.
 *
 * Example:
 *
 * If you have an app integration class named 'Emby' that you want to register, add it to the
 * AppRegistry like this:
 *
 * ```
 * import { Emby } from '@packages/apps/Emby'
 * import { Plex } from '@packages/apps/Plex'
 *
 * export const AppRegistry = {
 *     Emby, // Register the Emby app integration class with the key 'Emby'.
 *     Plex, // Register the Plex app integration class with the key 'Plex'.
 * } as const
 * ```
 *
 * With this registry in place, the AppManager can create instances of app integrations based on
 * the specified app type, providing a clean and organized way to manage multiple app integrations.
 */
export const AppRegistry = {
    Emby,
    Plex
} as const
