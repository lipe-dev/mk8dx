<script>
	import '../app.postcss';
	import 'iconify-icon';

	import { DarkMode } from 'flowbite-svelte';
</script>

<main class="container mx-auto px-4 py-8">
	<DarkMode />

	<slot />
</main>
