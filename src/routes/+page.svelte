<script lang="ts">
	import type { PageData } from './$types.ts';
	import { onMount } from 'svelte';

	export let data: PageData;

	let experiencesContainer: HTMLElement;

	onMount(() => {
		if (!experiencesContainer) return;

		let isScrolling = true;

		const scroll = () => {
			if (!isScrolling) return;
			// Check if we are at the end of the scroll
			if (
				experiencesContainer.scrollLeft + experiencesContainer.clientWidth >=
				experiencesContainer.scrollWidth
			) {
				// Instantly jump back to the start
				experiencesContainer.scrollTo({ left: 0, behavior: 'auto' });
			} else {
				// Continue scrolling
				experiencesContainer.scrollBy({ left: 1, behavior: 'auto' });
			}
		};

		const interval = setInterval(scroll, 50);

		experiencesContainer.addEventListener('mouseenter', () => (isScrolling = false));
		experiencesContainer.addEventListener('mouseleave', () => (isScrolling = true));

		return () => {
			clearInterval(interval);
			experiencesContainer.removeEventListener('mouseenter', () => (isScrolling = false));
			experiencesContainer.removeEventListener('mouseleave', () => (isScrolling = true));
		};
	});
</script>

<section class="hero w3-container w3-center">
	<h1>Revolutionizing Traffic, Evolutionizing Transport.</h1>
	<p>Share your ride experiences and help us build a better transport ecosystem.</p>
	<a href="/survey" class="w3-btn w3-round-large">Share Your Story</a>
</section>

{#if data.submissions.length > 0}
	<section class="experiences">
		<h2 class="w3-center">Recent Experiences</h2>
		<div class="scroller" bind:this={experiencesContainer}>
			{#each data.submissions as submission, i (i)}
				<div class="card">
					<p>"{submission.content}"</p>
					<span class="w3-opacity w3-right">{submission.username}</span>
				</div>
			{/each}
		</div>
	</section>
{/if}

<style lang="sass">
@use '../theme'

.hero
  padding-top: theme.$spacing-16
  padding-bottom: theme.$spacing-16
  h1
    font-size: theme.$font-size-4xl
    font-weight: 700
    max-width: 800px
    margin: 0 auto theme.$spacing-4
  p
    font-size: theme.$font-size-xl
    color: theme.$grey
    max-width: 600px
    margin: 0 auto theme.$spacing-8
  a
    background: theme.$gradient
    color: white
    font-weight: 500
    padding: 0.8em 1.5em
    &:hover
      opacity: 0.9

.experiences
  padding-bottom: theme.$spacing-16
  h2
    font-size: theme.$font-size-3xl
    font-weight: 700
    margin-bottom: theme.$spacing-8
  .scroller
    display: flex
    overflow-x: scroll
    padding-bottom: theme.$spacing-4
    // Hide scrollbar
    scrollbar-width: none // Firefox
    &::-webkit-scrollbar
      display: none // Chrome, Safari, Opera
  .card
    flex: 0 0 400px
    margin-right: theme.$spacing-8
    padding: theme.$spacing-8
    border-radius: theme.$border-radius
    box-shadow: theme.$shadow-md
    p
      text-overflow: ellipsis
      max-height: 320px
      font-style: italic
      color: theme.$grey

</style>
