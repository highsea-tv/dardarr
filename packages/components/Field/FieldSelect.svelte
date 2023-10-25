<span class="dd-field-select-wrapper" style="--dropdown-width:{dropdownWidth}px;" aria-expanded={opened}>
    <button type="button" class="dd-field-select-button" on:click={() => opened = !opened}>
        <span class="dd-field-select-button-label">{selected.label}</span>
        <span class="dd-field-select-button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M239 498.7c-8.8 7-21.2 7-30 0L49 370.7c-10.4-8.3-12-23.4-3.7-33.7s23.4-12 33.7-3.8l145 116 145-116c10.4-8.3 25.5-6.6 33.7 3.8s6.6 25.5-3.8 33.7l-160 128zM399 141.3c10.3 8.3 12 23.4 3.7 33.7s-23.4 12-33.7 3.7L224 62.7 79 178.7c-10.4 8.3-25.5 6.6-33.7-3.7s-6.6-25.5 3.7-33.7l160-128c8.8-7 21.2-7 30 0l160 128z"/>
            </svg>
        </span>
    </button>
    <span class="dd-field-select-options" bind:clientWidth={dropdownWidth}>
        {#each config.options as option}
            <button type="button" class="dd-field-select-option" 
            on:click={(event) => handleChange(event, option.value)} 
            aria-selected={selected.value === option.value}>
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
    </span>
</span>

<script lang="ts">
    import type { SelectFieldConfig } from '@packages/core/models/Field'
    export let config: SelectFieldConfig

    $: selected = config.options.find((option) => option.value === config.value)
    $: dropdownWidth = 0
    $: opened = false

    function handleChange(event: Event, value: string) {
        (event.target as any).value = value
        config.value = value
        opened = false
        config.onchange(event)
    }

</script>

<style lang="postcss">
    .dd-field-select-wrapper {
        border: 1px solid #AAA;
        border-radius: 0.25rem;
        flex-direction: column;
        min-width: max-content;
        background: #CCC;
        position: relative;
        display: flex;
        padding: 0;
        z-index: 1;

        .dd-field-select-button,
        .dd-field-select-option {
            min-width: max-content;
            flex-direction: row;
            align-items: center;
            padding: 0 0.75rem;
            text-align: left;
            cursor: pointer;
            height: 2.5rem;
            display: flex;
            border: none;
            width: 100%;
        }

        .dd-field-select-button {
            min-width: var(--dropdown-width, max-content);
            justify-content: space-between;
            border-radius: 0.25rem;
            gap: 0.75rem;
        }

        .dd-field-select-option {
            padding-right: 3rem;
            gap: 0.365rem;

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
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            box-shadow: 0 0 0 1px #AAA;
            flex-direction: column;
            top: calc(100% + 1px);
            pointer-events: none;
            position: absolute;
            background: #AAA;
            list-style: none;
            display: flex;
            z-index: 10;
            padding: 0;
            opacity: 0;
            margin: 0;
            gap: 1px;
        }

        &[aria-expanded="true"] {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            z-index: 2;

            .dd-field-select-options {
                pointer-events: all;
                opacity: 1;
            }

        }

    }
</style>
