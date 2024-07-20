import {ref} from "vue";

export const EMAILS = ref([
    {
        from: "First Person <person@email.com>",
        to: "Second <second@place.com>",
        subject: "Hello",
        content: `What is it that you want to be doing?`
    },

    [
        {
            from: "First Person <person@email.com>",
            to: "Third <third@place.com>",
            subject: "Hello2",
            content: `What is it that you want to be doing?`
        },

        {
            from: "Second <second@place.com>",
            to: ["First Person <person@email.com>", "Blake <blake@drake.com>"],
            subject: "Hello2",
            content: `I want to be making dreamtar`
        },

    ],

    {
        from: "First Person <person@email.com>",
        to: "Second <second@place.com>",
        subject: "Hello2",
        content: `What is it that you want to be doing?`
    },

    {
        from: "First Person <person@email.com>",
        to: "Second <second@place.com>",
        subject: "Hello2",
        content: `What is it that you want to be doing?`
    },

    {
        from: "First Person <person@email.com>",
        to: "Second <second@place.com>",
        subject: "Hello2",
        content: `What is it that you want to be doing?`
    },

    {
        from: "First Person <person@email.com>",
        to: "Second <second@place.com>",
        subject: "Hello2",
        content: `What is it that you want to be doing?`
    },

    {
        from: "First Person <person@email.com>",
        to: "Second <second@place.com>",
        subject: "Hello2",
        content: `What is it that you want to be doing?`
    },

    {
        from: "First Person <person@email.com>",
        to: "Second <second@place.com>",
        subject: "Hello2",
        content: `What is it that you want to be doing?`
    },
]);