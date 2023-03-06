import { ultracpp } from "../../media/js/ucpp.js";
import { about } from "../about/about.js";


let aboutButton = new ultracpp("button");
aboutButton.addAttribute("class", "nav_button");
aboutButton.insertData("About")
aboutButton.addEvent("click",function(){about.render()})

let blogButton = new ultracpp("button");
blogButton.addAttribute("class", "nav_button");
blogButton.insertData("Blog");

let docsButton = new ultracpp("button");
docsButton.addAttribute("class", "nav_button");
docsButton.insertData("Docs");

let ucppjsButton = new ultracpp("button");
ucppjsButton.addAttribute("class", "nav_button");


let cppButton = new ultracpp("button");
cppButton.addAttribute("class", "nav_button");



export { aboutButton, blogButton, docsButton, ucppjsButton, cppButton }