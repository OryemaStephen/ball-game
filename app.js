const ballArea = document.getElementById('ball-area');
const ball = document.getElementById('ball');

ballArea.addEventListener('click', (event)=>{
    let x = event.clientX;
    let y = event.clientY;
    ball.style.transform = `translate(${x}px,${y}px)`
})