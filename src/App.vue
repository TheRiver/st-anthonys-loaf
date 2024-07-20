<template>
    <div class="app">
        <header>
            Only mail
        </header>

        <div class="email-grid">
            <EmailLine :email="email" v-for="email in emails"/>
        </div>

        <footer>
            Copyright The Bestest Dev &copy; {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>

<script setup>

import {EMAILS} from "./emails-store.js";
import EmailLine from "./components/EmailLine.vue";

const emails = EMAILS;

</script>


<style scoped>

.app {
    height: 100dvh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
}

.email-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50px, auto);

    margin-bottom: auto;
    max-height: 100%;
    overflow-y: auto;
    scroll-snap-type: block mandatory;
    scroll-snap-align: center;
}

:is(header, footer) {
    text-align: center;
    background: gainsboro;
    height: 2rem;
    line-height: 2rem;

    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 100%;
}

</style>
