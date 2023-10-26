<div class="dd-field-select-wrapper" aria-dropeffect="popup" aria-valuetext={String(opened)}>
    <button bind:this={toggleButton} type="button" id={config.id} class="dd-field-select-button" aria-pressed={opened} aria-haspopup="menu" on:click={toggleDropdown}>
        <span class="dd-field-select-button-content">
            {#if config.icon}
                <span class="dd-field-select-button-icon icon">
                    <Icon icon={config.icon} />
                </span>
            {/if}
            <span class="dd-field-select-button-label">{selected.label}</span>
        </span>
        <span class="dd-field-select-button-drop-icon icon">
            <Icon icon="tabler:selector" />
        </span>
    </button>
    <div bind:this={dropdownMenu} id="{config.id}-options" class="dd-field-select-options" role="menu">
        {#if config.placeholder}
            <button type="button" class="dd-field-select-option" disabled>
                <span class="dd-field-select-option-icon icon" />
                <span>{config.placeholder}</span>
            </button>
        {/if}
        {#each config.options as option, i}
            <button type="button" class="dd-field-select-option" role="menuitem" tabindex={opened ? 0 : -1} disabled={option.disabled}
            on:click={(event) => handleChange(event, option.value)} 
            aria-current={selected.value === option.value}>
                <span class="dd-field-select-option-icon icon">
                    {#if option.icon}
                        <Icon icon={option.icon} />
                    {:else if option.iconText}
                        <span class="dd-field-select-option-icon-text">{option.iconText}</span>
                    {:else if selected.value === option.value}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"/>
                        </svg>
                    {/if}
                </span>
                <span>{option.label}</span>
            </button>
        {/each}
    </div>
</div>

<script lang="ts">
    import Icon from '@iconify/svelte'
    import type { SelectFieldConfig } from '@packages/core/models/Field'
    export let config: SelectFieldConfig

    $: selected = config.options.find((option) => option.value === config.value)
    $: opened = false

    let toggleButton: HTMLButtonElement
    let dropdownMenu: HTMLElement

    function toggleDropdown() {
        opened = !opened
    }

    function handleChange(event: Event, value: string) {
        opened = false
        setTimeout(() => {
            (event.target as any).value = value
            config.value = value
            config.onchange && config.onchange(event)
        }, 150)
    }

</script>

<style lang="postcss">
    .dd-field-select-wrapper {
        border-radius: 0.25rem;
        flex-direction: column;
        background: hsla(var(--zinc-800), 1);
        position: relative;
        display: flex;
        margin: 2px 0;
        width: 100%;
        padding: 0;
        z-index: 1;

        .dd-field-select-button,
        .dd-field-select-option {
            background-color: transparent;
            min-width: max-content;
            border-radius: 0.25rem;
            flex-direction: row;
            align-items: center;
            white-space: nowrap;
            font-size: 0.925rem;
            text-align: left;
            cursor: pointer;
            height: 3rem;
            display: flex;
            border: none;
            width: 100%;
            padding: 0;
            margin: 0;

            svg {
                fill: currentColor;
            }

        }

        .dd-field-select-button {
            transition-property: outline, box-shadow;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            justify-content: space-between;
            outline: 2px solid hsla(var(--zinc-700), 1);
            color: #fefefe;
        }

        .dd-field-select-option {
            transition-property: color, background-color;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            color: hsla(var(--zinc-400), 1);
            height: calc(2.5rem + 4px);
            padding-right: 2.5rem;
            border-radius: 0;
            width: 100%;

            &[disabled] {
                cursor: default;
                opacity: 0.5;
            }

            &:not([disabled]):not([aria-current="true"]) {

                &:hover,
                &:focus-within {
                    background-color: hsla(var(--zinc-900), 0.5);
                    color: hsla(var(--zinc-100, 1));
                }

            }

            &[aria-current="true"] {
                background-color: hsla(var(--dd-theme-color-600), 1);
                color: hsla(var(--zinc-100, 1));
            }

            &:first-of-type {
                border-top-right-radius: 0.25rem;
                border-top-left-radius: 0.25rem;
            }

            &:last-of-type {
                border-bottom-right-radius: 0.25rem;
                border-bottom-left-radius: 0.25rem;
            }

        }

        .dd-field-select-button-content {
            min-width: max-content;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
            width: 100%;
            flex: 1 1 0;
        }

        .dd-field-select-button-label {
            padding-left: 1rem;
            min-width: max-content;
        }

        .icon {
            justify-content: center;
            pointer-events: none;
            display: inline-flex;
            align-items: center;
            aspect-ratio: 1/1;
            height: 100%;
            width: auto;
        }

        .dd-field-select-button-icon {
            margin-right: -1rem;
        }

        :global(.dd-field-select-button-icon > svg),
        :global(.dd-field-select-button-drop-icon > svg) {
            height: 1.125rem;
            width: auto;
        }

        .dd-field-select-option-icon > svg {
            height: 1.125rem;
        }

        .dd-field-select-option-icon-text {
            background-color: hsla(var(--zinc-900), 1);
            text-transform: uppercase;
            border-radius: 0.25rem;
            font-weight: 600;
            font-size: 0.525rem;
            padding: 0.25rem 0.365rem;
            line-height: 1;
        }

        .dd-field-select-options {
            transition-property: transform, opacity;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            transform: translate3d(0, 6px, 0);
            outline: 2px solid hsla(var(--zinc-700), 1);
            min-width: max-content;
            border-radius: 0.25rem;
            flex-direction: column;
            pointer-events: none;
            background: hsla(var(--zinc-800), 1);
            position: absolute;
            list-style: none;
            display: flex;
            padding: 0;
            z-index: 10;
            width: 100%;
            opacity: 0;
            margin: 0;
            top: 100%;
            gap: 0;
        }

        &:focus-within {

            .dd-field-select-button {
                box-shadow: 0 0 0 6px hsla(var(--dd-theme-color-600), 0.365);
                outline-color: hsla(var(--dd-theme-color-600), 1);
            }
        }

        &[aria-valuetext="true"] {
            z-index: 10;
        }

        .dd-field-select-button[aria-pressed="true"] {

            + .dd-field-select-options {
                transform: translate3d(0, 12px, 0);
                pointer-events: all;
                opacity: 1;
            }

        }

    }
</style>
