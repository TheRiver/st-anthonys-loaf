<template>
    <div class="email-expanded">
        <header>
            {{ subject }}
        </header>
        <Email v-for="email in emails" :email="email"/>
    </div>
</template>


<script setup>

import Email from "./Email.vue";
import {computed} from "vue";

const props = defineProps({
    emails: {
        type: Array,
        required: true
    }
})

const subject = computed(() => {
    return props.emails[0]?.subject ?? "Unknown subject";
})

</script>


<style scoped>

.email-expanded {
    position: relative;
    padding-left: 1rem;

    border-top: thin solid black;

    :is(header, footer) {
        background: gainsboro;
        padding-block: 2px;
        padding-left: 1rem;
    }


    &::before {
        position: absolute;
        left: 0;
        top: 0;

        content: ' ';
        display: block;
        height: 100%;
        width: 1rem;
        background: gainsboro;
    }
}

.email-expanded:has(+ .email-expanded, + .email-line)  {
    border-bottom: thin solid var(--border);
}


</style>