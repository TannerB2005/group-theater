"use strict";


/*Calendar Code- Nate Aufdenberg */

// Sets the date of display on the calendar 
const thisDay = new Date();

// Writing the calendar for the element with the id tag "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//Function to generate calendar 
function createCalendar(calDate) {
    const calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}

//Function to write a calendar caption
function calCaptoin(calDate) {
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

//Function to create 