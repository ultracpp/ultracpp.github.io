import { ultracpp } from "../../media/js/ucpp.js";

const about = new ultracpp;
about.addAttribute("class", "about");

const style = new ultracpp("style");
const styleData = ".about {padding:20px; min-height:100vh; max-width:100%; width:100%; margin:auto; top:auto; left:auto; display:block; bottom:auto; right:auto; }.about > p::after{content:'.'}";
style.insertData(styleData);


const data = "<h1>About us </h1>" +
    "<p>C++ is Powerful Technology, better usage of computing power on machine's Resources is possible through C++ </p>" +
    "<p> Ultracpp is a place on internet where C++ programming related content will be published by Chauhan Pruthviraj </p>" +
    "<p>Chauhan Pruthviraj usually writes blog on C++ Programming and Release on this website. </p>" +
    "<p>C++ is still adopting new Features as per need of modern software development paradigm </p>";



about.insertData(data);
about.insertChild(style);
export { about }