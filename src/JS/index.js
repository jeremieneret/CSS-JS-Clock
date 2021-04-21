"use strict";

const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const min = now.getMinutes();
    const hours = now.getHours();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minDeg = ((min/60) * 360) + 90;
    const hoursDeg = ((hours/12) * 360) +90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

}
setInterval(setDate, 1000);