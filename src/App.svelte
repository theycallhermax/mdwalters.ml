<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';
  import Content from './lib/Content.svelte';

  export var motd = "Fuck Eris";
</script>

<main>
  <Header motd={motd}/>
  <SocialBar/>
  <Content/>
</main>
