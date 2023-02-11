<script setup lang="ts">
    import { ref } from "vue";

    const path = ref(window.location.pathname);
</script>

<template>
    <div class="container-fluid bg-primary p-5 text-light text-center">
        <h1 class="display-1">M.D. Walters' Website!</h1>
        <h2 class="text-wrap hstack gap-2 justify-content-center">
            <a href="https://blog.mdwalters.ml/" class="link-light text-center"><i class="bi bi-journal-text"></i></a> 
            <a href="https://blog.mdwalters.ml/feed.xml" class="link-light text-center"><i class="bi bi-rss"></i></a>
            <a href="https://files.mdwalters.ml/" class="link-light text-center"><i class="bi bi-folder2"></i></a>
            <a href="https://github.com/mdwalters" class="link-light text-center"><i class="bi bi-github"></i></a>
            <a href="https://youtube.com/@mdwalters" class="link-light text-center"><i class="bi bi-youtube"></i></a>
            <a href="mailto:mail@mdwalters.ml" class="link-light text-center"><i class="bi bi-envelope"></i></a>
            <a href="https://tiktok.com/@mdwaltersthefurry" class="link-light text-center"><i class="bi bi-tiktok"></i></a>
            <a href="https://reddit.com/u/pancakeflipper124" class="link-light text-center"><i  class="bi bi-reddit"></i></a>
        </h2>
        <div class="hstack gap-2 justify-content-center">
        <button v-if='path == "/"' class="btn btn-lg btn-secondary" disabled>Home</button>
        <a v-else href="/" class="btn btn-lg btn-secondary">Home</a>

        <button v-if='path == "/projects"' class="btn btn-lg btn-secondary" disabled>Projects</button>
        <a v-else href="/projects" class="btn btn-lg btn-secondary">Projects</a>
    </div>
    </div>
</template>