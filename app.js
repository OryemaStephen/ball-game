//Access ball and its container
const ballArea = document.getElementById('ball-area');
const ball = document.getElementById('ball');
const goalPost = document.getElementById('post');
const displayGoal = document.getElementById('goal');

let count = 0;
displayGoal.innerText =`You scores: ${count}`;

//Add click event to move the ball
ballArea.addEventListener('click', (event)=>{
    //Get coordinates of the click point of the container
    let x = event.clientX;
    let y = event.clientY;

    //Add animation style
    const styling = [
        { transform:`translate(${x-20}px,${y-75}px)`}
    ];
    
    //Add animation duration
    const timing = {
        duration:500
    }
    
    //Apply animation to the ball to move to clicked point
    ball.animate(styling, timing).onfinish=()=>{
        ball.style.transform = `translate(${x-20}px,${y-75}px)`;
    }; 

    const postArea = goalPost.getBoundingClientRect();

    if(
        x >= postArea.left &&
        x <= postArea.right &&
        y >= postArea.top &&
        y <= postArea.bottom
    ){
        count++;
        displayGoal.innerText =`You scores: ${count}`;        
    }
})

