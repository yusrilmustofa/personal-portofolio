<script>
	import { page } from '$app/stores';
	import mainProfile from '$lib/assets/profile-1.85629a0b.jpeg';
	import { clickOutside } from '../lib/utils/clickOutside';
	let open = false;
	function handleClickOutside() {
		open = false;
	}
</script>

<header class="pointer-events-none relative z-20 flex flex-col font-mono">
	<div class="top-0 z-10 h-16 pt-6">
		<div class="sm:px-8 w-full">
			<div class="mx-auto max-w-7xl lg:px-8">
				<div class="relative px-4 sm:px-8 lg:px-12">
					<div class="mx-auto max-w-2xl lg:max-w-5xl">
						<div class="relative flex gap-4">
							<div class="flex flex-1">
								<div
									class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
								>
									<a aria-label="Home" class="pointer-events-auto" href="/"
										><img
											alt=""
											fetchpriority="high"
											width="512"
											height="512"
											decoding="async"
											data-nimg="1"
											class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
											sizes="2.25rem"
											src={mainProfile}
											style="color: transparent;"
										/></a
									>
								</div>
							</div>
							<div class="flex flex-1 justify-end md:justify-center">
								<nav class="pointer-events-auto md:block">
									<ul
										class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
									>
										<li>
											<a
												class="relative block px-3 py-2 transition {$page.url.pathname == '/'
													? 'text-teal-500 dark:text-teal-400'
													: ' hover:text-teal-500 dark:hover:text-teal-400'} "
												href="/"
												>Home<span
													class={$page.url.pathname == '/'
														? 'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'
														: ''}
												/>
											</a>
										</li>
										<li>
											<a
												class="relative block px-3 py-2 transition {$page.url.pathname ==
												'/projects'
													? 'text-teal-500 dark:text-teal-400'
													: ' hover:text-teal-500 dark:hover:text-teal-400'}"
												href="/projects"
											>
												Projects<span
													class={$page.url.pathname == '/projects'
														? 'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'
														: ''}
												/>
											</a>
										</li>
										<li on:mouseenter={() => {open = true}} on:mouseleave={() => {open = false}}>
											<button
												on:click={() => {
													open = !open;
												}}
												class="relative block px-3 py-2 transition {$page.url.pathname == '/insight' || $page.url.pathname == '/contact'
													? 'text-teal-500 dark:text-teal-400'
													: ' hover:text-teal-500 dark:hover:text-teal-400'}"
											>
												About<span
													class={$page.url.pathname == '/insight'
														? 'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'
														: ''}
												/>
											</button>
											{#if open}
												<div
												on:mouseleave={() => {open = false}}
												use:clickOutside on:click_outside={handleClickOutside}
												class="absolute top-9 z-40 shadow-lg right-0 w-auto h-auto px-8 py-2 rounded-lg bg-opacity-30 bg-white dark:bg-zinc-800/80">
													<ul class="flex-none font-mono text-md text-gray-600 dark:text-slate-100 font-bold">
														<li class="block py-2 hover:text-teal-500">
															<a on:click={() => open = !open} href="/insight">Insight</a>
														</li>
														<li class="block py-2 hover:text-teal-500">
															<a on:click={() => open = !open} href="/contact">Contact</a>
														</li>
													</ul>
												</div>
											{/if}
										</li>
									</ul>
								</nav>
							</div>
							<div class="flex justify-end md:flex-1">
								<div class="pointer-events-auto">
                                    <a href="https://github.com/yusrilmustofa/personal-portofolio">
									<button
										class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
										>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"/></svg>
                                        </button>
                                    </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
