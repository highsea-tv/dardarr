<h1>{l10n('en', 'install_page.title')}</h1>

<form method="POST" action="?/system" use:enhance>

    {#each Object.values(fields) as field}
        <Field.Component {field} />
    {/each}

    <button type="submit">{l10n('fr', 'install_page.button')}</button>

</form>

<script lang="ts">
    
    import { enhance } from '$app/forms'
    import { l10n } from '@packages/core/helpers'
    import { Field } from '@packages/core/models'

    const fields = {
        language: new Field({
            name: 'language',
            label: 'Language',
            type: 'select',
            value: 'en-US',
            options: [
                { value: 'en-US', label: 'English' },
                { value: 'de-DE', label: 'German' },
            ],
        }),
        timezone: new Field({
            name: 'timezone',
            label: 'Timezone',
            type: 'select',
            value: 'America/Los_Angeles',
            options: [
                { value: 'America/Los_Angeles', label: 'America/Los_Angeles' },
                { value: 'Europe/Berlin', label: 'Europe/Berlin' },
                { value: 'Europe/London', label: 'Europe/London' },
            ],
        }),
    }

</script>
