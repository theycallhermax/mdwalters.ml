<script>
  export var motd;
  export let i;
  
  export function easterEgg() {
      alert("Mr. Header wanted me to tell you to leave him alone")
  }
</script>

<div class="container-fluid p-5 bg-primary text-white">
  <center on:click={easterEgg}><h1 class="display-1">M.D. Walters' Website!</h1></center>
  <marquee class="h4">{motd}</marquee>
</div>
