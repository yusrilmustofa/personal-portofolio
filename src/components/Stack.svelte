<script>
	import { stacks } from "$lib/data/data";
	import { get } from "svelte/store";
	import Modal from "./Modal.svelte";
	import Saos from 'saos'
	let open = false;	
	let selected = [];

	function toggle(stack){
		selected = stack;
		open = !open;
	}

</script>

{#if open}
<Modal data={selected}>
		<span slot="button">
			<button type="button" on:click={() => open =! open} class="inline-flex w-full justify-center rounded-md bg-teal-600 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-700 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Okay</button>
		</span>
</Modal>
{/if}
  

<div class="sm:px-8 mt-16 md:mt-16">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">

			<div class="mx-auto max-w-2xl lg:max-w-5xl py-4">
				<header class="max-w-2xl mt-12">
					<h1 class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
						Tech Stack
					</h1>
				</header>
				<div class="mt-8 sm:mt-8">
					<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
						{#each stacks as stack, index (stack.id)}
						<Saos animation={`flip-in-diag-2-br 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${index * 0.2}s both`}>
							<li class="group relative flex flex-col items-center" id="{index}">
									<div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
										<img
											alt=""
											loading="lazy"
											width="32"
											height="32"
											decoding="async"
											data-nimg="1"
											class="rounded-full object-fit w-auto h-auto bg-transparent  dark:bg-zinc-800"
											src="{stack.logo}"
											style="color: transparent;"
										/>
									</div>
									<h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
										<div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
										<button on:click={() => toggle(stack)}>
											<span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
											<span class="relative z-10">{stack.name}</span>
										</button>
									</h2>
									<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
										{stack.level}
									</p>
									<p class="absolute inset-0 flex items-end justify-end z-10 mt-2 text-sm text-right text-zinc-600 dark:text-zinc-400">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
											<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
										</svg>
									</p>
							</li>
						</Saos>
						{/each}
					</ul>
				</div>
			</div>

		</div>
	</div>
</div>

