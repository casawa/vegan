var FRAMES = [
    ["If you could reduce suffering", 'TEXT'],
    ["If you could save 400 lives yearly", 'TEXT'],
    ["If you could reduce greenhouse emissions", 'TEXT'],
    ["If you could reduce greenhouse emissions", 'TEXT'],
    ["Would you?", 'TEXT'],
    ["Now imagine this was all done to humans", 'TEXT'],
    ["I'm not going to say it's super easy - but it is incredibly \
    [ gratifying knowing every meal is suffering-free", 'TEXT'],
    ["All it takes is a choice", 'TEXT'],
    ["V E G A N", 'TEXT'],
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

// Change the frames over time
for (var i = 0; i < FRAMES.length; i++) {
    frame = FRAMES[i];

    if (frame[1] == 'TEXT') {
        delayedSetText($("#main_text"), frame[0], i * 2000);
    }
}
