<script>
	import '../theme.sass';
</script>

<header>
	<nav class="w3-container">
		<a href="/" class="logo">
			<span>Nadia</span>space
		</a>
		<a href="/survey" class="w3-btn w3-round-large">Submit Experience</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="w3-container">
		<p>&copy; 2025 Nadia Space. All rights reserved.</p>
	</div>
</footer>

<style lang="sass">
@use '../theme'

:global(body)
  font-family: theme.$font-family
  background-color: theme.$light
  color: theme.$dark

header
  padding: theme.$spacing-4 0
  border-bottom: theme.$border-width solid theme.$border-color

nav
  display: flex
  justify-content: space-between
  align-items: center

  a.logo
    font-size: theme.$font-size-2xl
    font-weight: 700
    text-decoration: none
    color: theme.$dark
    span
      color: theme.$primary

  a.w3-btn
    background: theme.$gradient
    color: white
    font-weight: 500
    &:hover
      opacity: 0.9

main
  padding: theme.$spacing-16 0

footer
  padding: theme.$spacing-8 0
  text-align: center
  color: theme.$grey
  font-size: theme.$font-size-base

</style>
