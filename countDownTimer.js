const DOB = "23 April 2025 8:28 AM";

const Input = document.querySelectorAll('input')

setInterval( () => {
    const endDate = new Date(DOB);
    const now = new Date();
    const Diffrence = (endDate - now) / 1000;
    Input[0].value = Math.floor(Diffrence/3600/24);
    Input[1].value = (Math.floor(Diffrence/3600)) % 24;
    Input[2].value = (Math.floor(Diffrence/60)) % 60;
    Input[3].value = (Math.floor(Diffrence)) % 60;
    
}, 1000)


