<div class="dd-field-select-wrapper" style="--dropdown-width:{dropdownWidth}px;" aria-dropeffect="popup" aria-valuetext={String(opened)}>
    <button bind:this={toggleButton} type="button" id={config.id} class="dd-field-select-button" aria-pressed={opened} aria-haspopup="menu" on:click={toggleDropdown}>
        <span class="dd-field-select-button-label">{selected.label}</span>
        <span class="dd-field-select-button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M239 498.7c-8.8 7-21.2 7-30 0L49 370.7c-10.4-8.3-12-23.4-3.7-33.7s23.4-12 33.7-3.8l145 116 145-116c10.4-8.3 25.5-6.6 33.7 3.8s6.6 25.5-3.8 33.7l-160 128zM399 141.3c10.3 8.3 12 23.4 3.7 33.7s-23.4 12-33.7 3.7L224 62.7 79 178.7c-10.4 8.3-25.5 6.6-33.7-3.7s-6.6-25.5 3.7-33.7l160-128c8.8-7 21.2-7 30 0l160 128z"/>
            </svg>
        </span>
    </button>
    <div bind:this={dropdownMenu} id="{config.id}-options" class="dd-field-select-options" role="menu" bind:clientWidth={dropdownWidth}>
        {#each config.options as option, i}
            <button type="button" class="dd-field-select-option" role="menuitem"
            on:click={(event) => handleChange(event, option.value)} 
            aria-current={selected.value === option.value}>
                <span class="dd-field-select-option-icon">
                    {#if selected.value === option.value}
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
    import type { SelectFieldConfig } from '@packages/core/models/Field'
    export let config: SelectFieldConfig

    $: selected = config.options.find((option) => option.value === config.value)
    $: dropdownWidth = 0
    $: opened = false

    let toggleButton: HTMLButtonElement
    let dropdownMenu: HTMLElement

    function toggleDropdown() {
        opened = !opened
    }

    function handleChange(event: Event, value: string) {
        (event.target as any).value = value
        config.value = value
        opened = false
        config.onchange && config.onchange(event)
    }

</script>

<style lang="postcss">
    .dd-field-select-wrapper {
        border-radius: 0.25rem;
        flex-direction: column;
        min-width: max-content;
        background: #323741;
        position: relative;
        display: flex;
        margin: 2px 0;
        padding: 0;
        z-index: 1;

        .dd-field-select-button,
        .dd-field-select-option {
            background-color: transparent;
            min-width: max-content;
            border-radius: 0.25rem;
            flex-direction: row;
            align-items: center;
            padding: 0 0.625rem;
            white-space: nowrap;
            text-align: left;
            cursor: pointer;
            height: 2.5rem;
            display: flex;
            border: none;
            width: 100%;
            margin: 0;

            svg {
                fill: currentColor;
            }

        }

        .dd-field-select-button {
            transition-property: outline, box-shadow;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.2s;
            min-width: var(--dropdown-width, max-content);
            justify-content: space-between;
            outline: 2px solid #484d5a;
            color: #fefefe;
            gap: 0.75rem;
        }

        .dd-field-select-option {
            transition-property: color, background-color;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.2s;
            height: calc(2.5rem + 4px);
            padding-right: 3rem;
            color: #b0b8cc;
            gap: 0.365rem;

            &:hover,
            &:focus-within {
                background-color: #2a2e35;
                color: #fefefe;
            }

            &:last-of-type {
                border-bottom-right-radius: 0.25rem;
                border-bottom-left-radius: 0.25rem;
            }

        }

        .dd-field-select-button-label {
            min-width: max-content;
            width: 100%;
            flex: 1;
        }

        .dd-field-select-button-icon,
        .dd-field-select-option-icon {
            justify-content: center;
            pointer-events: none;
            display: inline-flex;
            align-items: center;
            height: 1rem;
            width: 1rem;
        }

        .dd-field-select-button-icon > svg {
            height: 0.625rem;
        }

        .dd-field-select-option-icon > svg {
            height: 0.865rem;
        }

        .dd-field-select-options {
            transition-property: transform, opacity;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.2s;
            transform: translate3d(0, 6px, 0);
            outline: 2px solid #484d5a;
            border-radius: 0.25rem;
            flex-direction: column;
            pointer-events: none;
            background: #323741;
            position: absolute;
            padding: 0.625rem;
            list-style: none;
            display: flex;
            z-index: 10;
            opacity: 0;
            margin: 0;
            top: 100%;
            gap: 0;
        }

        &:focus-within {

            .dd-field-select-button {
                box-shadow: 0 0 0 6px #21356a;
                outline-color: #1f5eff;
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
