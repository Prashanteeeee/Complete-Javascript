const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const body = document.querySelector('body');
let IntervalId = null;

const randomColor = ()=>{
    const hex  = "0123456789ABCDEF";
    let color = '#';

    for (let index = 0; index < 6; index++) {
        color+= hex[Math.floor(Math.random() * 16 )];
        
    }

    return color;
}

const StartChangingColor = ()=>{
    if(!IntervalId)
    {
        IntervalId = setInterval(()=>{
            body.style.backgroundColor = randomColor();
        },1000)
    }
}

const StopChangingColor = ()=>{
    clearInterval(IntervalId);
    IntervalId = null;
}

startButton.addEventListener('click' , StartChangingColor);
stopButton.addEventListener('click' , StopChangingColor);


