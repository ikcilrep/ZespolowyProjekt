import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./Balloon.css";
import "./LanguageChoice.css";
import dictionary from "../dictionary.json";

const setInitialBalloonStyle = (balloonRef) => {
  setBalloonStyle({
    balloonRef,
    width: 30,
    height: 42,
    borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
    left: 555,
    top: 180,
    opacity: 1,
  });
};

const setBalloonStyle = ({
  balloonRef,
  width,
  height,
  left,
  top,
  opacity,
  borderRadius,
}) => {
  if (width !== undefined) balloonRef.current.style.width = `${width}px`;
  if (height !== undefined) balloonRef.current.style.height = `${height}px`;
  if (left !== undefined) balloonRef.current.style.left = `${left}px`;
  if (top !== undefined) balloonRef.current.style.top = `${top}px`;
  if (opacity !== undefined) balloonRef.current.style.opacity = opacity;
  if (borderRadius !== undefined)
    balloonRef.current.style.borderRadius = borderRadius;
};

const balloonPump = (balloonRef, p) => {
  let width = balloonRef.current.style.width;
  let height = balloonRef.current.style.height;
  let left = balloonRef.current.style.left;
  let top = balloonRef.current.style.top;
  let i = 0;
  const timer = setInterval(() => {
    if (i !== p) {
      i++;
      width = parseFloat(width) + 1;
      height = parseFloat(height) + 42 / 30;
      left = parseFloat(left) - 0.5;
      top = parseFloat(top) - 42 / 30;
      setBalloonStyle({ balloonRef, width, height, left, top });
    } else {
      clearInterval(timer);
    }
  }, 400 / p);
};

const balloonPop = (balloonRef) => {
  let width = balloonRef.current.style.width;
  let height = balloonRef.current.style.height;
  let left = balloonRef.current.style.left;
  let top = balloonRef.current.style.top;
  let opacity = balloonRef.current.style.opacity;
  let i = 0;
  const timer = setInterval(() => {
    if (i !== 150 && balloonRef.current !== null) {
      i++;
      width = parseFloat(width) + 2;
      height = parseFloat(height) + (42 / 30) * 2;
      left = parseFloat(left) - 1;
      top = parseFloat(top) - (42 / 30) * 2;
      opacity = parseFloat(opacity) - 1 / 150;

      setBalloonStyle({ balloonRef, width, height, left, top, opacity });
    } else if (balloonRef.current !== null) {
      clearInterval(timer);
      setInitialBalloonStyle(balloonRef);
    }
  }, 1);
};

const balloonResign = (balloonRef, setDisabled) => {
  if (balloonRef != null) {
    let left = balloonRef.current.style.left;
    let top = balloonRef.current.style.top;
    let i = 0;
    const timer = setInterval(() => {
      if (i !== 400 && balloonRef.current !== null) {
        i++;
        left = parseFloat(left) + Math.sin(i / 30);
        top = parseFloat(top) - 3;
        // console.log(balloonRef);
        setBalloonStyle({ balloonRef, left, top });
      } else if (balloonRef.current !== null) {
        clearInterval(timer);
        setInitialBalloonStyle(balloonRef);
        setDisabled(false);
      }
    }, 1);
  }
};

export default function Balloon({
  language,
  onSuccessfulPump,
  onExplosion,
  number,
  numberOfBalloons,
  onResign,
}) {
  const balloonRef = useRef();
  const [pump, setPump] = useState(0);
  const [pumps, setPumps] = useState(0);

  const [disabled, setDisabled] = useState(false);
  const [pumpDisabled, setPumpDisabled] = useState(false);

  useEffect(() => {
    setInitialBalloonStyle(balloonRef);
  }, []);


  useEffect(() => {
    setDisabled(false);
  }, [])


  const balloonDurabilityArray = [1, 2, 3, 4, 5]

  const handleClick = (balloonNumber) => {
    if (!disabled && !pumpDisabled) {
      setPumpDisabled(true); 
      setPump(1);
      if (pumps >= balloonDurabilityArray[balloonNumber]) {
        balloonPop(balloonRef);
        setPumps(0);
        onExplosion();
      } else {
        onSuccessfulPump();
        setPumps(pumps + 1);
        balloonPump(balloonRef, 20);
      }
    } else {
      // console.log('byl disabled')
    }
    };

  const handleAnimationEnd = () => {
    setPumpDisabled(false);
    setPump(0);
  };

  const handleResign = () => {
    setDisabled(true);
    setPumps(0);
    balloonResign(balloonRef, setDisabled);
    onResign();
  };

  const thereIsANextBalloon = number < numberOfBalloons - 1;

  return (
    <div>
      <Button onClick={handleResign} variant="contained" color="primary">
        {thereIsANextBalloon ? dictionary[language].next : dictionary[language].takeMoney}
      </Button>

      <div
        className="container"
        onClick={() => handleClick(number)}
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
        <div className="balloon" pump={pump} ref={balloonRef}></div>
      </div>
    </div>
  );
}
