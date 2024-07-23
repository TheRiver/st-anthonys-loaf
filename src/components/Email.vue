<template>
    <div class="email">
        <header>
            <span>From: </span>
            <span>{{email.from}}</span>

            <span>To: </span>
            <div>
                <div v-for="to in to">{{to}}</div>
            </div>

            <span>Subject:</span>
            <span>{{email.subject}}</span>
        </header>

        <div v-html="content">
        </div>
    </div>
</template>

<script setup>

import {computed} from "vue";
import {marked} from "marked";

const props = defineProps({
    email: {
        type: Object,
        required: true
    }
})

const content = computed(() => {
    return marked.parse(props.email.content);
})

const to = computed(() => {
    return Array.isArray(props.email.to) ? props.email.to : [props.email.to];
})

</script>



<style>

.email {
    p {
        margin-block: 0.5rem;
    }
}

.email + .email {
    border-top: thin solid var(--border);
}

</style>

<style scoped>

.email {
    padding: 0.5rem 1rem;
}

header {
    color: grey;
    font-size: 0.9em;

    display: grid;
    grid-template-columns: max-content 1fr;
    grid-auto-rows: auto;

    column-gap: 0.5rem;
}

</style>