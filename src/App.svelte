<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';
  import Content from './lib/Content.svelte';

  export var motd = "As of September 16, 2022, the MOTD was last updated 14 days ago";
</script>

<main>
  <Header motd={motd}/>
  <SocialBar/>
  <Content/>
</main>
