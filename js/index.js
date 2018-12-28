var TEXT = [
    "V E G A N",
    "If you could reduce suffering, would you?",
    "I'm not going to say it's super easy - but it is incredibly \
     gratifying knowing every meal is suffering-free",
];

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

// Change the text over time
setText($("#main_text"), TEXT[0]);
setTimeout(function() { setText($("#main_text"), TEXT[1]); }, 2000);
setTimeout(function() { setText($("#main_text"), TEXT[2]); }, 4000);
