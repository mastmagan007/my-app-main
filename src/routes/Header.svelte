<script>
	import { page } from '$app/stores';
	import logo from './assets/vhg-logo.png';
</script>

<header class='flex flex-row bg-sky-900 justify-between items-end pt-5 pb-3 px-10'>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="hidden md:block">
		<ul class="flex gap-7">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class='text-slate-50 text-lg border-b-2 pb-2 border-red-500' href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a class='text-slate-50 text-lg' href="/Properties">LISTINGS</a>
			</li>
			<li>
				<a class='text-slate-50 text-lg' href="/about">VHG ADVANTAGE</a>
			</li>
			<li>
				<a class='text-slate-50 text-lg' href="/about">ABOUT</a>
			</li>
			<li >
				<a class='text-slate-50 text-lg' href="/about">RESEARCH HUB</a>
			</li>
		</ul>
	</nav>
</header>