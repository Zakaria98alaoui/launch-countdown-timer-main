const weakdays = ["Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"];
let times = document.querySelectorAll('.time p');
let coundownContent = document.querySelector('.countdown-content')
console.log(times);

// dates DYNAMICLY
let getDay = new Date().getDate();
let getMonth = new Date().getMonth();
let getFullYear = new Date().getFullYear();
let getHour = new Date().getHours();
// futur date
let futurDate = new Date(getFullYear, getMonth, getDay + 14, 20, 30, 00);

let countDowTimer = () => {
  // today date
  let today = new Date().getTime();
  // deadLine 
  let deadLine = futurDate.getTime() - today;

  /**
    1day = 24*60*60*1000 ms
    1hour = 60*60*1000 ms
    1minutes = 60*1000 ms
    1sec = 10000 ms
   */

  // get day,hpor,minute, value en millsecond
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  // convert values to original unit
  let day = Math.floor((deadLine * 1) / oneDay);
  let hour = Math.floor((deadLine % oneDay) / oneHour);
  let minute = Math.floor((deadLine % oneHour) / oneMinute);
  let second = Math.floor((deadLine % oneMinute) / oneSecond)

  // format function tchiking if param les than 10 add 0
  let format = (param) => {
    if (param < 10) {
      return (param = `0${param}`)
    } else {
      return param
    }
  }

  // set date to Dom
  let values = [day, hour, minute, second];
  times.forEach((val, index) => {
    val.innerHTML = format(values[index]);
  })
  // check if deadline is less than 0
  if (deadLine < 0) {
    clearInterval(interval);
    coundownContent.innerHTML = `
    <div class="deadLine-end">
      <p class="end">Sorry!! deadLine is Over</p>
    </div>
    `
  }
}
let interval = setInterval(countDowTimer, 500);
countDowTimer()