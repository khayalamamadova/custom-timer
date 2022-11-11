'use strict';

const deadline = new Date ('2022-12-31');

function getTimeRemaining(endtime) {
    let days,hours,minutes,seconds;

    const t = Date.parse(endtime) - Date.parse(new Date()); 

    if (t <= 0) {
        days = 0;
        minutes = 0;
        hours = 0;
        seconds = 0;
    } else {
        days = Math.floor( (t/(1000*60*60*24)) );
        hours = Math.floor( (t/(1000*60*60) % 24) );
        minutes = Math.floor( (t/1000/60) % 60 );
        seconds = Math.floor( (t/1000) % 60 );
    }

    return {
        'total': t,
        'hours': hours,
        'days': days,
        'minutes': minutes,
        'seconds': seconds
    }
};

function getZero(num) {
    if(num == 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
};

function setClock(endtime, selector) {
    const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        minutes.innerHTML = getZero(t.minutes);
        hours.innerHTML = getZero(t.hours);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock(deadline, '.timer')