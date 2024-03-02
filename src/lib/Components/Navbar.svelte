<script>
	import NavLink from '$lib/Components/NavLink.svelte'
	import Icon from '@iconify/svelte'
	import Logo from '$lib/assets/logo.svg'
	import { githubLink } from '../../stores'
	import { linkedInLink } from '../../stores'
</script>

<div class="mb-5 flex justify-between bg-transparent font-elec">
	<div
		class="justify-content m-2 flex w-auto items-center rounded-full border border-slate-100 bg-black/60"
	>
		<NavLink logo={true} href="#" class="relative flex items-center justify-center px-6">
			<img
				src={Logo}
				alt="logo"
				class="absolute -left-4 -top-8 w-28 transition-transform duration-300 hover:-rotate-12 hover:scale-105"
			/>
			<div class="pl-10 font-bold">Portfolio Jan-Peter Dhallé</div>
		</NavLink>
	</div>
	<div
		class="nav-right justify-content m-2 flex w-1/2 items-center rounded-full border border-slate-100 bg-black/60 text-white backdrop-blur-lg"
	>
		<NavLink href="#about">About</NavLink>
		<NavLink href="/projects">Projecten</NavLink>
		<NavLink href="#digital_cv">CV</NavLink>
		<NavLink href={$githubLink} class="flex items-center justify-center"
			><Icon icon="mdi:github" width="2rem" /></NavLink
		>
		<NavLink href={$linkedInLink} class="flex items-center justify-center"
			><Icon icon="mdi:linkedin" width="2rem" /></NavLink
		>
	</div>
</div>
