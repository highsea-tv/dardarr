<label for={field.config.id} class="dd-field {field.config.type}">
    <span class="dd-field-label">{field.config.label}</span>
    {#if field.config.type === 'text'}
        <input class="dd-field-input field-text" id={field.config.id} name={field.config.name} bind:value={field.config.value} type="text" />
    {/if}

    {#if field.config.type === 'select'}
        <FieldSelect bind:config={field.config} />
    {/if}

    {#if field.config.type === 'toggle'}
        <FieldToggle bind:config={field.config} />
    {/if}

</label>

<script lang="ts">
    import type { Field } from '@packages/core/models'
    import FieldSelect from './FieldSelect.svelte'
    import FieldToggle from './FieldToggle.svelte'

    export let field: Field
</script>

<style lang="postcss">
    .dd-field {
        display: flex;
        flex-direction: column;
        width: max-content;
        gap: 0.25rem;

        &-label {
            font-size:   var(--dd-field-label-font-size, 0.875rem);
            font-weight: var(--dd-field-label-font-weight, 500);
            line-height: var(--dd-field-label-line-height, 1.25rem);
        }

        &-input {
            display: flex;
            flex-direction: column;
        }

    }
</style>
