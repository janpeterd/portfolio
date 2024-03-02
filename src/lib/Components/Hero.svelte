<script>
	import HeroImg from '$lib/assets/hero.jpg'
</script>

<div class="relative mx-3 my-5 grid h-full grid-cols-2 items-center justify-center">
	<img class="rounded-3xl object-cover" src={HeroImg} alt="me" />
	<div
		class="mx-3 flex h-full flex-col items-center justify-center rounded-3xl bg-black/50 text-center backdrop-blur-xl backdrop-saturate-150"
	>
		<h2 class="font-elec text-8xl font-bold">Welkom op mijn</h2>
		<h2
			class="bg-gradient-to-b from-teal-400 to-violet-600 bg-clip-text font-elec text-8xl font-bold text-transparent"
		>
			Portfolio
		</h2>
		<p class="inline-block rounded-full px-5 py-2 text-black backdrop-invert">Lees meer</p>
	</div>
</div>

<div class="bottom-gradient absolute top-0 h-full w-screen">Gradient</div>

<style>
	.bottom-gradient {
		z-index: -10;
		mask-image: radial-gradient(305vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
		background: url('/img/grain.webp'),
			radial-gradient(105vw 450px at 50% 50%, theme(colors.blue.600 / 80%), transparent);
	}
</style>
