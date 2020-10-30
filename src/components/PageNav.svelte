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
      {child.replace(/_/g, " ")}
    </div>
  {:else}
    <div
      class="nav-dir-header active"
      on:click={function(evt) {evt.stopPropagation(); this.classList.toggle("active")}}
    >
      <span>{child.label}</span>
      <div class="nav-dir-links" style="max-height: {getChildrenCount(child) * 25}px">
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
  padding-left: 20px;
  position: relative;
}

.nav-dir-links::before {
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 2px;
  left: 5px;
  background-color: #0001;
}

:global(.nav-dir-header:not(.active) > .nav-dir-links) {
  max-height: 0px !important;
  pointer-events: none;
}

/* .nav-dir-header {
  background-color: #222;
} */

.nav-dir-header > span {
  display: block;
  position: relative;
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-weight: bold;
  color: #000;
  user-select: none;
}

.nav-dir-header > span:hover {
  background-color: #0001;
}

.nav-dir-header > span::before {
  display: inline-block;
  content: "›";
  padding: 0 5px;
  transform: rotate(0deg);
  /* transition: transform .3s cubic-bezier(0.19, 1, 0.22, 1); */
}

.nav-dir-header.active > span::before {
  transform: rotate(90deg);
}

.nav-link {
  display: flex;
  align-items: center;
  height: 25px;
  padding-left: 10px;
  position: relative;
  width: max-content;
}

.nav-link:hover {
  background-color: #0001;
  cursor: pointer;
}

.nav-link.current {
  pointer-events: none;
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
  /* margin-right: -5px; */
  background-color: red;
}

</style>
