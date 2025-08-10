<div class="w3-container w3-center">
	<div class="content">
		<div class="icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline
					points="22 4 12 14.01 9 11.01"
				/></svg
			>
		</div>
		<h1>Thank You!</h1>
		<p>Your feedback has been received. We appreciate you taking the time to help us improve.</p>
		<a href="/" class="w3-btn w3-round-large">Return to Home</a>
	</div>
</div>

<style lang="sass">
@use '../../../theme'

.content
  max-width: 600px
  margin: 0 auto
  padding: theme.$spacing-16 0
  text-align: center

.icon
  display: inline-block
  padding: 15px 18px
  background: theme.$gradient
  border-radius: 70px
  margin-bottom: theme.$spacing-8
  svg
    stroke: white

h1
  font-size: theme.$font-size-3xl
  font-weight: 700
  margin-bottom: theme.$spacing-4

p
  color: theme.$grey
  margin-bottom: theme.$spacing-8

a
  background: theme.$gradient
  color: white
  font-weight: 500
  padding: 0.8em 1.5em
  &:hover
    opacity: 0.9

</style>
