<script>
    import { socials } from '$lib/data/data'
	import Saos from 'saos';
	let emailIcon = socials.filter(item => item.name == 'Email')
	let github = socials.filter(item => item.name == 'Github')
	let linkedin = socials.filter(item => item.name == 'Linkedin')
	let instagram = socials.filter(item => item.name == 'Instagram')

    const key = '289c1b01-8bf8-4d89-8d2e-757b8ad8478a'
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let loading = [{
        status: false,
        message: ''
    }];

    async function sendMessage(e){
        loading.status = true;
        loading.message = 'Loading ...';
        const body = {
            accessKey: key,
            name,
            email,
            subject,
            message,
        }
        const response = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'content-type': 'application/json' },
        });
        const result = await response.json();
        if(result){
            name = '';
            email = '';
            subject = '';
            message = '';
            loading.status = false;
            loading.message = 'Sent !';
            setTimeout(() => {
                loading.message = '';
            }, 3000);
        }
    }

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
<svelte:head>
	<title>Portofolio | Contact</title>
</svelte:head>
<div class="sm:px-8 mt-16 sm:mt-18">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 class="text-4xl font-mono font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                   <p in:typewriter>
					Get In Touch With Me, Discuss Anything.
				   </p>
                </h1>
				<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<Saos animation={'tilt-in-bl 0.65s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
					<div class="lg:order-first lg:row-span-2">
                        <div class="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 mt-8">
							<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                                    <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
                                  </svg>
                                        <span class="ml-3">Send Message To Me</span>
							</h2>
							<ol class="mt-6 space-y-4">
                                <li class="flex gap-4">
									<form method="POST" on:submit|preventDefault={sendMessage} class="flex flex-auto flex-wrap gap-x-2">
										<div class="relative z-0 w-full mb-6 group">
											<input type="text" name="name" bind:value={name} id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
											<label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name, Please</label>
										</div>
										<div class="relative z-0 w-full mb-6 group">
											<input type="email" name="email" bind:value={email} id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
											<label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
										</div>
										<div class="relative z-0 w-full mb-6 group">
											<input type="text" name="subject" bind:value={subject} id="subject" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
											<label for="subject" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message subject</label>
										</div>
										<div class="relative z-0 w-full mb-6 group">
											<textarea rows="4" name="message" bind:value={message} id="message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
											<label for="message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your message</label>
										</div>
										<div class="flex w-auto">
											<button type="submit" disabled={loading.status} class="inline-flex w-full justify-center rounded-md bg-teal-600 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Send</button>
											{#if loading.message != null}
											<span class=" ml-2 flex w-full my-auto text-teal-800 font-bold">
												{loading.message}
											</span>
											{/if}
										</div>
									</form>
                                </li>
							</ol>
						</div>
					</div>
					</Saos>
                    <div class="lg:pl-20 mt-8">
						<ul>
							<li class="flex">
								<span class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
									<Saos animation={'roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.2s both'} once={true} top={150}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
											<path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
										</svg>
									</Saos>
									<span class="ml-4">Malang, Jawa Timur. Indonesia</span>
								</span>
							</li>
							<li class="mt-4 flex">
								<a
									class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
									href="{instagram[0].link}"
									><Saos animation={'roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.6s both'} once={true}><svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
										><path
											d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"
										/><path
											d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"
										/></svg
									></Saos><span class="ml-4">Follow on Instagram @{instagram[0].username}</span></a
								>
							</li>
							<li class="mt-4 flex">
								<a
									class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
									href="{github[0].link}"
									><Saos animation={'roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.8s both'} once={true}><svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
										><path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
										/></svg
									></Saos><span class="ml-4">Follow on GitHub @{github[0].username}</span></a
								>
							</li>
							<li class="mt-4 flex">
								<a
									class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
									href="{linkedin[0].link}"
									><Saos animation={'roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) 1s both'} once={true}><svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
										><path
											d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
										/></svg
									></Saos><span class="ml-4">Follow on LinkedIn</span></a
								>
							</li>
							<li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
								<a
									class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
									href="{emailIcon[0].link}"
									><Saos animation={'roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) 1.2s both'} once={true}>
									<svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
										><path
											fill-rule="evenodd"
											d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
										/>
									</svg></Saos>
									<span class="ml-4">{emailIcon[0].username}</span></a
								>
							</li>

						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>