<script lang="ts">

interface pageDirectory {
  label: string;
  children: Array<string | pageDirectory>;
}

export let pageDirStructure: pageDirectory = {label: '_', children: []};
export let pageRoot = '';
export let lastPage = '';
export let clickEvt: Function = async () => {};

const getChildrenCount = (pd: pageDirectory) => {
  let out = 0;
  for (const ch of pd.children) {
    if (typeof ch !== "string")
      out += getChildrenCount(ch);
    out++;
  }
  return out;
}

</script>

{#each pageDirStructure.children as child}
  {#if typeof child === "string"}
    <div
      class="nav-link {(lastPage === pageRoot + child) ? "current" : ""}"
      on:click={(evt) => {evt.stopPropagation(); clickEvt(pageRoot + child)}}
    >
      {child}
    </div>
  {:else}
    <div
      class="nav-dir-header active"
      on:click={function(evt) {evt.stopPropagation(); this.classList.toggle("active")}}
    >
      <span>{child.label}</span>
      <div class="nav-dir-links" style="max-height: {getChildrenCount(child) * 30}px">
        <svelte:self
          pageDirStructure={child}
          pageRoot={pageRoot + child.label}
          {lastPage}
          {clickEvt}
        />
      </div>
    </div>
  {/if}
{/each}

<style>

.nav-dir-links {
  transition: max-height .3s cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  background-color: #FFF;
  margin-left: 10px;
}

:global(.nav-dir-header:not(.active) > .nav-dir-links) {
  max-height: 0px !important;
  pointer-events: none;
}

.nav-dir-header {
  background-color: #222;
}

.nav-dir-header > span {
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  color: #FFF;
}

.nav-dir-header > span::after {
  content: "<";
  display: block;
  position: absolute;
  right: 10px;
  top: 0;
  transform: rotate(0deg);
  transition: transform .3s cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-dir-header.active > span::after {
  transform: rotate(-90deg);
}

.nav-link {
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 5px;
}

.nav-link:hover {
  background-color: #0001;
  cursor: pointer;
}

.nav-link.current {
  pointer-events: none;
  position: relative;
  background-color: #0001;
  padding-left: 10px;
}
.nav-link.current::before {
  content: '';
  position: absolute;
  display: block;
  right: 100%;
  height: 100%;
  width: 5px;
  margin-right: -5px;
  background-color: red;
}

</style>