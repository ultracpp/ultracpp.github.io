import { ultracpp } from "../../media/js/ucpp.js";
import { about } from "../about/about.js";
import { blog } from "../blog/blog.js";
import { hindi } from "../hindi/hindi.js";


let aboutButton = new ultracpp("button");
aboutButton.insertData("About")
aboutButton.addEvent("click", function () { about.render() })

let blogButton = new ultracpp("button");
blogButton.insertData("Blog");
blogButton.addEvent("click", function () { blog.render() });


let docsButton = new ultracpp("button");
docsButton.insertData("Docs");

let ucppjsButton = new ultracpp("button");
ucppjsButton.insertData("UCPPJS");


let cppButton = new ultracpp("button");
cppButton.insertData("C++");

let hindiButton = new ultracpp("button");
hindiButton.insertData("Hinglish");
hindiButton.addEvent("click", function () { hindi.render() })



export { aboutButton, blogButton, docsButton, ucppjsButton, cppButton, hindiButton }