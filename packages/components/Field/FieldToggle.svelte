<span class="dd-field-toggle-wrapper">
    <input id={config.id} type="checkbox" bind:checked={config.checked} on:change={config.onchange} />
    <span class="dd-field-toggle-input" />
</span>

<script lang="ts">
    import type { ToggleFieldConfig } from '@packages/core/models/Field'
    export let config: ToggleFieldConfig
</script>

<style lang="postcss">

    :global(.dd-field.toggle) {
        flex-direction: row-reverse !important;
        gap: 0.75rem !important;
        align-items: center;
    }

    .dd-field-toggle-wrapper {
        width: max-content;
        position: relative;
        cursor: pointer;

        > input[type="checkbox"] {
            position: absolute;
            appearance: none;
            cursor: pointer;
            height: 100%;
            width: 100%;
            opacity: 0;
            margin: 0;
            left: 0;
            top: 0;

            &:checked + .dd-field-toggle-input {
                background-color: hsla(var(--dd-theme-color-600), 1);

                &::after {
                    transform: translate3d(-1px, 0, 0);
                }

            }

            &:focus + .dd-field-toggle-input {
                box-shadow: 0 0 0 5px hsla(var(--dd-theme-color-600), 0.365);
                outline: none;
            }

        }

    }

    .dd-field-toggle-input {
        background-color: var(--dd-color-primary, #CCC);
        justify-content: flex-start;
        border-radius: 2rem;
        align-items: center;
        width: 2.75rem;
        display: flex;
        padding: 2px;

        &::after {
            content: '';
            transition-timing-function: var(--dd-field-toggle-transition-timing-function);
            transition-duration: var(--dd-field-toggle-transition-duration);
            transition-property: transform;
            transform: translate3d(calc(-100% + 1px), 0, 0);
            background-color: white;
            pointer-events: none;
            border-radius: 100%;
            position: relative;
            aspect-ratio: 1/1;
            height: 1.25rem;
            display: block;
            left: 50%;
        }

    }

</style>