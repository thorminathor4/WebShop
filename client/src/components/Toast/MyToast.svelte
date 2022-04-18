<script>
    export let message;
</script>

<toast>
    <div class="toast-text">
        {#if message}
            {message}
        {/if}
    </div>
    <!-- <span class="toast-close">&#2A2F;</span> -->
</toast>

<style>
    toast{
        display: block;
        width: fit-content;
        background-color: #80808080;
        border: 1px solid orange;
        color: white;
        position: relative;
        padding: 5px;
        left: 5px;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .toast-text{
        display: inline-block;
    }
    /* .toast-close{
        vertical-align: top;
        display: inline-block;
        cursor: pointer;
        margin-left: 5px;
    } */
</style>