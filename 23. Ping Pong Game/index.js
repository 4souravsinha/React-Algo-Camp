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

        if(ballX < paddle.offsetLeft + paddle.offsetWidth){
            if(ballY > paddle.offsetTop && ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight){
                dx *= -1;
            }
        }
        if(ballX >= playground.offsetWidth - ball.offsetWidth|| ballX <= 0) dx *= -1;
        if(ballY >= playground.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
    }, 1);

    let paddle = document.getElementById('paddle');
    let paddleY = 0;
    let pDy = 10;
    document.addEventListener("keydown", function(event) {
        event.preventDefault();
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

    document.addEventListener("mousemove", function(event) {
        let mouseDistanceFromTop = event.clientY;
        let distanceOfPlaygroundFromTop = playground.offsetTop;
        let mousePointControlY = mouseDistanceFromTop - distanceOfPlaygroundFromTop - paddle.offsetHeight / 2;
        let mousePointControlX = event.clientX - playground.offsetLeft - paddle.offsetWidth / 2;

        if(mousePointControlY > 0 && mousePointControlY < playground.offsetHeight - paddle.offsetHeight && mousePointControlX > 0 && mousePointControlX < playground.offsetWidth) {
            paddle.style.top = `${mousePointControlY}px`;
        }

    })
});