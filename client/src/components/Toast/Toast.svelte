<script>
    import { notifications } from "../../store/toasts.js";
    export let themes = {
        success: "#84C991",
        danger: "#E26D69",
        warning: "#f0ad4e",
        info: "#5bc0de",
        default: "#aaaaaa",
    };
</script>

<div class="notifications">
    {#each $notifications as notification (notification.id)}
        <div
            class="toast"
            style="background: {themes[notification.type]}"
        >
            <div class="content"><pre>{notification.message}</pre></div>
            {#if notification.icon}<i class={notification.icon} />{/if}
        </div>
    {/each}
</div>

<style>
    .notifications {
        position: fixed;
        top: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 0;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        pointer-events: none;
    }
    .toast {
        flex: 0 0 auto;
        margin-bottom: 10px;
        border-radius: 5%;
    }
    .content {
        padding: 0em 0.5em 0em 0.5em;
        display: block;
        color: white;
        font-weight: 500;
    }
</style>