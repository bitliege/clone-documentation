const styles = {
    alignment: {
        id: "styAli",
        title: "alignment",
        plural: "alignment",
        element: "alignment",
        description: [
            "This attribute aligns inline level elements based on the media query and alignment provided. This is useful for aligning content at different media queries."
        ],
        usage: [
            "<div data-c-alignment=\"MEDIA(ALIGNMENT)\">"
        ]
    },
    backgroundColour: {
        id: "styBac",
        title: "background colour",
        plural: "background colours",
        element: "background-colour",
        description: [
            "This attribute assigns a background colour based on the colour and opacity provided."
        ],
        usage: [
            "<div data-c-background=\"COLOUR(OPACITY)\">"
        ]
    },
    border: {
        id: "styBor",
        title: "border",
        plural: "borders",
        element: "border",
        description: [
            "This attribute assigns a border to the selected side of the element. It allows you to customize the thickness, style, and colour."
        ],
        usage: [
            "<div data-c-border=\"SIDE(THICKNESS, STYLE, COLOUR)\">"
        ]
    },
    colour: {
        id: "styCol",
        title: "colour",
        plural: "colours",
        element: "colour",
        description: [
            "Coming soon!"
        ],
        usage: []
    },
    container: {
        id: "styCon",
        title: "container",
        plural: "containers",
        element: "container",
        description: [
            "This attribute allows you to select from one of three container types: small (for large volumes of text), medium (for narrow UI and forms), large (for contained UI), and full (for content that has no maximum width but requires a margin)."
        ],
        usage: [
            "<div data-c-container=\"TYPE\"></div>"
        ]
    },
    flexboxGrid: {
        id: "styFle",
        title: "flexbox grid",
        plural: "flexbox grids",
        element: "flexbox-grid",
        description: [
            "Coming soon!"
        ],
        usage: []
    },
    radius: {
        id: "styRad",
        title: "radius",
        plural: "radii",
        element: "radius",
        description: [
            "This attribute allows you to rounde the corners of an element using two different styles: slightly rounded, and pill (which rounds them entirely). It should be noted that this attribute will force the element into having overflow: hidden;"
        ],
        usage: [
            "<div data-c-radius=\"STYLE\"></div>"
        ]
    },
    typography: {
        id: "styTyp",
        title: "Font & Font Style",
        plural: "Fonts & Font Styles",
        element: "typography",
        description: [
            "Coming soon!"
        ],
        usage: []
    },
    visibility: {
        id: "styVis",
        title: "visibility",
        plural: "visibililities",
        element: "visibility",
        description: [
            "This attribute allows you to hide elements from either all devices or just screens. This can be useful when an element needs to be hidden from screens but provides extra context to accessibility devices."
        ],
        usage: [
            "<div data-c-visibility=\"VALUE\"></div>"
        ]
    },
    whitespace: {
        id: "styWhi",
        title: "Margin & Padding",
        plural: "Margins & Padding",
        element: "whitespace",
        description: [
            "This attribute allows you to rounde the corners of an element using two different styles: slightly rounded, and pill (which rounds them entirely). It should be noted that this attribute will force the element into having overflow: hidden;"
        ],
        usage: [
            "<div data-c-margin=\"SIDE(VALUE)\"></div>",
            "<div data-c-padding=\"SIDE(VALUE)\"></div>"
        ]
    }
}

module.exports = {
    styles
};