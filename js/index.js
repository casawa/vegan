var FRAMES = [
    ["https://cdn.80000hours.org/wp-content/uploads/2016/04/pigs-in-factory-farm.jpg", 'IMAGE'],
    ["If you could reduce suffering", 'TEXT'],
    ["If you could save 400 lives yearly", 'TEXT'],
    ["If you could reduce greenhouse emissions", 'TEXT'],
    ["If you could save clean water", 'TEXT'],
    ["Would you?", 'TEXT'],
    ["Now imagine this was all done to humans", 'TEXT'],
    ["I'm not going to say it's super easy - but it is incredibly \
      gratifying knowing every meal is suffering-free", 'TEXT'],
    ["All it takes is a choice", 'TEXT'],
    ["V E G A N", 'TEXT'],
    ["https://www.youtube.com/embed/W4HJcq8qHAY?controls=0", 'VIDEO'],
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

    if (frame[1] == 'TEXT') {
        delayedSetText($("#main_text"), frame[0], next_delay_ms);
        next_delay_ms += TEXT_DELAY_MS;
    } else if (frame[1] == 'IMAGE') {
        delayedSetSource($("#main_image"), frame[0], next_delay_ms);
        next_delay_ms += IMAGE_DELAY_MS;
    } else if (frame[1] == 'VIDEO') {
        delayedSetSource($("#main_video"), frame[0], next_delay_ms);
        next_delay_ms += VIDEO_DELAY_MS;
    }
}
