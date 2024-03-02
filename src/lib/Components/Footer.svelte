<script>
	import Icon from '@iconify/svelte'
	import Logo from '$lib/assets/logo.svg'
	import { githubLink } from '../../stores'
	import { linkedInLink } from '../../stores'
	let now = new Date()

	function handleAnchorClick(event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		let anchor = document.getElementById(anchorId)
		if (anchor === null) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		} else {
			window.scrollTo({
				top: anchor.offsetTop,
				behavior: 'smooth'
			})
		}
	}
</script>

<footer
	class="max-w-screen relative flex flex-col items-center justify-center border-t bg-black/60 p-3"
>
	<div class="flex w-3/5 items-center justify-between">
		<div class="mb-3 w-64 flex-1 px-5">
			<img src={Logo} alt="logo" />
		</div>
		<div class="mb-3 flex-1 font-elec text-2xl">
			<h2 class="mb-3 font-elec text-2xl">Links</h2>
			<div class="border-l-2 border-green-500">
				<div class="ml-2">About</div>
				<div class="ml-2">Projecten</div>
				<div class="ml-2">CV</div>
			</div>
		</div>
		<div class="mb-3 flex-1 font-elec text-2xl">
			<h2 class="mb-3 font-elec text-2xl">Socials</h2>
			<div class="flex flex-row items-center justify-evenly border-l-2 border-green-500">
				<a href={$githubLink} class="mx-2 flex items-center justify-center"
					><Icon icon="mdi:github" width="3rem" /></a
				>
				<a href={$linkedInLink} class="mx-2 flex items-center justify-center"
					><Icon icon="mdi:linkedin" width="3rem" /></a
				>
			</div>
		</div>
	</div>
	<div
		class="group flex w-screen flex-auto flex-row justify-center p-1 py-1 pb-12 text-center text-xl font-bold decoration-green-500 transition-all duration-300 ease-in-out hover:text-zinc-200"
	>
		<span class="flex-auto justify-self-center text-center">
			&copy; {now.getFullYear()} Jan-Peter Dhallé
		</span>
		<a
			href="/#"
			class="absolute right-6 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]"
			on:click={handleAnchorClick}
		>
			<span class="flex-1">To&nbsp;the&nbsp;top</span>
			<Icon class="h-full flex-1 text-4xl" icon="mdi:arrow-up-bold" />
		</a>
	</div>
</footer>
