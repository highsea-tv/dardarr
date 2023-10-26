<button {type} class="dd-button">
    <slot />
</button>

<script lang="ts">
    export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<style lang="postcss">
    .dd-button {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-property: outline, box-shadow;
        transition-duration: 150ms;
        outline: 2px solid hsla(var(--dd-theme-color-500), 1);
        background-color: hsla(var(--dd-theme-color-500), 1);
        color: hsla(var(--zinc-900), 1);
        border-radius: 0.25rem;
        font-size: 0.925rem;
        font-weight: 500;
        height: 3rem;
        cursor: pointer;
        border: none;
        width: 100%;

        &:focus-within {
            box-shadow: 0 0 0 6px hsla(var(--dd-theme-color-500), 0.365);
            outline-color: hsla(var(--dd-theme-color-400), 1);
        }

    }
</style>
