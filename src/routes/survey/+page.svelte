<div class="w3-container">
	<div class="form-container">
		<h1>Share Your Experience</h1>
		<p>Your feedback helps us improve. Please describe your experience below.</p>
		<form method="POST">
			<label for="content">Your story:</label>
			<textarea name="content" id="content" rows="8"></textarea>
			<button type="submit" class="w3-btn w3-round-large">Submit Feedback</button>
		</form>
	</div>
</div>

<style lang="sass">
@use '../../theme'

.form-container
  max-width: 700px
  margin: 0 auto
  background: white
  padding: theme.$spacing-16
  border-radius: theme.$border-radius
  box-shadow: theme.$shadow-lg
  text-align: center

h1
  font-size: theme.$font-size-3xl
  font-weight: 700
  margin-bottom: theme.$spacing-4

p
  color: theme.$grey
  margin-bottom: theme.$spacing-8

label
  display: block
  text-align: left
  font-weight: 500
  margin-bottom: theme.$spacing-2

textarea
  width: 100%
  padding: theme.$spacing-4
  border-radius: theme.$border-radius
  border: theme.$border-width solid theme.$border-color
  transition: border-color 0.2s, box-shadow 0.2s
  &:focus
    outline: none
    border-color: theme.$primary
    box-shadow: 0 0 0 3px rgba(theme.$primary, 0.2)

button
  width: 100%
  margin-top: theme.$spacing-8
  padding: 0.8em 1.5em
  background: theme.$gradient
  color: white
  font-weight: 500
  &:hover
    opacity: 0.9

</style>
