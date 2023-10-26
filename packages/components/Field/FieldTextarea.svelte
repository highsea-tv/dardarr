<div class="dd-field-textarea-wrapper">
    <textarea class="dd-field-textarea-input" id={config.id} name={config.name} bind:value={config.value} />
</div>

<script lang="ts">
    import type { TextareaFieldConfig } from '@packages/core/models/Field'
    export let config: TextareaFieldConfig

</script>

<style lang="postcss">
    .dd-field-textarea-wrapper {
        border-radius: 0.25rem;
        flex-direction: column;
        min-width: max-content;
        background: hsla(var(--zinc-800), 1);
        position: relative;
        display: flex;
        margin: 2px 0;
        z-index: 1;

        &:focus-within {
            .dd-field-textarea-input {
                box-shadow: 0 0 0 6px hsla(var(--dd-theme-color-600), 0.365);
                outline-color: hsla(var(--dd-theme-color-600), 1);
            }
        }

    }

    .dd-field-textarea-input {
        transition-property: outline, box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.2s;
        min-width: max-content;
        outline: 2px solid hsla(var(--zinc-700), 1);
        color: hsla(var(--zinc-100), 1);
        justify-content: space-between;
        background-color: transparent;
        border-radius: 0.25rem;
        font-size: 0.925rem;
        text-align: left;
        resize: vertical;
        padding: 0.675lh 1rem;
        min-height: 6lh;
        font: inherit;
        cursor: text;
        border: none;
        width: 100%;
        margin: 0;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            animation: autofill 100ms both;
            color: hsla(var(--zinc-100), 1);
            -webkit-text-fill-color: hsla(var(--zinc-100), 1);
            background-clip: text;
        }

    }

</style>
