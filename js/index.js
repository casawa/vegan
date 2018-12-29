var FRAMES = [
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
    ["https://www.youtube.com/embed/NjDzxJ4ICKY?controls=0&amp;start=173&end=195", 'VIDEO'],
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

function setVideo(elem, videoSrc) {
    /* Sets the source of a jQuery element.
     *
     * Parameters
     * ----------
     * elem : jQuery element
     * videoSrc : string
     */
    elem.attr("src", videoSrc);
    elem.show();
}

function clear() {
    /* Clears the html elements. */
    setText($("#main_text"), "");
    $("#main_text").hide();

    setVideo($("#main_video"), "about:blank");
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

function delayedSetVideo(elem, videoSrc, delay) {
    /* Sets the source of a jQuery element after
     * delay ms.
     *
     * Parameters
     * ----------
     * elem : jQuery element
     * videoSrc : string
     * delay : int
     *   Delay in ms
     */
    setTimeout(function() { clear(); setVideo(elem, videoSrc); }, delay);
}


// Change the frames over time
for (var i = 0; i < FRAMES.length; i++) {
    frame = FRAMES[i];

    if (frame[1] == 'TEXT') {
        delayedSetText($("#main_text"), frame[0], i * 2000);
    } else if (frame[1] == 'VIDEO') {
        delayedSetVideo($("#main_video"), frame[0], i * 2000);
    }
}
