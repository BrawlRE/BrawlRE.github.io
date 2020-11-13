<script lang="ts">
  import Handsontable from "handsontable";
  import { onMount, tick } from "svelte";
  import { copyToClipboard } from "../../helpers/CopyToClipboard";

  import { hotLanguageSerialize } from "../../helpers/marked-custom/languages/hotable";

  export let name;
  export let structData;
  export let fnData

  export let hidden;
  let rendered = false;

  let editing = false;

  let structTableEl;
  let structTable: Handsontable;
  let fnTableEl;
  let fnTable: Handsontable;

  const createTable = async () => {
    rendered = true;
    await tick();
    structTable = new Handsontable(structTableEl, structData);
    fnTable = new Handsontable(fnTableEl, fnData);
  }

  // const copy = () => {
  //   copyToClipboard(hotLanguageSerialize(hotable));
  // }

  const edit = () => {
    structTable.updateSettings({readOnly: false, contextMenu: true, allowInsertColumn: true, allowInsertRow: true});
    fnTable.updateSettings({readOnly: false, contextMenu: true, allowInsertColumn: true, allowInsertRow: true});
    editing = true;
  }

  const stopEdit = () => {
    structTable.updateSettings({ readOnly: true, contextMenu: false });
    fnTable.updateSettings({ readOnly: true, contextMenu: false });
    editing = false;
  }

  onMount(() => {
    if (!hidden) createTable();
    hidden = false;
  })
</script>

<h5 class="block-heading">{name}</h5>
{#if rendered == false}
  <button on:click={createTable} style="display: block">show table</button>
{:else}
  {#if editing}
    <button on:click={stopEdit}>stop editing</button>
    <!-- <button on:click={copy}>copy as markdown</button> -->
  {:else}
    {#if !hidden}
      <button on:click={() => hidden = true}>hide table</button>
      <button on:click={edit}>edit table</button>
    {:else}
      <button on:click={() => hidden = false} style="display: block">show table</button>
    {/if}
  {/if}
    <div class="tables" style="display: {hidden ? 'none' : 'block'}">
      <span class="block-heading">properties</span>
      <div bind:this={structTableEl}></div>
      <span class="block-heading">functions</span>
      <div bind:this={fnTableEl}></div>
    </div>
  {/if}

<style>
  button {
    display: inline-block;
  }

  span.block-heading {
    font-weight: bold;
    display: block;
  }

  :global(.handsontable td > span.link) {
    font-weight: bold;
  }

  :global(.handsontable td > span.link:hover) {
    text-decoration: underline;
  }
</style>