<script>
    import cn from "classnames";
    import { Dropdown } from "flowbite-svelte";
    let { className, children, open, onShow, ...rest } = $props();
</script>

<Dropdown bind:open on:show={onShow} class={cn(className, "p-2 bg-background border border-solid border-border rounded-sm drop-shadow-sm")} {...rest}>
    {#if children}
        {@render children()}
    {/if}
</Dropdown>
