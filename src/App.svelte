<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';

  export var motd = "The Hacker's Keyboard is growing on me";
</script>

<main>
  <Header motd={motd}/>
  <SocialBar/>
  <div class="container">
    <h2>About</h2>
    <p>Hi, I'm M.D.! Most of the stuff I make are useless, but hey, people actually like them!</p>
  </div>
</main>
