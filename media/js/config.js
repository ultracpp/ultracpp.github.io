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

const copyright = function () {
    document.querySelector(".footer").innerHTML = "<p title='Copyright By Ultracpp'>&copy; Ultracpp - " + new Date().getFullYear() + "</p>";
}
copyright();