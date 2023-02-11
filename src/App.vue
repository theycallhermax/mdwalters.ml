<script setup lang="ts">
    import { RouterView } from "vue-router";
    import { ref } from "vue";

    import Header from "./lib/Header.vue";

    const path = ref(window.location.pathname);
</script>

<template>
    <Header/>
    <RouterView/>
    <hr class="m-3">
    <div class="hstack gap-2 justify-content-center text-wrap">
        <img src="https://www.cutercounter.com/hits.php?id=humxfkcnk&nd=6&style=80" alt="website counter">
        <img src="https://moods.imood.com/display/uname-pancake/imood.gif" alt="The current mood of pancake at www.imood.com">
        <a href="http://internetometer.com/give/48831"><img src="http://internetometer.com/imagesmall/48831.png"></a>
    </div>
</template>
