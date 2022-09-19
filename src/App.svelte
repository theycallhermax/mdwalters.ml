<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';
  import Content from './lib/Content.svelte';

  export var motd = "Never gonna give you up";
</script>

<main>
  <Header motd={motd}/>
  <SocialBar/>
  <Content/>
</main>
