{#await Dardarr.Connect()}
    Connecting...
{:then} 
    <slot />
{/await}

<script lang="ts">
    import '@packages/styles/variables.postcss'

    onMount(() => {
        const style = document.createElement('style')
        style.innerHTML = `:root {\n`
        Object.keys(Dardarr.theme.colors).map(color => {
            style.innerHTML += `\t--dd-theme-color-${color}: ${(Dardarr.theme.colors as any)[color]};\n`
        })
        style.innerHTML += `}`
        document.head.appendChild(style)
    })

</script>
