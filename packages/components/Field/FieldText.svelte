<label for={config.id} class="dd-field-text-wrapper">
    <div class="dd-field-text-content">
        {#if config.icon}
            <span class="dd-field-text-icon">
                <Icon icon={config.icon} />
            </span>
        {/if}
        {#if config.type === "text"}
            <input class="dd-field-text-input" type="text" id={config.id} name={config.name} required={config.required} bind:value={config.value} />
        {/if}
        {#if config.type === "password"}
            <input class="dd-field-text-input" type="password" id={config.id} name={config.name} required={config.required} bind:value={config.value} />
        {/if}
    </div>
</label>

<script lang="ts">
    import Icon from '@iconify/svelte'
    import type { PasswordFieldConfig, TextFieldConfig } from '@packages/core/models/Field'
    export let config: TextFieldConfig | PasswordFieldConfig
</script>

<style lang="postcss">
    .dd-field-text-wrapper {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-property: outline, box-shadow;
        transition-duration: 0.2s;
        outline: 2px solid hsla(var(--zinc-700), 1);
        background: hsla(var(--zinc-800), 1);
        border-radius: 0.25rem;
        flex-direction: column;
        min-width: max-content;
        position: relative;
        display: flex;
        margin: 2px 0;
        width: 100%;
        z-index: 1;

        &:focus-within {
            box-shadow: 0 0 0 6px hsla(var(--zinc-600), 0.25);
            outline-color: hsla(var(--zinc-600), 1);

            .dd-field-text-icon {
                color: hsla(var(--zinc-100), 1);
            }

        }

    }

    .dd-field-text-content {
        align-items: center;
        flex-direction: row;
        display: flex;
    }

    .dd-field-text-icon {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-property: color;
        transition-duration: 0.2s;
        color: hsla(var(--zinc-400), 1);
        justify-content: center;
        pointer-events: none;
        display: inline-flex;
        align-items: center;
        height: 3rem;
        width: 3rem;

        :global(> svg) {
            height: 1.125rem;
            width: auto;
        }

    }

    .dd-field-text-input {
        min-width: max-content;
        color: hsla(var(--zinc-100), 1);
        justify-content: space-between;
        background-color: transparent;
        padding: 0 0.625rem 0 0;
        min-width: max-content;
        border-radius: 0.25rem;
        font-size: 0.925rem;
        white-space: nowrap;
        text-align: left;
        flex: 1 0 auto;
        font: inherit;
        outline: none;
        height: 3rem;
        cursor: text;
        border: none;
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

        &[type="password"] {
            letter-spacing: 0.125ch;
        }

    }

</style>
