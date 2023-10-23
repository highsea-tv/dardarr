<ul>
    {#each $apps as [id, app]}
        <li>
            <img width="24px" src={app.icon} />
            <span>{app.uuid}</span>
            <button on:click={() => Dardarr.AppManager.deleteApp(id)}>x</button>
        </li>
    {/each}
</ul>

<button on:click={addNewApp}>Add New App</button>

<script lang="ts">

    $: apps = Dardarr.AppManager.dataStore

    function addNewApp() {
        Dardarr.AppManager.createApp('Emby', {
            internalAddress: 'http://localhost:32400'
        })
        console.log(Dardarr.AppManager.getAllApps())
    }

</script>
