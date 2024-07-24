/**
 * Copyright Constance Neeser 2024.
 *
 * This file licensed under the
 * Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license.
 * See the LICENSE-CC-BY-NC-SA file.
 *
 * Text of the license available: https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {ref} from "vue";

const internal = [

    //region Helen email
    [
        {
            from: "Candice Brown <cbrown@theloaf.com>",
            to: "Helen Taylor",
            subject: "Please be there tomorrow",
            content: `
Hi Helen,

Please be there tomorrow. I know you don't like kissing ass with the snobbery, 
but people are asking for you to be there.

The feeding will be fine if you're not there for one night. 

If you'd like to get dressed together, let me know and we can get dressed together.
Or do a bit of shopping if you don't have anything ...

Candice Brown <br>
*“to build a better world, you must first dream of a better world.”*
        `
        },

        {
            from: "Candice Brown <cbrown@theloaf.com>",
            to: "Helen Taylor <htaylor@theloaf.com>",
            subject: "Please be there tomorrow",
            content: `
Come on Helen you need to at least reply! Please come out of the tunnels often enough to not
lose touch. Especially with all the snoops poking their noses around at the moment.  

Candice Brown <br>
*“to build a better world, you must first dream of a better world.”*
        `
        },
        {
            from: "Candice Brown <cbrown@theloaf.com>",
            to: "Helen Taylor <htaylor@theloaf.com>",
            subject: "Please be there tomorrow",
            content: `
Do I need to send someone down there to check on you?   

Candice Brown <br>
*“to build a better world, you must first dream of a better world.”*
        `
        },
        {
            from: "Helen Taylor <htaylor@theloaf.com>",
            to: "Candice Brown <cbrown@theloaf.com>",
            subject: "Please be there tomorrow",
            content: `
I'll be there. 

Sorry, it's growing fast. I need to feed this one again.
        `
        },
    ],
    //endregion

    //region Jung invite
    [
        {
            from: "Candice Brown <cbrown@theloaf.com>",
            to: "pa@francisjungsociety.com",
            subject: "Invitation to the 2023 St Anthony's Loaf Fund Raiser",
            content: `
Dear Mr Jung,

I would like to invite you to this year's fund raising event for 
St. Anthony's Loaf. 

St. Anthony's is a soup kitchen that has operated out of the Ninth Ward for the last decade.
It was founded by a group of NOLA citizens that had helped during and in the days following
the Katrina flooding. 

This year the event will be held at the South Bayou Wine Estate. More details are in the 
attached PDF. 

If you could RSVP by $DATE. VIP tickets cost $250, and include complementary drinks and dinner. 
Entertainment  

Candice Brown <br>
*“to build a better world, you must first dream of a better world.”*
        `
        },

        {
            from: "Margret Ashwood <pa@francisjungsociety.com>",
            to: "Candice Brown <cbrown@theloaf.com>",
            subject: "Invitation to the 2023 St Anthony's Loaf Fund Raiser",
            content: `
Dear Ms. Brown,

Mr. Francis Jung will be attending. Ticket payment has been made to your account, and proof of payment 
has been attached.

Best, <br>
Margret Ashwood <br>
Personal Assistant to Mr. Francis Jung
`
        }
    ],
    //endregion
];

let id = 1;
internal.forEach(e => {
    e.id = id++;
    e.expanded = false;
});

export const EMAILS = ref(internal);