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
    <p>Hey, I'm M.D.! I code stuff that goes into the trash burner when I'm finished coding it, but I code anyway.</p>
  </div>
</main>
