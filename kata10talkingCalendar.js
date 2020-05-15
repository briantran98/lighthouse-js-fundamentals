const talkingCalendar = function (date) {
  // Split the date string into an array of 3 strings for year, month, day
  let dateSplit = date.split("/");
  let year = dateSplit[0];
  let month = "";
  let day = "";
  // Replace month with name of the month ie. 03 = March
  switch (dateSplit[1]) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "Septmeber";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }

  // Checks to see if date is a single digit or two digit number
  if (dateSplit[2][0] === "0") {
    // Conditions for adding suffix
    if (dateSplit[2][1] === "1") {
      day = dateSplit[2][1] + "st";
    } else if (dateSplit[2][1] === "2") {
      day = dateSplit[2][1] + "nd";
    } else if (dateSplit[2][1] === "3") {
      day = dateSplit[2][1] + "rd";
    } else {
      day = dateSplit[2][1] + "th";
    }
  } else {
    day = dateSplit[2] + "th";
  }

  return (month + " " + day + ", " + year);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
