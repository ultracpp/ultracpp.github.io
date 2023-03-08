import { ultracpp } from "../../media/js/ucpp.js";
import { about } from "../about/about.js";


let aboutButton = new ultracpp("button");
aboutButton.insertData("About")
aboutButton.addEvent("click", function () { about.render() })

let blogButton = new ultracpp("button");
blogButton.insertData("Blog");

let docsButton = new ultracpp("button");
docsButton.insertData("Docs");

let ucppjsButton = new ultracpp("button");
ucppjsButton.insertData("UCPPJS");


let cppButton = new ultracpp("button");
cppButton.insertData("C++");



export { aboutButton, blogButton, docsButton, ucppjsButton, cppButton }