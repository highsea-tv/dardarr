{translatedText}

<script lang="ts">
    
    export let prop: Translation | undefined = undefined
    export let fallback: string | undefined = undefined

    const system = Dardarr.SystemManager.dataStore

    $: locale = $system.get('config').locale
    $: translatedText = i18n(locale, prop) ?? fallback
    
</script>
