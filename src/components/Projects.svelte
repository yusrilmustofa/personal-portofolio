<script>
	import { projects, educations } from "$lib/data/data.js";
	import Saos from "saos";
</script>

<div class="sm:px-8 mt-16 md:mt-16">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<header class="max-w-2xl pb-8">
					<h1 class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
						Projects
					</h1>
				</header>
				<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
					<div class="flex flex-col gap-16">
						{#each projects as project, index (project.id)}
						<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}>
							<article class="group relative flex flex-col items-start">
								<h2
									class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
								>
									<div
										class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
									/>
									<a href="{project.link}"
										><span
											class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
										/><span class="relative z-10"
											>{project.about}</span
										></a
									>
								</h2>
								<span class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
									<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
										<span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" /></span>
										{project.type}
								</span>
								<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
									{project.description}
								</p>
								<div
									aria-hidden="true"
									class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
								>								
								View list on github<svg
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
									class="ml-1 h-4 w-4 stroke-current"
									><path
										d="M6.75 5.75 9.25 8l-2.5 2.25"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/></svg
								>
								</div>
							</article>
						</Saos>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>