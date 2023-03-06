import { ultracpp } from "../../media/js/ucpp.js";
import * as nav from "../home/nav.js"

const homePage = new ultracpp; // created a homepage

const technology = new ultracpp; // main div which contains another 3 div
technology.addAttribute("class", "technology");

//================================================ children divs =======

let cpp = new ultracpp;

let cppData = [
    {
        index: 0,
        data: "<p>C++ is Powerful Technology, better usage of computing power on machine's Resources is possible through C++.</p>",
    },
    {
        index: 1,
        data: "<p>Accurate Control over Hardware Resource can be Achieved by Low Leve C++ Code which Directly intereact with Hardware</p>",
    }
];

let cppIndex = 0;
const cppIndexing = function () {
    if (cppIndex > cppData.length) {
        
    }
}

// ===============================================

homePage.render(".render");
export { homePage }