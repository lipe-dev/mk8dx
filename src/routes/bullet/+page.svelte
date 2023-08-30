<script lang="ts">
	import { A, Card, GradientButton, Heading, Hr, Input, Modal, P, Span } from 'flowbite-svelte';
	import { extensions } from '$lib/data/extensions';
	import { base } from '$app/paths';

	let value = '';

	$: extensionsFiltered = extensions
		.filter(
			(extension) =>
				extension.name.toLowerCase().includes(value.toLowerCase()) ||
				extension.stage.name.toLowerCase().includes(value.toLowerCase())
		)
		.sort((a, b) => a.duration - b.duration);

	let videoURL = '';
	let modalOpen = false;
</script>

<div class="text-center text-white">
	<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl">
		<iconify-icon icon="game-icons:bullet-bill" class="-mb-2" />
		<Span gradient>Bullet</Span> Extensions.
	</Heading>

	<P class="text-center mb-4">
		Something is missing? Bugs? Reach out to me on Discord
		<Span gradient>@true_ender</Span>, or add it yourself! PRs welcome on
		<A href="https://github.com/lipe-dev/mk8dx">GitHub</A>
	</P>

	<Input placeholder="Search Stage" size="lg" bind:value />

	<Hr />

	<div class="flex flex-row gap-4">
		{#each extensionsFiltered as extension}
			<Card img={base + extension.image} class="mb-4 relative overflow-hidden">
				<div class="absolute top-0 right-0 w-24 h-16">
					<img src={extension.stage.image} alt="" class="w-full h-full object-cover" />
				</div>

				<Heading tag="h5" class="mb-2 text-gray-900 dark:text-white">
					{extension.stage.name} - {extension.name}
				</Heading>

				<P class="flex flex-row items-center justify-center text-xl">
					<iconify-icon icon="game-icons:bullet-bill" class="mr-2" />
					{extension.duration}
				</P>
				<p class="mb-4 text-center text-gray-500">10 coins, meta build</p>

				<P class="mb-4">{extension.description}</P>

				<GradientButton
					on:click={() => {
						videoURL = extension.video;
						modalOpen = true;
					}}
					outline
					color="purpleToPink"
					class="hover:shadow hover:scale-[1.02] transition transition-all-[0.2s] hover:shadow-purple-900/50 hover:shadow-lg"
				>
					<iconify-icon icon="mdi:youtube" class="mr-2 text-xl" />

					Video
				</GradientButton>
			</Card>
		{:else}
			<P>
				No extensions/stages found. Should there be results here? Reach out to me on Discord
				<Span gradient>@true_ender</Span>, or add it yourself! PRs welcome on
				<A href="https://github.com/lipe-dev/mk8dx">GitHub</A>
			</P>
		{/each}
	</div>

	<Modal title="Video" bind:open={modalOpen} autoclose>
		<iframe
			width="620"
			height="350"
			src={videoURL}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</Modal>
</div>
