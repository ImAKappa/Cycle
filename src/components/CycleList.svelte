<script>
  import { CycleStore } from '../stores';
  import CycleItem from './CycleItem.svelte';
</script>

{#each $CycleStore as cycle}
<div>
  <CycleItem {cycle} />
</div>
{/each}