"use strict";

/*Event Timer function */

runClock();
setInterval("runClock()", 1000);

/*Function for Even Timer*/

function runClock() {
    //Displaying the current time & time
    document.getElementById("Eventnow").innerHTML =
    "m/d/y <br /> h:m:s";
    
    // Stores the current time & date
    const currentEvent = new Date();
    const dateStr = currentEvent.toLocaleDateString();
    const timeStr = currentEvent.toLocaleTimeString();

    // Displays the current time & date
    document.getElementById("dateNow").innerHTML =
    dateStr + "<br />" + timeStr;

    //  Calculates the time til' the next big Event
    const newEvent = new Date("Feburary 24, 2024");
    const nextEvent = currentEvent.getFullYear() + 1;
    newEvent.setFullYear(nextYear);
    const daysLeft = (newEvent - currentEvent)/(1000*60*60*24);

    // Calculates hours left in the day
    const hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

    // Calculates the mins. and secs. left in the day 
    const minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
    const secsLeft = (minsLeft - Math.floor(minsLeft))*60;

    //Displays the time left before the next Big Event
    docuemnt.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}