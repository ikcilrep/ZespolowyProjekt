import React, { useState , useRef, useEffect} from "react";
import Button from "@material-ui/core/Button";
import "./Balloon.css";
import "./LanguageChoice.css";
import dictionary from "../dictionary.json";

export default function Balloon({
  language,
  onSuccessfulPump,
  onExplosion,
  number,
  numberOfBaloons,
  onResign,
}) {
  const baloonRef = useRef();
  const [pump, setPump] = useState(0);
  const [pumps, setPumps] = useState(0);

  const baloonInit = () => {
    baloonRef.current.style.width = '30px';
    baloonRef.current.style.height = '42px';
    baloonRef.current.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
    baloonRef.current.style.left = '555px';
    baloonRef.current.style.top = '180px';
    baloonRef.current.style.opacity = 1;
  }
  
  useEffect(() => {
    baloonInit()
  }, [])

  const baloonPump = (p) => {
    let width = baloonRef.current.style.width
    let height = baloonRef.current.style.height
    let left = baloonRef.current.style.left
    let top = baloonRef.current.style.top
    var i = 0;
    let timer = setInterval(() => {
      
      if (i !== p) {
        i++
        width = parseFloat(width) + 1
        height = parseFloat(height) + (42/30)
        left = parseFloat(left) - 0.5
        top = parseFloat(top) - (42/30)
        baloonRef.current.style.width = width + 'px'
        baloonRef.current.style.height = height + 'px'  
        baloonRef.current.style.left  = left + 'px'
        baloonRef.current.style.top = top + 'px'
      } else {
        clearInterval(timer)
      }
    }, 400 / p);
  }

  const baloonPop = () => {
    let width = baloonRef.current.style.width
    let height = baloonRef.current.style.height
    let left = baloonRef.current.style.left
    let top = baloonRef.current.style.top
    let opacity = baloonRef.current.style.opacity
    var i = 0;
    let timer = setInterval(() => {
      
      if (i !== 150 && baloonRef.current !== null) {
        i++
        width = parseFloat(width) + 2
        height = parseFloat(height) + ((42/30) * 2)
        left = parseFloat(left) - 1
        top = parseFloat(top) - ((42/30) * 2)
        opacity = parseFloat(opacity) - 1/150
        baloonRef.current.style.width = width + 'px'
        baloonRef.current.style.height = height + 'px'  
        baloonRef.current.style.left  = left + 'px'
        baloonRef.current.style.top = top + 'px'
        baloonRef.current.style.opacity = opacity
      } else if (baloonRef.current !== null) {
        clearInterval(timer)
        baloonRef.current.style.width = '30px';
        baloonRef.current.style.height = '42px';
        baloonRef.current.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
        baloonRef.current.style.left = '555px';
        baloonRef.current.style.top = '180px';
        baloonRef.current.style.opacity = 1;
      }
    }, 1)

    
  }

  const baloonResign = () => {
    if (baloonRef != null){
    let left = baloonRef.current.style.left
    let top = baloonRef.current.style.top
    var i = 0;
    let timer = setInterval(() => {
      
      if (i !== 400 && baloonRef.current !== null) {
        i++
        left = parseFloat(left) + Math.sin(i/30)
        top = parseFloat(top) - 3 
        console.log(baloonRef)
        baloonRef.current.style.left  = left + 'px'
        baloonRef.current.style.top = top + 'px'
      } else if (baloonRef.current !== null) {
        clearInterval(timer)
        baloonRef.current.style.width = '30px';
        baloonRef.current.style.height = '42px';
        baloonRef.current.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
        baloonRef.current.style.left = '555px';
        baloonRef.current.style.top = '180px';
        baloonRef.current.style.opacity = 1;
      }
    }, 1);}
  }

  const handleClick = () => {
    setPump(1);
    if (pumps % 4 === 3) {
      baloonPop()
      setPumps(0);
      onExplosion();
    } else {
      onSuccessfulPump();
      setPumps(pumps + 1);
      baloonPump(20)
    }
  };

  const handleAnimationEnd = () => {
    setPump(0);
  };

  const handleResign = () => {
    setPumps(0);
    baloonResign();
    onResign();
  };

  return (
    <div>
      <Button onClick={handleResign} variant="contained" color="secondary">
        {number < numberOfBaloons - 1 ? dictionary[language].next : "OK"}
      </Button>

      <div
        className="container"
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        pump={pump}
        pumps={pumps}
      >
        <div className="ground" pump={pump}></div>
        <div className="hose" pump={pump}></div>
        <div className="piston" pump={pump}>
          <div className="stick1" pump={pump}></div>
          <div className="stick2" pump={pump}></div>
          <div className="box" pump={pump}></div>
          <div className="stamp-balloon" pump={pump}></div>
          <div className="stamp-triangle" pump={pump}></div>
        </div>
        <div
          className="baloon"
          pump={pump}
          pumps={pumps}
          ref={baloonRef}
        ></div>
      </div>
    </div>
  );


}
