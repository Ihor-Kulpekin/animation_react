import React, {useEffect, useRef, useState} from 'react';

const JumpingCircle = () => {
  const [value, setValue] = useState(5);
  const canvasRef = useRef();

  const x = 100;
  let y = 200, dy = value, canvas, context, timer;

  const draw = () => {
    canvas = canvasRef.current;
    if (!canvas) {
      return;
    } else {
      context = canvas.getContext('2d');
      context.clearRect(0, 0, 400, 300);

      context.beginPath();
      context.fillStyle = "#0000ff";
      context.arc(x, y, 20, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();

      if (y < 0 || y > 300) dy = -dy;

      y += dy;
    }
  };

  const start = () => {
    timer = setInterval(draw, 10);
  };

  const stop = () => {
    clearInterval(timer);
  };

  useEffect(() => {
    timer = setInterval(draw, 10);
    return () => stop();
  });

  useEffect(() => {
    return () => start();
  });

  useEffect(() => {
    setValue(value);
  }, [value]);

  useEffect(() => {
    return () => stop();
  });

  return (
    <div style={{marginTop: '70px'}}>
      <canvas ref={canvasRef} width={400} height={300} style={{border: '5px solid blue'}}/>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <input type="range" min={5} max={20} step={5}
             onChange={(event) =>
               setValue(parseInt(event.target.value))}
             value={value}
      />
    </div>
  )
};

export default JumpingCircle;