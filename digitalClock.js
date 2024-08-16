const Clock = document.getElementById('Time');
let date = new Date();
setInterval( () => {
    Clock.textContent = date.toLocaleTimeString()
},1000)
