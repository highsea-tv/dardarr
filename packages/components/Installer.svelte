<div class="installer">
    <div class="installer-wrapper">
        <div class="installer-content">
            <slot />
        </div>
    </div>
</div>

<style lang="postcss">
    .installer {
        background-color: hsla(var(--zinc-900), 1);
        position: fixed;
        inset: 0;

        &::before {
            content: '';
            background-image: url("https://transparenttextures.com/patterns/black-orchid.png");
            border-bottom: 1px solid hsla(var(--zinc-700), 1);
            background-color: hsla(var(--zinc-800), 1);
            position: absolute;
            display: block;
            width: 100%;
            height: 33.333%;
        }

        &-wrapper {
            
            transform: translate3d(0, -50%, 0);
            position: relative;
            max-width: 500px;
            padding: 1.5rem;
            margin: 0 auto;
            top: 33.333%;
            width: 100%;
            z-index: 1;
        }

        &-content {
            box-shadow: 0 0 1rem 0.365rem hsla(var(--zinc-900), 1);
            outline: 1px solid hsla(var(--zinc-700));
            background-color: hsla(var(--zinc-800));
            border-radius: 0.25rem;
            flex-direction: column;
            position: relative;
            padding: 1.5rem;
            display: flex;
        }

    }
</style>