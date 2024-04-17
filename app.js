//Access ball and its container
const ballArea = document.getElementById('ball-area');
const ball = document.getElementById('ball');

//Add click event to move the ball
ballArea.addEventListener('click', (event)=>{
    //Get coordinates of the click point of the container
    let x = event.clientX;
    let y = event.clientY;

    //Add animation style
    const styling = [
        { transform:`translate(${x-35}px,${y-35}px)`}
    ];
    
    //Add animation duration
    const timing = {
        duration:500
    }
    
    //Apply animation to the ball to move to clicked point
    ball.animate(styling, timing).onfinish=()=>{
        ball.style.transform = `translate(${x-35}px,${y-35}px)`;
    };
})