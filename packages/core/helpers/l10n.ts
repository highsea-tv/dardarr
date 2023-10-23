import { objectProp } from '@packages/core/helpers/objectProp'
import { locales } from '@packages/locales'

/**
 * Localizes a string based on the specified locale and translation key.
 *
 * @param locale - The locale for which to retrieve the translation.
 * @param translation - The translation key to look up in the locale data.
 * @param fallback - An optional fallback value to use if the translation is not found.
 * @returns The translated string or the fallback value if not found.
 */
export function l10n(locale: Locale, translation: Translation, fallback?: string): string {
    // Retrieve the language data for the specified locale.
    const language = locales[locale]

    // Use the `objectProp` function to access the translation within the language data.
    // If the translation is not found, use the fallback value (if provided).
    return objectProp(language, translation) as string ?? fallback
}
