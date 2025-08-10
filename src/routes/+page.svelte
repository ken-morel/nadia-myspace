<script lang="ts">
	export let data: { submissions: string[] };
</script>

<section class="hero w3-container w3-center">
	<h1>Book a bike.</h1>
	<p>Share your ride experiences and help us build a better transport ecosystem.</p>
	<a href="/survey" class="w3-btn w3-round-large">Share Your Story</a>
</section>

{#if data.submissions.length > 0}
	<section class="experiences w3-container">
		<h2 class="w3-center">Recent Experiences</h2>
		<div class="grid">
			{#each data.submissions as submission, i (i)}
				<div class="card">
					<p>"{submission}"</p>
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
  .grid
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    gap: theme.$spacing-8
  .card
    background: white
    padding: theme.$spacing-8
    border-radius: theme.$border-radius
    box-shadow: theme.$shadow-md
    p
      font-style: italic
      color: theme.$grey

</style>
