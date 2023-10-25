<h1>
    <I18N prop="install_page.title" />
</h1>

<form method="POST" action="?/system" use:enhance>

    {#each Object.values(fields) as field}
        <Field.Component {field} />
    {/each}

    <button type="submit">
        <I18N prop="install_page.button" />
    </button>

</form>

<script lang="ts">

    import I18N from '@packages/components/I18n.svelte'
    
    import { enhance } from '$app/forms'
    import { Field } from '@packages/core/models'

    const fields = {
        toggle: new Field({
            name: 'toggle',
            label: 'Toggle',
            type: 'toggle',
            checked: true,
            onchange(event) {
                console.log(event)
            }
        }),
        language: new Field({
            name: 'language',
            label: 'Language',
            type: 'select',
            placeholder: 'Select your language',
            value: Dardarr.SystemManager.getLocale(),
            options: [
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
                { value: 'de', label: 'German' },
            ],
            async onchange(event) {
                const { value } = (event.target as HTMLSelectElement)
                await Dardarr.SystemManager.setLocale(value as Locale)
            }
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
                { value: 'UTC', label: 'UTC' }
            ]
        })
    }

</script>
