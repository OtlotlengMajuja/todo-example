// @ts-check

import { state, Task } from "./modules/state.js";

window.addEventListener('error', () => {
    document.body.innerHTML = "Something went wrong. Please refresh.";
});

addTaskToHtml()

addTaskToHtml("test");
updateHtmlTask("test", { title: "Wash the dog" });