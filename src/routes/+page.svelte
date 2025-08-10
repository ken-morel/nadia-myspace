<script lang="ts">
	import type { PageData } from './$types.ts';
	export let data: PageData;
</script>

<section class="hero w3-container w3-center">
	<h1>Book a Bike.</h1>
	<p>Share your ride experiences and help us build a better transport ecosystem.</p>
	<a href="/survey" class="w3-btn w3-round-large">Share Your Story</a>
</section>

{#if data.submissions.length > 0}
	<section class="experiences">
		<h2 class="w3-center">Recent Experiences</h2>
		<div class="scroller-container">
			<div class="scroller">
				<!-- Duplicate the content for a seamless loop -->
				{#each data.submissions as submission, id (id)}
					<div class="card">
						<p>{submission.content}</p>
						<span class="w3-opacity w3-right">{submission.username}</span>
					</div>
				{/each}
				{#each data.submissions as submission, id (id + 'dup')}
					<div class="card">
						<p>{submission.content}</p>
						<span class="w3-opacity w3-right">{submission.username}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<style lang="sass">
@use '../theme'

@keyframes scroll
  0%
    transform: translateX(0)
  100%
    transform: translateX(-50%)


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
  .scroller-container
    padding: 30px
    overflow: hidden
    -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent)
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent)

  .scroller
    display: flex
    width: fit-content
    animation: scroll 40s linear infinite
    &:hover
      animation-play-state: paused
      .card
        opacity: 0.3
        filter: blur(1px)

    .card
      width: 400px
      margin: 0 theme.$spacing-4
      padding: theme.$spacing-8
      border-radius: theme.$border-radius
      box-shadow: theme.$shadow-md
      background: white
      transition: transform 0.4s ease-out, box-shadow 0.3s ease, opacity 3s ease-in, filter 1s ease-in
      p
        font-style: italic
        color: theme.$grey
        text-overflow: ellipsis
        max-height: 320px
        &::before,
        &::after
          content: '"'
      &:hover
        opacity: 1
        transform: scale(1.05)
        box-shadow: theme.$shadow-lg
        filter: none
        p
          font-style: normal
          &::before,
          &::after
            content: ''

</style>
