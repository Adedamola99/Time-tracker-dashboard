let data = []
const filterButton = document.querySelectorAll(".btn")
const buttons = [...filterButton]

const detectclickedButton = (array) => {
    array.forEach(button => {
        button.addEventListener("click", () => {
            activateButtonClicked(button)
            const clickedOption = button.dataset.id;
            displayActivityData(clickedOption)
        })
    })
}

//fetch data

const loadFetchedData = async () => {
  const response = await fetch('./data.json');
  const fetchedData = await response.json();
  data = fetchedData
  buttons[1].click()
}

const activateButtonClicked = (button) => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add('active')
}

const cleanActivities = () => {
  const activities = document.querySelectorAll('.event-tracker')
  activities.forEach(item => item.remove())
}

const displayActivityData = (clickedOption) => {
  cleanActivities()
  const activityTracker = document.querySelector('.tracker')

  const measureTimeframeData = (time) => {
    if (time === "daily") {
      return "Yesterday"
    } else if(time === "weekly") {
      return "Last Week"
    } else {
      return "Last Month"
    }
  }

  
  data.forEach((activity) => {
    const title = activity.title;
    const activityClassName = title.toLowerCase().replace(" ", "-");
    const timeframes = activity.timeframes[clickedOption];
    const prevTimeframes  =  measureTimeframeData(clickedOption);
    const activityContainer = document.createElement("div");
    activityContainer.classList.add("event-tracker", activityClassName);
    const sectionContent = `<div class="box">
            <img src="./images/icon-${activityClassName}.svg" class="icon" alt="">
        </div>
        <div class="details">
            <div class="activity">
                <p>${title}</p>
                <img src="./images/icon-ellipsis.svg" class="ellipsis" alt="">
            </div>
            <div class="activity-time">
                <h1 class="hour">${timeframes.current}hrs</h1>
                <div class="date">
                    <span class="time">${prevTimeframes}</span> - <span class="time2">${timeframes.previous}hrs</span>
                </div>
            </div>
        </div>`
        
    activityContainer.innerHTML = sectionContent
    activityTracker.append(activityContainer)
  })
} 


detectclickedButton(buttons)
loadFetchedData()


