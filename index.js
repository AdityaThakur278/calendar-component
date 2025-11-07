export const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

const monthYearContainer = document.getElementsByClassName("current-date-month")[0];
const daysHeader = document.getElementsByClassName("days-header")[0];
const leftButton = document.getElementsByClassName("left-button")[0];
const rightButton = document.getElementsByClassName("right-button")[0];
const dateContainer = document.getElementsByClassName("date-container")[0];

const date = new Date();

const MONTH_VS_DISPLAY_VALUE = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
}

function populateMonthAndYearHeader() {
  monthYearContainer.textContent = `${MONTH_VS_DISPLAY_VALUE[date.getMonth()]} ${date.getFullYear()}`;
}

function populateDaysHeader() {
  const fragment = document.createDocumentFragment();

  for(let i=0; i<days.length; i++) {
    const element = document.createElement("div");
    element.textContent = days[i];
    element.classList = ["days-header-item"];
    fragment.appendChild(element);
  }

  daysHeader.appendChild(fragment);
}

function populateDate() {  
  let firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  let startColumn = firstDate.getDay();
  let endColumn = lastDate.getDay();

  dateContainer.innerHTML = null;

  for(let i=0; i<startColumn; i++) {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), 1 - startColumn + i);

    const element = document.createElement("div");
    element.textContent = currentDate.getDate();
    element.classList = ["date-container-item"];

    dateContainer.appendChild(element);
  }

  for(let i=firstDate.getDate(); i<=lastDate.getDate(); i++) {
    const element = document.createElement("div");
    element.textContent = i;
    element.classList.add("date-container-item", "active");

    dateContainer.appendChild(element);
  }

  for(let i=1; i<7-endColumn; i++) {
    const currentDate = new Date(date.getFullYear(), date.getMonth() + 1, 0+i);

    const element = document.createElement("div");
    element.textContent = i;
    element.classList = ["date-container-item"];

    dateContainer.appendChild(element);
  }
}

leftButton.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);

  monthYearContainer.textContent = `${MONTH_VS_DISPLAY_VALUE[date.getMonth()]} ${date.getFullYear()}`;
  populateDate();
});

rightButton.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);

  monthYearContainer.textContent = `${MONTH_VS_DISPLAY_VALUE[date.getMonth()]} ${date.getFullYear()}`;
  populateDate();
});



populateMonthAndYearHeader();
populateDaysHeader();
populateDate();