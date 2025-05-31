const generateRandomColor = function () {
    const hexColors = '0123456ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * 16);
        color += hexColors[index];
    }
    return color;
};

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
let intervalId;

start.addEventListener(
    'click',
    () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                body.style.backgroundColor = generateRandomColor();
            }, 500);
        }
    }
);

stop.addEventListener('click', (event) => {
    clearInterval(intervalId);
    intervalId = null;
});
