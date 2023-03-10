let countDown;
let interval;
const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('relogio');
const daysSpan = clock.querySelector('.dias');
const hoursSpan = clock.querySelector('.horas');
const minutesSpan = clock.querySelector('.minutos');
const secondsSpan = clock.querySelector('.segundos');

endDate.addEventListener('change', function(e){
    e.preventDefault();
    clearInterval(timeInterval);
    console.dir(this);
    const endDate = new Date(this.value);
});




// console.log(endDate);