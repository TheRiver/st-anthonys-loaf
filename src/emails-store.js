import {ref} from "vue";

const internal = [
    {
        from: "cbrown@theloaf.com",
        to: "XYZ",
        subject: "Will you?",
        content: `
Dear Dr. XXX

Candice Brown <br>
*“to build a better world, you must first dream of a better world.”*
        `
    },
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
            content: `I want to be making *dreamtar*. 
            
It is the best of things. It is the worst of things. Like the book. 

Have you ever read the book? I really love to read. Wish I had more time to do that. I also love comics. I just generally like stories. Even movies, series. But books are the best. `
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
];

let id = 1;
internal.forEach(e => {
    e.id = id++;
    e.expanded = false;
});

export const EMAILS = ref(internal);