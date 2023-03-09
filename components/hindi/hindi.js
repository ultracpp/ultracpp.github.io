import { ultracpp } from "../../media/js/ucpp.js";
import * as hindiBlog from "./data/data.js"

const hindi = new ultracpp;
hindi.addAttribute("class", "hindi-screen list");

const blogScreen = new ultracpp;
blogScreen.addAttribute("class", "blog-screen");
blogScreen.addAttribute("class", "list");


const prevButton = new ultracpp("button");
prevButton.insertData("Prev");
prevButton.addEvent("click", hindiBlog.prev);

const nextButton = new ultracpp("button");
nextButton.insertData("Next");
nextButton.addEvent("click", hindiBlog.next);

const buttonContainer = new ultracpp;
prevButton.insertInto(buttonContainer);
nextButton.insertInto(buttonContainer)


hindi.insertChild(buttonContainer);
hindi.insertChild(blogScreen);

export { hindi };