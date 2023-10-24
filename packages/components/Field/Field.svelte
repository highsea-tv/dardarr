<label for={field.config.id} class="dd-field">
    <span class="dd-field-label">{field.config.label}</span>
    {#if field.config.type === 'text'}
        <input class="dd-field-input field-text" id={field.config.id} name={field.config.name} bind:value={field.config.value} type="text" />
    {/if}

    {#if field.config.type === 'select'}
        <select class="dd-field-input field-select" id={field.config.id} name={field.config.name} bind:value={field.config.value} on:change={field.config.onchange}>
            {#each field.config.options as option}
                <option value={option.value}>{option.label}</option>
            {/each}
        </select>
    {/if}
</label>

<script lang="ts">
    import type { Field } from '@packages/core/models'
    export let field: Field
</script>

<style lang="postcss">
    .dd-field {
        display: flex;
        flex-direction: column;

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
