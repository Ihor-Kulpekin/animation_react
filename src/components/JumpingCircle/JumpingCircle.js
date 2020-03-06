import React, {useEffect, useRef, useState} from 'react';

import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const JumpingCircle = () => {
  const [value, setValue] = useState(5);
  const [isClicked,setIsClicked] = useState(true);
  const canvasRef = useRef();
  const timer = useRef(0);
  const x = 200;
  let y = 200, dy = value, canvas, context;

  const draw = () => {
    canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    context = canvas.getContext('2d');
    context.clearRect(0, 0, 400, 300);

    context.beginPath();
    context.fillStyle = "#0000ff";
    context.arc(x, y, 20, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    if (y < 0 || y > 300) dy = -dy;

    y += dy;
  };

  const start = () => {
    if(timer.current!==0)return;

    timer.current = setInterval(draw, 10);
  };

  const stop = () => {
    if(timer.current===0)return;

    clearInterval(timer.current);

    timer.current = 0;
  };

  useEffect(() => {
    if(timer.current===0 && isClicked===false){
      start();
    }

    return () => stop();
  });

  return (
    <div style={{marginTop: '70px',marginLeft:420}}>
      <canvas ref={canvasRef} width={400} height={300} style={{border: '5px solid blue'}}/>
      <div>
        <button onClick={()=>{
          start();
          setIsClicked(false);
        }} className="btn btn-primary">Start</button>
        <button onClick={()=>{
          stop();
          setIsClicked(true);
        }} className="btn btn-primary">Stop</button>
        <input type="range" min={5} max={20} step={5}
               onChange={(event) => {
                 setValue(parseInt(event.target.value))
               }}
               style={{marginLeft:10,width:230}}
               value={value}
        />
      </div>
    </div>
  )
};

export default JumpingCircle;