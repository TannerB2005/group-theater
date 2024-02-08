"use strict";


/*Calendar Code- Nate Aufdenberg */

/* Sets the date of display on the calendar */
const thisDay = new Date();

// Writing the calendar for the element with the id tag "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//Function to generate calendar 
function createCalendar(calDate) {
    const calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}

/*Function to write a calendar caption*/
function calCaption(calDate) {
    //array contains the list of the months
    const monthName = ["January", "Feburary", "March", "April",
     "May", "June", "July", "August", "September",
    "October", "November", "December" ];

    //Determines the current month
    const thisMonth = calDate.getMonth();

    //Determine the current year
    const thisYear = calDate.getFullYear();

    //Write the caption
    return "<caption>" + monthName[thisMonth] + "" + thisYear + "</caption>";
}

/*Function to create a row of the weekday abbreviations*/
function calWeekdayRow() {

    //Weekday abbreviations array
    const dayName = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];
    const rowHTML = "<tr>";

    //Loop for the dayName array
    for (let i = 0 < dayName.length; i++;) {
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
    }

    rowHTML += "</tr>";

    return rowHTML;
}

/*Function that calculates the number of days in the month*/
function daysInMonth(calDate) {
    //day array for each month
    const dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

    //Extraction of the four digit year and month values
    const thisYear = calDate.getFullYear();
    const thisMonth = calDate.getMonth();

    //Revises the days for Feburary for leap years
    if ((this % 100 != 0) || (thisYear % 4 === 0)) {
        dayCount[1] = 29;
    }

    //Returns the numbers in the current month
    return dayCount[thisMonth];
}

/*This Function creates table rows for each day of the month*/
function calDays(calDate) {
    //Determines starting of the month
    const day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    const weekDay = day.getDay();
    //Writes blank spaces for preceding the starting day
    const htmlCode = "<tr>";
    for (let i = 0; i < weekDay; i++) {
        htmlCode += "<td></td>";
    }
}

//Write cells for each day of the month
const totalDays = daysInMonth(calDate);

const highlight = calDate.getDate();
for (let i = 1; i <= totalDays; i++) {
    day.setDate(i);
    weekDay = day.getDay();

    if (weekDay === 0) htmlCode += "<tr>";
    if (i === highlight) {
        htmlCode += "<td class='calendar_dates' id=calendar_today>" + i + dayEvent[i] + "</td>";
    } else {
        htmlCode += "<td class='calendar_dates' id=calendar_today>" + i + "</td>";
        if (weekDay === 6) htmlCode += "</tr>";
    }

    return htmlCode;
}
