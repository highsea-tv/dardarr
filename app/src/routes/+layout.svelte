{#await Dardarr.Connect()}
    Connecting...
{:then} 
    <slot />
{/await}

<script lang="ts">
    import '@packages/styles/variables.postcss'
</script>
