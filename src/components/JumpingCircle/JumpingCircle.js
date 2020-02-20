import React, {useEffect, useRef, useState} from 'react';

const JumpingCircle = () => {
  const [value, setValue] = useState(2);
  const canvasRef = useRef();
  const perimetrBall = {x: 200, y: 25};

  let velo = value, corner = 10, rad = 20;

  let ball = {x: perimetrBall.x, y: perimetrBall.y};
  let moveY = Math.sin(Math.PI / 180 * corner) * velo;

  let timer;

  const drawMe = () => {
    const canvas = canvasRef.current;
    const contextCanvas = canvas.getContext('2d');

    contextCanvas.clearRect(0, 0, 400, 300);

    if (ball.y > canvas.height - rad || ball.y < rad) moveY = -moveY;

    ball.y += moveY;

    contextCanvas.beginPath();
    contextCanvas.fillStyle = 'blue';
    contextCanvas.arc(ball.x, ball.y, rad, 0, Math.PI * 2, false);
    contextCanvas.fill();
    contextCanvas.closePath();

    timer = requestAnimationFrame(drawMe)
  };

  const start = () => {
    requestAnimationFrame(drawMe);
  };

  const stop = () => {
    cancelAnimationFrame(timer);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(start);

  useEffect(stop);

  return (
    <div style={{marginTop: '70px'}}>
      <canvas ref={canvasRef} width={400} height={300} style={{border: '5px solid blue'}}/>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <input type="range"
             min={0}
             max={100}
             step={5}
             onChange={handleChange}
             value={value}/>
    </div>
  )
};

export default JumpingCircle;