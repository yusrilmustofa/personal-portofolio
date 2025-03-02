<script>
	import { socials } from "$lib/data/data"
	import Saos from "saos";
	export let place_socials = true;
	export let main_header;
	export let main_description;
	function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>
<div class="sm:px-8 mt-16 sm:mt-18">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="max-w-2xl">
					<h1 in:typewriter class="text-4xl font-mono font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
						{main_header != null ? main_header : 'title'}
					</h1>
					<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						{main_description != null ? main_description : 'description'}
					</p>
					{#if place_socials}
					<div class="mt-6 flex gap-6">
						{#each socials as social, index (social.id)}
						<Saos animation={`roll-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) ${index * 0.2}s both`} once={true}>
							<a
								class="group -m-1 p-1"
								aria-label="Follow"
								href="{social.link}">
								{@html social.icon}
							</a>
						</Saos>
						{/each}
						<Saos animation={`scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both`} once={true}>
							<a
								class="group -m-1 p-1 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg sm:text-sm text-xs sm:px-5 px-2 sm:py-2 py-1 mt-4 text-center inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
								aria-label="Follow"
								href="https://drive.google.com/file/d/1VkppItI6VKFEut_oI6XoGvLD_bBJCTzQ/view?usp=sharing">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
									<path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z" clip-rule="evenodd" />
									<path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
								</svg>		
								<span>Download CV</span>						  
							</a>
						</Saos>
					</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>