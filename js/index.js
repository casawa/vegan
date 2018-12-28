var TEXT = [
    "V E G A N",
    "If you could reduce suffering, would you?",
]

function setText(elem, text) {
    /* Sets the text of a jQuery element.
     *
     * Parameters
     * -----------
     * elem : jQuery element
     * text : string
     */
    elem.text(text);
}

setText($("#main_text"), TEXT[0])
