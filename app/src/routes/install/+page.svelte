<Installer>

    <h1>
        <I18N prop="install_page.title" />
    </h1>

    <p>Lorem ipsum set delore it</p>
    
    <form method="POST" action="?/system" use:enhance>
    
        {#each Object.values(fields) as field}
            <Field.Component {field} />
        {/each}
    
        <Button type="submit">
            <I18N prop="install_page.button" />
        </Button>
    
    </form>

</Installer>

<script lang="ts">

    import { Button, Installer } from '@packages/components'
    import I18N from '@packages/components/I18n.svelte'
    
    import { enhance } from '$app/forms'
    import { Field } from '@packages/core/models'

    const fields = {
        username: new Field({
            name: 'username',
            label: 'Username',
            type: 'text',
            icon: 'tabler:user',
            required: true
        }),
        password: new Field({
            name: 'password',
            label: 'Password',
            type: 'password',
            icon: 'tabler:key',
            required: true
        }),
        // language: new Field({
        //     name: 'language',
        //     label: 'Language',
        //     type: 'select',
        //     icon: 'tabler:language',
        //     value: Dardarr.SystemManager.getLocale(),
        //     options: Array.from(Object.entries(locales)).map(([value, locale]) => ({ 
        //         value, 
        //         label: locale.language,
        //         iconText: value
        //     })),
        //     async onchange(event) {
        //         const { value } = (event.target as HTMLSelectElement)
        //         await Dardarr.SystemManager.setLocale(value as Locale)
        //     }
        // }),
        // timezone: new Field({
        //     name: 'timezone',
        //     label: 'Timezone',
        //     type: 'select',
        //     icon: 'tabler:world',
        //     value: 'America/Los_Angeles',
        //     options: [
        //         { value: 'America/Los_Angeles', label: 'America/Los_Angeles' },
        //         { value: 'Europe/Berlin', label: 'Europe/Berlin' },
        //         { value: 'Europe/London', label: 'Europe/London' },
        //         { value: 'UTC', label: 'UTC' }
        //     ]
        // })
    }

</script>
