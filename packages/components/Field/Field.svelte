<div class="dd-field {field.config.type}">

    <label for={field.config.id} class="dd-field-label">{field.config.label}</label>

    {#if field.config.type === 'text'}
        <FieldText bind:config={field.config} />
    {/if}

    {#if field.config.type === 'password'}
        <FieldText bind:config={field.config} />
    {/if}

    {#if field.config.type === 'textarea'}
        <FieldTextarea bind:config={field.config} />
    {/if}

    {#if field.config.type === 'select'}
        <FieldSelect bind:config={field.config} />
    {/if}

    {#if field.config.type === 'toggle'}
        <FieldToggle bind:config={field.config} />
    {/if}

</div>

<script lang="ts">
    import type { Field } from '@packages/core/models'
    
    import FieldSelect from './FieldSelect.svelte'
    import FieldText from './FieldText.svelte'
    import FieldTextarea from './FieldTextarea.svelte'
    import FieldToggle from './FieldToggle.svelte'

    export let field: Field
</script>

<style lang="postcss">
    .dd-field {
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 1.625rem;
        display: flex;
        gap: 0.75rem;
        width: 100%;

        &-label {
            font-size:   var(--dd-field-label-font-size, 0.925rem);
            font-weight: var(--dd-field-label-font-weight, 500);
            line-height: var(--dd-field-label-line-height, 1.25rem);
            color: hsla(var(--zinc-400), 1);
        }

    }
</style>
