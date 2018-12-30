// Rotating multimedia content of the front page
// TODO: Move this to a separate file
var FRAMES = [
    {
        type: 'IMAGE',
        source: "https://cdn.80000hours.org/wp-content/uploads/2016/04/pigs-in-factory-farm.jpg",
        credit: "https://80000hours.org/2016/04/new-profile-on-factory-farming/"
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

    setText($("#credit"), "");
    $("#credit").hide();

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

function delayedSetImage(imgElem, imgURL, creditElem, imgSrc, delay) {
    /* Sets the frame image and source after delay ms.
     *
     * Parameters
     * ----------
     * imgElem : jQuery element
     * imgURL : string
     *   Image URL
     * creditElem : jQuery element
     * imgSrc : string
     *   Source of the image
     * delay : int
     *   Delay in ms
     */
    setTimeout(function() {
        clear();
        setAttr(imgElem, "src", imgURL);
        setText(creditElem, "Credit: " + imgSrc);
    }, delay);
}

function delayedSetVideo(videoElem, videoURL, delay) {
    /* Sets the frame video after delay ms.
     *
     * Parameters
     * ----------
     * videoElem : jQuery element
     * videoURL : string
     * delay : int
     *   Delay in ms
     */
    setTimeout(function() {
        clear();
        setAttr(videoElem, "src", videoURL);
    }, delay);
}

// Uniform delays (for now) for various frame content-types
var TEXT_DELAY_MS = 2500;
var IMAGE_DELAY_MS = 4000;
var VIDEO_DELAY_MS = 8000;

var next_delay_ms = 0;

// Change the frames over time
for (var i = 0; i < FRAMES.length; i++) {
    frame = FRAMES[i];

    if (frame.type == 'TEXT') {
        delayedSetText($("#main_text"), frame.text, next_delay_ms);
        next_delay_ms += TEXT_DELAY_MS;
    } else if (frame.type == 'IMAGE') {
        delayedSetImage($("#main_image"), frame.source,
                        $("#credit"), frame.credit,
                        next_delay_ms);
        next_delay_ms += IMAGE_DELAY_MS;
    } else if (frame.type == 'VIDEO') {
        delayedSetVideo($("#main_video"), frame.source, next_delay_ms);
        next_delay_ms += VIDEO_DELAY_MS;
    }
}
