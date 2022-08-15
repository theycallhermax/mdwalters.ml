<script>
  import Header from './lib/Header.svelte';
  import SocialBar from './lib/SocialBar.svelte';

  export var motd = "This is my website, go get your own >:(";
</script>

<main>
  <Header motd={motd}/>
  <SocialBar/>
  <div class="main-content">
    <h2>About</h2>
    <p>Hi, I'm M.D.! You may know me as MDWalters, MDWalters124, pancake, or pancake_flipper, but yep, they're all me. Most of the stuff I make are useless, but hey, people actually like them!</p>
  </div>
</main>
