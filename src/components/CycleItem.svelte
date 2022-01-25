<script>
  // import CycleStore from '../stores';

  export let cycle;
  let preview = true;

  const togglePreview = () => {
    preview = !preview;
  }
</script>

<div>
  <h2>{cycle.name}</h2>
  <!-- Progress bar -->
  <button on:click={togglePreview}>Click for preview</button>
{#if !preview}
  <p>Cycle duration: {cycle.length} {cycle.units}</p>
  <p>Cycle checkpoints</p>
  <ul>
    {#each cycle.checkPoints as checkpoint, i}
      <li>{i + 1}: {checkpoint}</li>
    {/each}
  </ul>
{/if}
</div>