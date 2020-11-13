<script lang="ts">
import Handsontable from "handsontable";
import { onMount, tick } from "svelte";
import { copyToClipboard } from "../../helpers/CopyToClipboard";

  import { hotLanguageSerialize } from "../../helpers/marked-custom/languages/hotable";

  export let tableData;
  export let hidden;
  let rendered = false;

  let editing = false;

  let hotableEl;
  let hotable: Handsontable;

  const createTable = async () => {
    rendered = true;
    await tick();
    hotable = new Handsontable(hotableEl, tableData);
  }

  const copy = () => {
    copyToClipboard(hotLanguageSerialize(hotable));
  }

  const edit = () => {
    hotable.updateSettings({
      readOnly: false,
      contextMenu: true,
      allowInsertColumn: true,
      allowInsertRow: true,
    });
    editing = true;
  }

  const stopEdit = () => {
    hotable.updateSettings({
      readOnly: true,
      contextMenu: false
    });
    editing = false;
  }

  onMount(() => {
    if (!hidden) createTable();
    hidden = false;
  })
</script>

{#if rendered == false}
  <button on:click={createTable} style="display: block">show table</button>
{:else}
  {#if editing}
    <button on:click={stopEdit}>stop editing</button>
    <button on:click={copy}>copy as markdown</button>
  {:else}
    {#if !hidden}
      <button on:click={() => hidden = true}>hide table</button>
      <button on:click={edit}>edit table</button>
    {:else}
      <button on:click={() => hidden = false} style="display: block">show table</button>
    {/if}
  {/if}
  <div bind:this={hotableEl} style="display: {hidden ? 'none' : 'block'}"></div>
{/if}

<style>
  button {
    display: inline-block;
  }
</style>