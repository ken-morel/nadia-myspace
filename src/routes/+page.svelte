<script lang="ts">
	import type { Submission } from '$lib/submissions.js';
	export let data: { submissions: Submission[] };
</script>

<section class="hero w3-container w3-center">
	<h1>Book a bike.</h1>
	<p>Share your ride experiences and help us build a better transport ecosystem.</p>
	<a href="/survey" class="w3-btn w3-round-large">Share Your Story</a>
</section>

<section class="experiences">
	{#each data.submissions as submission, i (i)}
		<div class="experience">
			<p>{submission.content}</p>
		</div>
	{/each}
</section>

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

section.experiences
  height: 300px
  $border: 2px theme.$grey solid
  display: inline-block
  overflow-x: scroll
  border:
    top: $border
    bottom: $border
  padding:
    top: 20px
    bottom: 20px
  div.experience
    height: 100%
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    align-content: stretch
    justify-content: space-evenly
    align-items: center
</style>
