// Rotating multimedia content of the front page
// TODO: Move this separately
var FRAMES = [
    {
        type: 'IMAGE',
        source: "https://cdn.80000hours.org/wp-content/uploads/2016/04/pigs-in-factory-farm.jpg"
    },
    {
        type: 'TEXT',
        text: "If you could reduce suffering"
    },
    {
        type: 'TEXT',
        text: "If you could save 400 lives yearly"
    },
    {
        type: 'TEXT',
        text: "If you could reduce greenhouse emissions"
    },
    {
        type: 'TEXT',
        text: "If you could save clean water"
    },
    {
        type: 'TEXT',
        text: "Would you?"
    },
    {
        type: 'TEXT',
        text: "Now imagine this was all done to humans"
    },
    {
        type: 'TEXT',
        text: "I'm not going to say it's super easy - but it is incredibly \
                 gratifying knowing every meal is suffering-free"
    },
    {
        type: 'TEXT',
        text: "All it takes is a choice"
    },
    {
        type: 'TEXT',
        text: "V E G A N"
    },
    {
        type: 'VIDEO',
        source: "https://www.youtube.com/embed/W4HJcq8qHAY?controls=0"
    },
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
    elem.show();
}

function setAttr(elem, attr, value) {
    /* Sets an attribute of a jQuery element.
     *
     * Parameters
     * ----------
     * elem : jQuery element
     * attr : string
     * value : string
     */
    elem.attr(attr, value);
    elem.show();
}

function clear() {
    /* Clears the html elements. */
    setText($("#main_text"), "");
    $("#main_text").hide();

    setAttr($("#main_image"), "src", "about:blank");
    $("#main_image").hide();

    setAttr($("#main_video"), "src", "about:blank");
    $("#main_video").hide();
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
    setTimeout(function() { clear(); setText(elem, text); }, delay);
}

function delayedSetSource(elem, src, delay) {
    /* Sets the source of a jQuery element after
     * delay ms.
     *
     * Parameters
     * ----------
     * elem : jQuery element
     * src : string
     * delay : int
     *   Delay in ms
     */
    setTimeout(function() { clear(); setAttr(elem, "src", src); }, delay);
}

// Uniform delays (for now) for various frame content-types
var TEXT_DELAY_MS = 3000;
var IMAGE_DELAY_MS = 5000;
var VIDEO_DELAY_MS = 8000;

var next_delay_ms = 0;

// Change the frames over time
for (var i = 0; i < FRAMES.length; i++) {
    frame = FRAMES[i];

    if (frame.type == 'TEXT') {
        delayedSetText($("#main_text"), frame.text, next_delay_ms);
        next_delay_ms += TEXT_DELAY_MS;
    } else if (frame.type == 'IMAGE') {
        delayedSetSource($("#main_image"), frame.source, next_delay_ms);
        next_delay_ms += IMAGE_DELAY_MS;
    } else if (frame.type == 'VIDEO') {
        delayedSetSource($("#main_video"), frame.source, next_delay_ms);
        next_delay_ms += VIDEO_DELAY_MS;
    }
}
