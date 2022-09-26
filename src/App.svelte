<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';
  import Content from './lib/Content.svelte';

  export var motd = "Eight Ball coming to a Flathub near you!";
</script>

<main>
  <Header motd={motd}/>
  <SocialBar/>
  <Content/>
</main>
