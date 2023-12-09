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

    let paddle = document.getElementById('paddle');
    let paddleY = 0;
    let pDy = 10;
    document.addEventListener("keydown", function(event) {
        switch(event.key) {
            case 'ArrowDown':
                if(paddleY < playground.offsetHeight - paddle.offsetHeight) {
                    paddleY += pDy;
                    paddle.style.top = `${paddleY}px`;
                }
                break;
            case 'ArrowUp':
                if(paddleY > 0) {
                    paddleY += pDy * -1;
                    paddle.style.top = `${paddleY}px`;
                }
                break;
        }
    })
});