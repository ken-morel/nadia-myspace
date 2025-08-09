<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="hero w3-padding-64 w3-center">
	<div class="frontline">
		<span class="logo">
			<span class="border">
				<span>Nadia</span>
				space
			</span>
		</span>
		<div>
			<span class="bar"></span>
			<p class="quote">Revolutionizing traffic, evolutionizing transport.</p>
		</div>
	</div>
</div>
<div class="sep"></div>
<div class="survey w3-padding-64">
	<div>
		<h3>Had a bad experience?</h3>
		<p>
			A memorable mark on your shoes, or a day your feet will never forget? We will be happy to
			hear from you.
		</p>
		<a class="w3-btn w3-round-large" href="/survey">Tell us more</a>
	</div>
</div>
{#if data.submissions.length > 0}
	<div class="w3-padding-64">
		<h2 class="w3-center">User Experiences</h2>
		<div class="w3-row-padding">
			{#each data.submissions as submission, i (i)}
				<div class="w3-col l4 m6 w3-margin-bottom">
					<blockquote class="w3-panel w3-leftbar w3-light-grey">
						<p class="w3-large">
							<i>"{submission}"</i>
						</p>
					</blockquote>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="sass">
@use '../theme'
@use 'sass:color'

$border-size: 10px

span.logo
  border-radius: 30px
  display: inline-block
  background: theme.$nadient
  padding: $border-size
  span.border
    background-color: color.adjust(rgba(theme.$nadia2, 0.5), $lightness: -70%)
    border-radius: 24px
    display: inline-block
    padding: 10px 15px !important
    font-size: 4em
    span
      border-radius: 15px
      background: theme.$nadient
      font-size: 1.2em
      padding: 5px 25px
div.hero
  border: none
  div.frontline
    div
      p.quote
        margin: auto
        margin-top: 30px
        max-width: 500px
        text-align: center
        font-size: 2em
        opacity: 0.4
div.sep
  height: 20px
  margin: 0
  height: 4px
  background: theme.$nadient
div.survey
  text-align: center
  a
    border: 1px solid theme.$nadia1
    color: theme.$nadia1
    &:hover
      background: theme.$nadia1
      color: white

blockquote
  border-color: theme.$nadia1 !important
  margin: 1.5em 10px
  padding: 1em 20px
  border-left-width: 5px !important
  p
    margin: 0

</style>
