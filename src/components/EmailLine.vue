<template>
    <div v-if="!expanded"
         class="email-line"
         @click="expand()">
        <div class="centered">
            <div class="authors">
                {{ authors }}
            </div>
            <div>
                {{ subject }}
            </div>
            <div class="content" v-html="content">
            </div>
        </div>
    </div>
    <EmailExpanded v-else :emails="emails"/>
</template>


<script setup>

import {computed, ref, watch} from "vue";
import EmailExpanded from "./EmailExpanded.vue";
import {marked} from "marked";

const props = defineProps({
    email: {
        required: true
    }
})

const emails = computed(() => {
    let email = props.email;
    if (!Array.isArray(email)) {
        email = [email];
    }

    return email;
})

const emit = defineEmits(["expand"]);

const expanded = ref(!!props.email.expanded);

watch(() => props.email.expanded, () => {
    expanded.value = !!props.email.expanded
}, {deep: true})

const authors = computed(() => {
    let email = props.email;
    if (!Array.isArray(email)) {
        email = [email];
    }

    let names = email.map(email => email.from);
    email.forEach(email => {
        let to = Array.isArray(email.to) ? email.to : [email.to];
        to.forEach(name => names.push(name));
    })
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

    return marked.parse(emails.at(-1).content);
})



function expand() {
    emit("expand", props.email);
}


</script>


<style>

.email-line {
    font-size: 12px;
    padding: 0.5rem 1rem;
    line-height: 1.05rem;

    display: grid;
    align-items: center;

    --colour: black;
    color: var(--colour);

    --background: white;
    background: var(--background);
    transition: background-color 100ms ease-in-out;

    cursor: pointer;

    .centered {
        margin-block: auto;
    }

    @media (any-hover: hover) {
        &:hover {
            background: color-mix(in srgb, var(--background), rgb(0 0 200) 10%);
            transition-duration: 200ms;
        }
    }
}



.email-line:has(+ .email-expanded, + .email-line)  {
    border-bottom: thin solid var(--border);
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