<script>
	import Navbar from '$lib/Components/Navbar.svelte'
	import Footer from '$lib/Components/Footer.svelte'
	import Hero from '$lib/Components/Hero.svelte'
</script>

<svelte:head>
	<title>Portfolio - JP</title>
	<meta
		name="description"
		content="Portfolio van Jan-Peter Dhallé, student toegepaste informatica"
	/>
	<meta
		property="og:description"
		content="Portfolio van Jan-Peter Dhallé, student toegepaste informatica"
	/>
	<meta property="og:title" content="Portfolio - JP" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
</svelte:head>

<Navbar />

<Hero />

<h1 class="font-elec text-3xl text-red-400">Portfolio</h1>

<div class="grid grid-flow-row grid-cols-3 gap-3">
	<div class="flex items-center justify-center">
		<img src="/img/logo.svg" alt="logo" class="w-40" />
	</div>
	<div class="col-span-2 flex flex-col items-center justify-center">
		<p class="prose prose-lg border-l-2 border-green-500 p-3 text-white">
			Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
			ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
			officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
			minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
			sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia
			voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
			eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
			sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
		</p>
	</div>
	<div class="col-span-3 mx-auto my-5">
		<p class="prose prose-lg p-4 text-white">
			Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
			ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
			officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
			minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
			sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia
			voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
			eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
			sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
		</p>
	</div>
</div>

<Footer />
