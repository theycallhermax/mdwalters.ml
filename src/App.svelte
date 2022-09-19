<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';
  import Content from './lib/Content.svelte';

  export var motd = ["Never gonna give you up", "Hello world!"];
</script>

<main>
  <Header motd={motd[Math.floor(Math.random() * eightBall.length)]}/>
  <SocialBar/>
  <Content/>
</main>
