import { data } from "./blogData.js";

let length = data.length - 1; // length
let slideFrom = 0; // slideFrom
let slideTo = 2; // slideTo
let isFullScreen = false;
// =============

let initialIndex = 0;
let fullScreen = false;

const showFullScreen = function (initialIndex) {
    if (!isFullScreen) {
        document.querySelector(".list").innerHTML = data[initialIndex]["title"];
    }
}

const createElement = function (data, initialIndex) {
    let element = document.createElement("div");
    element.setAttribute("class", "blog-screen");
    element.innerHTML = data;
    element.addEventListener("click", function () { showFullScreen(initialIndex) });
    return element;
}
//  =============

let insert = function (element) {
    document.querySelector(".list").append(element);
}

let show = function (slideFromIndex, length) {
    let f1 = slideFromIndex;
    let f2 = length;

    for (slideFromIndex; slideFromIndex < length; slideFromIndex++) {
        if (data[slideFromIndex] && data[slideFrom]["title"]) {
            insert(createElement(data[slideFromIndex]["title"], data[slideFromIndex]["initialIndex"]));
        }
    }
    slideFrom = f1;
    slideTo = f2;
}

show(slideFrom, slideTo);

let next = function () {
    console.log("====>", data[initialIndex])
    if (initialIndex < length) {
        document.querySelector(".list").innerHTML = null;
        initialIndex++;
        slideFrom++;
        slideTo++;
        show(slideFrom, slideTo)
    }
}

let prev = function () {
    if (initialIndex > 0) {
        document.querySelector(".list").innerHTML = null;
        initialIndex--;
        slideFrom--;
        slideTo--;
        show(slideFrom, slideTo)
    }
}

window.prev = prev;
window.next = next;