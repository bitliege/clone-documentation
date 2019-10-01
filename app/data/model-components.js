const components = {
    accordion: {
        id: "comAcc",
        title: "accordion",
        plural: "accordions",
        element: "accordion",
        description: [
            "Accordions are a great way to arrange and display a high volume of categoric information. They provide the opportunity to include a title, subtitle, and content. The content area is flexible and is a great way to display copy, media, code, etc. It's possible to change the colour of the trigger using the background attribute. Alternatively, you can set the alt property on the accordion group to automatically alternate accordion colours between white and the variable you've selected."
        ],
        accessibility: [
            "Coming Soon!"
        ],
        changes: [
            {
                version: "2.4.1",
                items: [
                    "Removed default borders from accordions. They must manually be applied using data-c-border."
                ]
            }
        ],
        children: {}
    },
    alert: {
        id: "comAle",
        title: "alert",
        plural: "alerts",
        element: "alert",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    backToTopLink: {
        id: "comBac",
        title: "back-to-top link",
        plural: "back-to-top links",
        element: "back-to-top-link",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    blockquote: {
        id: "comBlo",
        title: "blockquote",
        plural: "blockquotes",
        element: "blockquote",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    breadcrumb: {
        id: "comBre",
        title: "breadcrumb",
        plural: "breadcrumbs",
        element: "breadcrumb",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        changes: [
            {
                version: "2.4.0",
                items: [
                    "Reduced the spacing between breadcrumb items."
                ]
            },
            {
                version: "2.4.1",
                items: [
                    "Allows the aria-current item to be a span or p element instead of an anchor."
                ]
            }
        ],
        children: {}
    },
    button: {
        id: "comBut",
        title: "button",
        plural: "buttons",
        element: "button",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        changes: [
            {
                version: "2.4.1",
                items: [
                    "Fixed the line height of icons inside buttons.",
                    "Icons can now be placed on either side of the text in a button provided the text is wrapped in a span element.",
                    "data-c-button=\"reset\" is now available to remove the background and border properties from generic buttons."
                ]
            }
        ],
        children: {}
    },
    card: {
        id: "comCar",
        title: "card",
        plural: "cards",
        element: "card",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    carousel: {
        id: "comCaro",
        title: "carousel",
        plural: "carousels",
        element: "carousel",
        description: [
            "Carousels are an interactive way to communicate collections of content or media. They are often used when a single hero element isn't sufficient to communicate multiple facets or pieces of news. Carousels are built into Clone using the help of Glider.js. By default, carousels built using Clone's standard carousel code (found below) will work out of the box. Alternatively, they can be initialized manually (explained below) which allows you to access all of Glider.js' properties and functionality."
        ],
        accessibility: [
            "Carousels are designed to be tab-navigable and touch enabled. Images and media inside of carousels should always have associated descriptive alt text."
        ],
        changes: [
            {
                version: "2.4.0",
                items: [
                    "Swapped from Slick to Glider for carousel support (this was due to removing jQuery in favour of Cash - later on Cash will be removed as well)."
                ]
            }
        ],
        children: {}
    },
    dialog: {
        id: "comDia",
        title: "dialog",
        plural: "dialogs",
        element: "dialog",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    iframe: {
        id: "comIfr",
        title: "iframe",
        plural: "iframes",
        element: "iframe",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    input: {
        id: "comInp",
        title: "input",
        plural: "inputs",
        element: "input",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {
            checkbox: {
                id: "comInpChe",
                title: "checkbox",
                plural: "checkboxes",
                element: "checkbox",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            dropdown: {
                id: "comInpDro",
                title: "dropdown",
                plural: "dropdowns",
                element: "dropdown",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            email: {
                id: "comInpEma",
                title: "email",
                plural: "emails",
                element: "email",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            number: {
                id: "comInpNum",
                title: "number",
                plural: "numbers",
                element: "number",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            password: {
                id: "comInpPas",
                title: "password",
                plural: "passwords",
                element: "password",
                description: [
                    "Password inputs are useful for authentication related forms. Clone includes a handy \"view\" toggle that manually switches the hidden password input to a visible text input so that the user can effectively see what they're typing. Please take this into consideration upon form submission in your project."
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            radio: {
                id: "comInpRad",
                title: "radio",
                plural: "radios",
                element: "radio",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            text: {
                id: "comInpTex",
                title: "text input",
                plural: "text inputs",
                element: "text",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            textWithButton: {
                id: "comInpTextw",
                title: "text input with a button",
                plural: "text inputs with a button",
                element: "text-with-button",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            textarea: {
                id: "comInpText",
                title: "textarea",
                plural: "textareas",
                element: "textarea",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            },
            url: {
                id: "comInpUrl",
                title: "url",
                plural: "urls",
                element: "url",
                description: [
                    "Coming Soon!"
                ],
                accessibility: [
                    "Coming Soon!"
                ],
                children: {}
            }
        }
    },
    menu: {
        id: "comMen",
        title: "menu",
        plural: "menus",
        element: "menu",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        changes: [
            {
                version: "2.4.5",
                items: [
                    "Fixed the line height on submenu buttons.",
                    "Added support for containers on the menu element."
                ]
            },
            {
                version: "2.4.6",
                items: [
                    "Fixed a bug with :scope in IE 11."
                ]
            }
        ],
        children: {}
    },
    overlay: {
        id: "comOve",
        title: "overlay",
        plural: "overlays",
        element: "overlay",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    pullquote: {
        id: "comPul",
        title: "pullquote",
        plural: "pullquotes",
        element: "pullquote",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    skipToContentLink: {
        id: "comSki",
        title: "skip-to-content link",
        plural: "skip-to-content links",
        element: "skip-to-content-link",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    table: {
        id: "comTab",
        title: "table",
        plural: "tables",
        element: "table",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    },
    tag: {
        id: "comTag",
        title: "tag",
        plural: "tags",
        element: "tag",
        description: [
            "Coming Soon!"
        ],
        accessibility: [
            "Coming Soon!"
        ],
        children: {}
    }
}

module.exports = {
    components
};