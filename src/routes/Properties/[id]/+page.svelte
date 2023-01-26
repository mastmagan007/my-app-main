<script>
	export let data;

	const { post } = data;
</script>

<div class="container my-12 grid grid-cols-2">
	<div class="">
    <h4 class="text-xl capitalize">{post.data.attributes.City}</h4>
		<h1 class="text-3xl font-medium  font-display">{post.data.attributes.Title}</h1>
		<img class="w-full aspect-video py-6" src={post.data.attributes.Thumb.data.attributes.formats.medium.url} alt="gfgf" />
    <p class=" text-justify" >{post.data.attributes.Detail}</p>
	</div>
	<div class="">
    </div>
</div>
