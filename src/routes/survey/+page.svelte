<div class="w3-padding-64">
	<a href="/" class="w3-button w3-display-topleft">Home</a>
	<div class="container">
		<h1>Survey</h1>
		<p>We are sorry to hear you had a bad experience. Please, tell us what happened.</p>
		<form method="POST">
			<label for="experience">Your experience:</label>
			<div class="textarea-wrapper">
				<textarea class="w3-input" name="experience" id="experience"></textarea>
			</div>
			<button class="w3-btn w3-section w3-right">Submit</button>
		</form>
	</div>
</div>

<style lang="sass">
@use '../../theme'

div.container
  max-width: 600px
  margin: auto
  padding: 2em
  border-radius: 15px
  box-shadow: 0 0 20px rgba(0,0,0,0.1)

.textarea-wrapper
  padding: 3px
  background: theme.$nadient
  border-radius: 8px
  margin-bottom: 1em

textarea
  height: 200px
  resize: vertical
  border-radius: 6px
  border: none
  &:focus
    outline: none

label
  display: block
  margin-bottom: 0.5em
  font-weight: bold
  color: #333

button
  border-radius: 8px
  background: theme.$nadient
  color: white
  border: none
  padding: 10px 20px
  cursor: pointer
  transition: opacity 0.3s
  &:hover
    opacity: 0.9

</style>
