<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';
  import Content from './lib/Content.svelte';

  export var motd = "Notice the design revert?";
</script>

<main>
  <Header motd={motd}/>
  <SocialBar/>
  <Content/>
</main>
