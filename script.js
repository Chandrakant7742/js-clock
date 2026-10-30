


setInterval(() => {
    const element = document.querySelector('.clock');
    const sound = document.querySelectorAll('audio');

const time = new Date();

const option = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

element.textContent = time.toLocaleTimeString('en-IN', option);
sound.play();
}, 1000);