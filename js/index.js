var TEXT = [
    "If you could reduce suffering",
    "If you could save 400 lives yearly",
    "If you could reduce greenhouse emissions",
    "If you could reduce greenhouse emissions",
    "Would you?",
    "Now imagine this was all done to humans",
    "I'm not going to say it's super easy - but it is incredibly \
     gratifying knowing every meal is suffering-free",
    "All it takes is a choice",
    "V E G A N",
];

function setText(elem, text) {
    /* Sets the text of a jQuery element.
     *
     * Parameters
     * ----------
     * elem : jQuery element
     * text : string
     */
    elem.text(text);
}

function delayedSetText(elem, text, delay) {
    /* Sets the text of a jQuery element after
     * delay ms.
     *
     * Parameters
     * ----------
     * elem : jQuery element
     * text : string
     * delay : int
     *   Delay in ms
     */
    setTimeout(function() { setText(elem, text); }, delay);
}

// Change the text over time
for (var i = 0; i < TEXT.length; i++) {
    delayedSetText($("#main_text"), TEXT[i], i * 2000);
}
