<script>
	import Header from './Header.svelte';
	import '../app.css';
	import logo from './assets/vhg-logo.png';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer
		class="bg-cover  bg-blue bg-center  py-28 bg-blend-multiply"
		style="background-image: url('https://res.cloudinary.com/dmgwjncsj/image/upload/v1674172865/footer-bg_vnpgpi.jpg');"
	>
		<div class="container flex flex-col lg:flex-row">
			<div class="footrLogo basis-full lg:basis-1/3 mb-12 flex flex-col items-center text-slate-50">
				<img src={logo} alt="gfgf" width="300" />
				<div class="icons flex item-center gap-4 mt-8">
					<a class="icon w-8 transition-all ease-in duration-300 hover:text-orange" href="">
						<FaFacebook />
					</a>
					<a class="icon w-8 transition-all ease-in duration-300 hover:text-orange" href="">
						<FaInstagram />
					</a>
					<a class="icon w-8 transition-all ease-in duration-300 hover:text-orange" href="">
						<FaTwitterSquare />
					</a>
				</div>
			</div>
	
			<div class="basis-full lg:basis-4/6 flex">
				<div class="fNav basis-1/2 justify-end">
					<h4 class="text-slate-50 text-3xl mb-4">Navigation</h4>
	
					<ul>
						<li><a class="text-base text-slate-50 mt-2 inline-block" href="#">HOME</a></li>
						<li><a class="text-base text-slate-50 mt-2 inline-block" href="/properties">LISTINGS</a></li>
						<li><a class="text-base text-slate-50 mt-2 inline-block" href="#">VHG ADVANTAGE</a></li>
						<li><a class="text-base text-slate-50 mt-2 inline-block" href="#">ABOUT</a></li>
						<li><a class="text-base text-slate-50 mt-2 inline-block" href="#">RESEARCH HUB</a></li>
					</ul>
				</div>
				<div class="contact basis-1/2">
					<h4 class="text-slate-50 text-3xl mb-4">Contact</h4>
					<ul>
						<li class="text-slate-50 text-base mb-2">
							<i class="fa-solid fa-location-dot mr-2" /> 2 Towne Square, Suite 450, Southfield, MI 48076
						</li>
						<li>
							<a class="text-slate-50 inline-block text-base mb-2" href="tel:248.415.2600"
								><i class="fa-solid fa-phone mr-2" />248.415.2600</a
							>
						</li>
						<li>
							<a
								class="text-slate-50 inline-block text-base mb-2"
								href="mailto:vhgteam@marcusmillichap.com"
								><i class="fa-solid fa-envelope mr-2" /> vhgteam@marcusmillichap.com</a
							>
						</li>
					</ul>
					<h4 class="text-slate-50 text-3xl mb-4">Subscribe</h4>
					<div class="w-max text-center">
						<form action="#">
							<div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
								<input
									type="email"
									placeholder="Your Email"
									class="flex-1 text-sm appearance-none rounded shadow py-2 px-3 text-grey-dark mr-2 focus:outline-none"/>
								<button
									type="submit"
									class="bg-orange text-sm text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-2"
									>Get started</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
