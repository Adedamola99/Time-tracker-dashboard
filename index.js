import data from "./data.json" assert {type:'json'};

const sectionContainer = document.querySelector(".tracker");



const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");
const filterBtn = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", () => {
   displayActivity(data)
})

filterBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtn.forEach((buttons) => {
            if (buttons !== btn) {
                buttons.classList.remove("active");
            }
        })
        btn.classList.toggle("active");
    })
})

filterBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const activityCategory = data.filter((activityItem) => {
            if (activityCategory === category) {
                
            }
        })

        console.log(activityCategory);
    })
})

function displayActivity(activityItems) {
    let displayItems = activityItems.map((items) => {
        return `<div class="event-tracker ${items.title}-tracker">
        <div class="box">
            <img src="./images/icon-${items.imgName}.svg" class="icon" alt="">
        </div>
        <div class="details">
            <div class="activity">
                <p>${items.title}</p>
                <img src="./images/icon-ellipsis.svg" class="ellipsis" alt="">
            </div>
            <div class="activity-time">
                <h1 class="hour">${items.timeframes.weekly.current}hours</h1>
                <div class="date">
                    <span class="time">Last Week</span> - <span class="hour2">${items.timeframes.weekly.previous}hrs</span>
                </div>
            </div>
        </div>
    </div>`
    })
    displayItems = displayItems.join("");
    sectionContainer.innerHTML = displayItems;
}

// dailyBtn.addEventListener("click", () => {
//     let displayItems = data.map((items) => {
//         return `<div class="event-tracker ${items.title}-tracker">
//         <div class="box">
//             <img src="./images/icon-${items.title}.svg" class="icon" alt="">
//         </div>
//         <div class="details">
//             <div class="activity">
//                 <p>${items.title}</p>
//                 <img src="./images/icon-ellipsis.svg" class="ellipsis" alt="">
//             </div>
//             <div class="activity-time">
//                 <h1 class="hour">${items.timeframes.daily.current}hours</h1>
//                 <div class="date">
//                     <span class="time">Yesterday</span> - <span class="hour2">${items.timeframes.daily.previous}hrs</span>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     })
//     displayItems = displayItems.join("");
//     sectionContainer.innerHTML = displayItems;
// })

// weeklyBtn.addEventListener("click", () => {
//     let displayItems = data.map((items) => {
//         return `<div class="event-tracker ${items.title}-tracker">
//         <div class="box">
//             <img src="./images/icon-${items.title}.svg" class="icon" alt="">
//         </div>
//         <div class="details">
//             <div class="activity">
//                 <p>${items.title}</p>
//                 <img src="./images/icon-ellipsis.svg" class="ellipsis" alt="">
//             </div>
//             <div class="activity-time">
//                 <h1 class="hour">${items.timeframes.weekly.current}hours</h1>
//                 <div class="date">
//                     <span class="time">Last week</span> - <span class="hour2">${items.timeframes.weekly.previous}hrs</span>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     })
//     displayItems = displayItems.join("");
//     sectionContainer.innerHTML = displayItems;
// })

// monthlyBtn.addEventListener("click", () => {
//     let displayItems = data.map((items) => {
//         return `<div class="event-tracker ${items.title}-tracker">
//         <div class="box">
//             <img src="./images/icon-${items.title}.svg" class="icon" alt="">
//         </div>
//         <div class="details">
//             <div class="activity">
//                 <p>${items.title}</p>
//                 <img src="./images/icon-ellipsis.svg" class="ellipsis"  alt="">
//             </div>
//             <div class="activity-time">
//                 <h1 class="hour">${items.timeframes.monthly.current}hours</h1>
//                 <div class="date">
//                     <span class="time">Last Month</span> - <span class="hour2">${items.timeframes.monthly.previous}hrs</span>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     })
//     displayItems = displayItems.join("");
//     sectionContainer.innerHTML = displayItems;
// })

