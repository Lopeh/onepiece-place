// ==UserScript==
// @name         r/onepiece Logo template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       oralekin, exdeejay (xDJ_), anticept, sylvaindd
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/lopeh/onepiece-place/main/onepiece_template.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            window.addEventListener("keydown", function(event) {                
                // Hide the image with the F4 key
                if(event.key == "F4"){
                    console.log('showing/hiding/refreshing onepiece...' + newDate());
                    if (i.style.display === "none") {
                        // Refresh the image!
                        i.src = "https://raw.githubusercontent.com/lopeh/onepiece-place/main/onepiece_template.png" + ? + newDate();
                        i.style.display = "block";
                    } else {
                        i.style.display = "none";
                    }
                }
            });
            return i;
        })())

    }, false);

}
