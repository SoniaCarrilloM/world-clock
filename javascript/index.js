//london
let londonElement = document.querySelector("#london");
londonDateElement = document.querySelector(".date");
londonTimeElement = document.querySelector(".time");
londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[<small>]");
