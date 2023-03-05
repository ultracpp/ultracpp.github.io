let isOpen = false;

const openNav = function () {

    if (isOpen) {
        document.querySelector(".nav").style.width = "0px";
        isOpen = false;
    }
    else if (!isOpen) {
        document.querySelector(".nav").style.width = "300px";
        isOpen = true;
    }
}