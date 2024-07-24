<template>
    <div class="app">
        <header>
            <h1>Only mail</h1>
            <span>cbrown@theloaf.com</span>
        </header>

        <div class="email-grid">
            <EmailLine :email="email" v-for="email in emails" @expand="onExpand" @contract="email.expanded = false"/>
        </div>

        <footer>
            Copyright <a href="https://github.com/TheRiver/st-anthonys-loaf" target="_blank" title="See the source code">The Email Company</a> 2023
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

    @media (width > 800px){
        max-width: 800px;
        margin-inline: auto;
        border-inline: thin solid var(--border);
    }
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
}

header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    h1 {
        font-size: 1rem;
        text-align: center;
        width: 100%;

        grid-column: 3
    }

    h1 + * {
        grid-column: 5;
    }
}

footer {
    > a:not(:hover) {
        color: inherit;
    }
}

</style>
