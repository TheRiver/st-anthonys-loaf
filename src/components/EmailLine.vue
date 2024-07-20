<template>
    <div class="email-line">
        <div class="authors">
            {{ authors }}
        </div>
        <div>
            {{ subject }}
        </div>
        <div class="content">
            {{content }}
        </div>
    </div>
</template>


<script setup>

import {computed} from "vue";

const props = defineProps({
    email: {
        required: true
    }
})

const authors = computed(() => {
    console.log("---");
    let email = props.email;
    if (!Array.isArray(email)) {
        email = [email];
    }

    let names = email.map(email => email.from);
    email.forEach(email => {
        let to = Array.isArray(email.to) ? email.to : [email.to];
        to.forEach(name => names.push(name));
    })
    console.log("names: ", names);
    names = new Set(names.map(name => name.split("<").at(0).split(" ").at(0)));
    return [...names].join(", ")
})

const subject = computed(() => {
    let emails = props.email;
    if (!Array.isArray(emails)) {
        emails = [emails];
    }

    return emails.at(0).subject;
})

const content = computed(() => {
    let emails = props.email;
    if (!Array.isArray(emails)) {
        emails = [emails];
    }

    return emails.at(-1).content;
})

</script>


<style>

.email-line {
    font-size: 12px;
    padding: 0.5rem 1rem;
    line-height: 1.05rem;

    --colour: black;
    color: var(--colour);

    --background: white;
    background: var(--background);
    transition: background-color 100ms ease-in-out;

    cursor: pointer;

    &:hover {
        background: color-mix(in srgb, var(--background), rgb(0 0 200) 10%);
        transition-duration: 200ms;
    }
}

.email-line + .email-line {
    border-top: thin solid var(--border);

}

.content {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: oklch(from var(--colour) calc(l + 0.6) c h);

}

.authors {
    font-size: calc(1em + 4px);
    margin-bottom: 3px;
}

</style>