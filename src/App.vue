<template>
    <div class="app">
        <header>
            Only mail
        </header>

        <div class="email-grid">
            <EmailLine :email="email" v-for="email in emails" @expand="onExpand"/>
        </div>

        <footer>
            Copyright The Bestest Dev &copy; {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>

<script setup>

import {EMAILS} from "./emails-store.js";
import EmailLine from "./components/EmailLine.vue";
import {onBeforeUnmount, onMounted} from "vue";

const emails = EMAILS;

function onExpand(email) {
    emails.value.forEach(e => {
        if (e.id !== email.id) {
            e.expanded = false;
        }
    })
    email.expanded = true;
}

function escapeHandler() {
    emails.value.forEach(e => e.expanded = false);
}

onMounted(() => {
    document.addEventListener('keydown', escapeHandler, true);
})

onBeforeUnmount(() => {
    document.removeEventListener('keydown', escapeHandler, true);
})

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
    grid-auto-rows: minmax(80px, auto);

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
