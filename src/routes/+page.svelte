<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import Property from "./Properties/property.svelte";

	// Import Swiper styles
	import 'swiper/css/bundle';
	import GoQuote from 'svelte-icons/go/GoQuote.svelte';

	import { onMount } from 'svelte';
	import { propertiesData,properties,servicesData, services } from './Properties/store';

	onMount(async () => {
		fetch('http://localhost:1337/api/properties?populate=*')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				propertiesData.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
	onMount(async () => {
		fetch('http://localhost:1337/api/services?populate=*')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				servicesData.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<header class="relative flex h-screen overflow-hidden">
	<div
		class="absolute container z-30 p-5 flex flex-col items-center lg:items-start text-white lg:left-48 lg:bottom-16 lg:transform-none bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
	>
		<h1 class="lg:text-5xl text-3xl antialiased font-bold text-center">
			LOCAL EXPERTISE, NATIONAL REACH.
		</h1>
		<h2 class="text-xl lg:text-3xl antialiased mt-4 mb-6 text-center lg:text-start">
			Leading CRE Advisors in Retail, Medical, & Net Leased<br />Sales & Investments.
		</h2>
		<div class="buttons flex flex-col gap-2 flex-wrap w-max">
			<div class="row1">
				<a
					class="inline-block flex-basis-72 border py-2 text-sm  px-4 transition-all duration-500  uppercase hover:bg-orange hover:border-orange"
					href="">Search Listings</a
				>
				<a
					class="inline-block flex-basis-72 border py-2 text-sm  px-4 transition-all duration-500  uppercase hover:bg-orange hover:border-orange"
					href="">Submit 1031 Requirement</a
				>
			</div>
			<div class="row2">
				<a
					class="inline-block flex-basis-72 border py-2 text-sm  px-4 transition-all duration-500  uppercase hover:bg-orange hover:border-orange"
					href="">Request Property Valuation</a
				>
				<a
					class="inline-block flex-basis-72 border py-2 text-sm  px-6 transition-all duration-500  uppercase hover:bg-orange hover:border-orange"
					href="">CONTCT US</a
				>
			</div>
		</div>
	</div>
	<video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
		<source
			src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
			type="video/mp4"
		/>
		Your browser does not support the video tag.
	</video>
</header>
<div
	class="counters h-auto py-36"
	style="background-image: url('https://res.cloudinary.com/dmgwjncsj/image/upload/v1674173031/counters_ark60v.jpg');"
>
	<h2 class="text-3xl md:text-4xl text-blue pb-14 text-center font-bold md:font-medium">
		VGH TRACK RECORD
	</h2>
	<div class="container mx-auto gap-16 grid grid-cols-2 md:grid-cols-4">
		<div
			class="c1 border border-orange border-2  md:h-40 md:w-40 p-2  rounded-full border-w-3 text-center flex flex-col items-center justify-center"
		>
			<h2 class="text-lg md:text-2xl font-bold text-blue">$825M+</h2>
			<h3 class="md:text-md uppercase font-medium">IN SALES</h3>
		</div>
		<div
			class="c1 border  border-orange border-2 md:w-40 md:h-40 p-2  rounded-full border-w-3 text-center flex flex-col items-center justify-center"
		>
			<h2 class="text-lg md:text-2xl font-bold text-blue">207+</h2>
			<h3 class="md:text-md uppercase font-medium">TRANSACTIONS</h3>
		</div>
		<div
			class="c1 border border-orange border-2 md:w-40 md:h-40 p-2  rounded-full border-w-3 text-center flex flex-col items-center justify-center"
		>
			<h2 class="text-lg md:text-2xl font-bold text-blue">5.25M+</h2>
			<h3 class="md:text-md uppercase font-medium">SQUARE FEET</h3>
		</div>
		<div
			class="c1 border border-orange border-2 md:w-40 md:h-40 p-2  rounded-full border-w-3 text-center flex flex-col items-center justify-center"
		>
			<h2 class="text-lg md:text-2xl font-bold text-blue">18</h2>
			<h3 class="md:text-md uppercase font-medium">states closed</h3>
		</div>
	</div>
</div>
<div class="impact grid lg:grid-cols-2">
	<div class="left relative">
		<img
			class="hidden lg:block transition-all duration-300 ease-in absolute top-1/2 -translate-y-1/2 -right-12  hover:-right-16 z-10 w-3/2 shadow-lg border-l-8 border-orange"
			src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674245009/impact-left_lkcf5f.jpg"
			alt=""
		/>
		<img
			class="lg:hidden block"
			src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674245009/impact-left_lkcf5f.jpg"
			alt=""
		/>
	</div>
	<div
		class="right py-16  bg-blue bg-blend-multiply opacity-90"
		style="background-image: url('https://res.cloudinary.com/dmgwjncsj/image/upload/v1674173234/about_vxiqlk.jpg'); background-size:cover;"
	>
		<div class="py-12 text-center lg:text-start w-3/4 lg:py-24 mx-auto">
			<h4 class="text-md lg:text-lg xl:text-2xl text-orange">Our impact</h4>
			<h2 class="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-slate-50 ">
				A Legacy of Success, Built <br />
				for the Future
			</h2>
			<p class="ext-sm lg:text-base xl:text-lg text-center lg:text-justify text-slate-50">
				For more than 50 years, Marcus & Millichap has worked tirelessly to help our clients create
				and preserve wealth through commercial real estate investment sales. From a single office in
				California, we have grown to more than 80 offices throughout the United States and Canada.
				We also built the industry’s largest, most collaborative sales force to help you find
				opportunities that match your unique investment needs. Connect with a specialist today.
			</p>
		</div>
	</div>
</div>
<div
	class="relative py-24"
	style="background-image: url('https://res.cloudinary.com/dmgwjncsj/image/upload/v1674248843/properties_dbsvuh.jpg'); background-size:cover;"
>
	<h2 class="text-2xl md:text-4xl font-bold  text-blue text-center uppercase mb-12">
		featured properties
	</h2>

	<div class=" mx-8">
		<div class="">
			<Swiper
				modules={[Navigation, Autoplay, Pagination]}
				spaceBetween={5}
				slidesPerView={5}
				autoplay
				breakpoints={{
					// when window width is >= 640px
					320: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					// when window width is >= 480px
					480: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					// when window width is >= 640px
					640: {
						slidesPerView: 3,
						spaceBetween: 10
					},

					1080: {
						slidesPerView: 4,
						spaceBetween: 10
					},

					1600: {
						slidesPerView: 5,
						spaceBetween: 10
					},
					2000: {
						slidesPerView: 5,
						spaceBetween: 10
					}
				}}
				loop
				pagination={{ clickable: true }}
				on:slideChange={() => console.log('slide change')}
				on:swiper={(e) => console.log(e.detail[0])}
			>
				{#each $properties as property}
					<SwiperSlide>
						<!-- <div class="bg-slate-50 border border-orange relative">
							<div class="absolute uppercase text-xs text-slate-50 bg-orange px-3 py-1">
								{property.attributes.Type}
							</div>
							<img src={property.attributes.Thumb.data.attributes.formats.medium.url} alt="" />

							<div class="p-4 ">
								<h4 class="text-xl  font-medium uppercase leading-tight h-14">
									{property.attributes.Title}
								</h4>
							
								<div
									class="badge bg-orange py-1 px-2 uppercase text-xs text-slate-50 inline-block my-2"
								>
									{property.attributes.Status}
								</div>
								<h5 class="uppercase text-sm font-medium">
									<i class="fa-solid fa-location-dot text-orange mr-2" />
									{property.attributes.City}
								</h5>
								<h5 class="uppercase text-sm font-medium my-1">
									<i class="fa-solid fa-layer-group text-orange mr-1" /> GLA:
									<span class="text-orange"> {property.attributes.Area} </span>
								</h5>
								<h5 class="uppercase text-sm font-medium">
									<i class="fa-solid fa-tags fa-flip-horizontal text-orange mr-2" />CAPE RATE:
									<span class="text-orange">
										{property.attributes.Rate}
										%</span
									>
								</h5>
								<h4 class="uppercase font-medium mt-2">
									Listing Price: <span class="text-orange">${property.attributes.Price} </span>
								</h4>
							</div>
						</div> -->

						<Property {property}/>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>
	</div>
</div>

<div
	class="relative py-24 bg-blue/95 bg-blend-multiply "
	style="background-image: url('https://res.cloudinary.com/dmgwjncsj/image/upload/v1674253324/services_mkkeqw.webp'); background-size:cover;"
>
	<div class="services container px-12 lg:px-24">
		<h4 class="text-xl text-center text-orange uppercase">what we offer</h4>
		<h2 class="text-2xl md:text-4xl font-bold mb-4 text-slate-50 text-center uppercase mb-12">
			our services
		</h2>
		<div class="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
			{#each $services as service}
				<div
					class="box flex flex-col items-center justify-evenly border border-dashed border-orange h-44 bg-blend-multiply"
				>
					<img
						src={service.Icon.data.attributes.url}
						width="50"
						height="50"
						alt=""
					/>
					<h4 class="text-md text-center text-slate-50 uppercase w-32 ">
						{service.Title}
					</h4>
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="test1 py-24 propSwiper">
	<div class="text-xl md:text-4xl text-blue font-bold mb-12 text-slate-50 text-center uppercase">
		Represented clients
	</div>

	<Swiper
		modules={[Navigation, Autoplay]}
		spaceBetween={20}
		slidesPerView={1}
		autoplay
		breakpoints={{
			// when window width is >= 640px
			320: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}}
		loop
		navigation
		pagination={{ clickable: true }}
		on:slideChange={() => console.log('slide change')}
		on:swiper={(e) => console.log(e.detail[0])}
	>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
		<SwiperSlide
			><img
				src="https://res.cloudinary.com/dmgwjncsj/image/upload/v1674258142/ICONS/client3_copy_lyf4eg.webp"
				alt=""
			/></SwiperSlide
		>
	</Swiper>
</div>

<div
	class="relative pt-24 pb-16"
	style="background-image: url('https://res.cloudinary.com/dmgwjncsj/image/upload/v1674173231/testimonials_j0un29.jpg'); background-size:cover;"
>
	<div class="container relative mx-auto text-center">
		<div class="qoutes absolute w-32 text-gray-400 -top-8">
			<GoQuote />
		</div>
		<Swiper
			modules={[Navigation, Autoplay]}
			spaceBetween={20}
			slidesPerView={1}
			autoplay
			loop
			pagination={{ clickable: true }}
			on:slideChange={() => console.log('slide change')}
			on:swiper={(e) => console.log(e.detail[0])}
		>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
			<SwiperSlide
				><div class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
					viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.”
				</div>
				<div class="my-4 text-lg font-medium text-orange">JOHN DOE</div>
				<div class="text-lg">CEO</div></SwiperSlide
			>
		</Swiper>
	</div>
</div>
