<script lang="ts">
	import { guessPlatform } from '$lib/platform.js';
	import { writable } from 'svelte/store';
	const selectedTab = writable(guessPlatform());
	const appVersion = '0.1.0';
	const appSize = 58;
	function apkUrl(): string {
		return '#';
	}
	const platformOptions: { name: string }[] = [
		{
			name: 'Android'
		},
		{ name: 'Linux' }
	];
</script>

<div class="w3-container w3-padding-64 hero">
	<h1><span>Bridging gaps,</span> <span>Building futures</span></h1>
</div>
<div id="header" class="w3-bar">
	<a class="w3-button w3-right" href="#download">Get the app</a>
</div>
<div id="download" class="w3-container w3-padding">
	<div class="download-card dload-tabs w3-card w3-auto w3-center w3-container">
		<div>
			{#each platformOptions as platformOption}
				<button
					class="w3-button w3-inline {$selectedTab == platformOption.name.toLowerCase()
						? 'selected'
						: 'unselected'}"
					on:click={() => selectedTab.set(platformOption.name.toLowerCase())}
				>
					{platformOption.name}
				</button>
			{/each}
		</div>
		<div class="w3-container w3-border-top">
			{#if $selectedTab == 'android'}
				<div class="w3-container w3-padding">
					<a class="w3-button android-download w3-large" href={apkUrl()}>Download the apk</a>
					<p class="w3-tiny">Version {appVersion}, {appSize}MB</p>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="sass">
@use 'sass:color';

*
  color: white

$hh1: #909EAE
$hh2: #5C8DC5
$hh3: #AD9E90
$hh4: #736F60

$background: color.adjust($hh1, $lightness: -51%)
$focus: color.adjust($hh2, $saturation: -30%, $lightness: -20%)

a.android-download
  background: $focus
  border-radius: 25px


.hero
  background: $background
  background:
    attachment: fixed
    repeat: no-repeat
    position: center
  margin: 0
  padding: 40px
  h1
    margin: 50px
    text-align: center
    font-size: xxx-large
    font: "Ubuntu mono"
    font-weight: bold
    span:first-child
      color: #dd6666
    span:last-child
      color: #aa66dd
#header
  position: sticky
  background: color.adjust($hh4, $alpha: 0.7, $blue: 1%, $red: 1%)
  backdrop-filter: blur(5px)
#download
  background: color.adjust($background, $green: 2%)
  .download-card
    background: $background
    padding:
      left: 0
      right: 0
    max-width: 500px
    & > div:first-child
      background: color.adjust($background, $lightness: 5%)
      & > button.selected
        background: $hh3 !important
</style>
