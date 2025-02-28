<script>
	import { fly, fade } from 'svelte/transition';
	export let pathname;
</script>

{#key pathname}
	<!-- <div in:fly={{ x: -10, duration: 500, delay: 1000 }} out:fly={{ x: 5, duration: 500 }}> -->
	<div transition:fade>
		<slot />
	</div>
{/key}