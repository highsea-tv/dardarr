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
                background-color: var(--dd-color-primary, red);

                &::after {
                    transform: translate3d(0, 0, 0);
                }

            }

            &:focus + .dd-field-toggle-input {
                outline: none;
                box-shadow: 0 0 0 0.25rem rgba(255,0,0,0.25);
            }

        }

    }

    .dd-field-toggle-input {
        background-color: var(--dd-color-primary, #CCC);
        box-sizing: border-box;
        width: 2.75rem;
        border-radius: 2rem;
        align-items: center;
        justify-content: flex-start;
        padding: 0.125rem;
        display: flex;

        &::after {
            content: '';
            transition-timing-function: var(--dd-field-toggle-transition-timing-function);
            transition-duration: var(--dd-field-toggle-transition-duration);
            transition-property: transform;
            transform: translate3d(-100%, 0, 0);
            background-color: white;
            pointer-events: none;
            position: relative;
            border-radius: 100%;
            aspect-ratio: 1/1;
            height: 1.25rem;
            display: block;
            left: 50%;
        }

    }

</style>