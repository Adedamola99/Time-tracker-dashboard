import data from "./data.json" assert {type:'json'};



console.log(data);

const section = document.querySelectorAll(".activity-time");

window.addEventListener("DOMContentLoaded", () => {
    section.forEach((activity) => {
        console.log(activity);
    })
})