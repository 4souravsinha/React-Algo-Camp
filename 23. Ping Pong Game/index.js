document.addEventListener('DOMContentLoaded', () => {
    let ballX = 10 ; 
    let ballY = 10 ;

    let ball = document.getElementById('ball');
    let playground = document.getElementById('playground');
    let ballStyle = ball.style;

    ballStyle.left = `${ballX}px`;
    ballStyle.top = `${ballY}px`;

    let dx = 2;
    let dy = 2;

    setInterval(function exec() {
        ballX += dx;
        ballY += dy;

        ballStyle.left = `${ballX}px`;
        ballStyle.top = `${ballY}px`;
        
        if(ballX >= playground.offsetWidth - ball.offsetWidth|| ballX <= 0) dx *= -1;
        if(ballY >= playground.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
    }, 1);
});