import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./Balloon.css";
import "./LanguageChoice.css";
import dictionary from "../dictionary.json";

const setInitialBaloonStyle = (baloonRef) => {
  setBaloonStyle({
    baloonRef,
    width: 30,
    height: 42,
    borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
    left: 555,
    top: 180,
    opacity: 1,
  });
};

const setBaloonStyle = ({
  baloonRef,
  width,
  height,
  left,
  top,
  opacity,
  borderRadius,
}) => {
  if (width !== undefined) baloonRef.current.style.width = `${width}px`;
  if (height !== undefined) baloonRef.current.style.height = `${height}px`;
  if (left !== undefined) baloonRef.current.style.left = `${left}px`;
  if (top !== undefined) baloonRef.current.style.top = `${top}px`;
  if (opacity !== undefined) baloonRef.current.style.opacity = opacity;
  if (borderRadius !== undefined)
    baloonRef.current.style.borderRadius = borderRadius;
};

const baloonPump = (baloonRef, p) => {
  let width = baloonRef.current.style.width;
  let height = baloonRef.current.style.height;
  let left = baloonRef.current.style.left;
  let top = baloonRef.current.style.top;
  let i = 0;
  const timer = setInterval(() => {
    if (i !== p) {
      i++;
      width = parseFloat(width) + 1;
      height = parseFloat(height) + 42 / 30;
      left = parseFloat(left) - 0.5;
      top = parseFloat(top) - 42 / 30;
      setBaloonStyle({ baloonRef, width, height, left, top });
    } else {
      clearInterval(timer);
    }
  }, 400 / p);
};

const baloonPop = (baloonRef) => {
  let width = baloonRef.current.style.width;
  let height = baloonRef.current.style.height;
  let left = baloonRef.current.style.left;
  let top = baloonRef.current.style.top;
  let opacity = baloonRef.current.style.opacity;
  let i = 0;
  const timer = setInterval(() => {
    if (i !== 150 && baloonRef.current !== null) {
      i++;
      width = parseFloat(width) + 2;
      height = parseFloat(height) + (42 / 30) * 2;
      left = parseFloat(left) - 1;
      top = parseFloat(top) - (42 / 30) * 2;
      opacity = parseFloat(opacity) - 1 / 150;

      setBaloonStyle({ baloonRef, width, height, left, top, opacity });
    } else if (baloonRef.current !== null) {
      clearInterval(timer);
      setInitialBaloonStyle(baloonRef);
    }
  }, 1);
};

const baloonResign = (baloonRef) => {
  if (baloonRef != null) {
    let left = baloonRef.current.style.left;
    let top = baloonRef.current.style.top;
    let i = 0;
    const timer = setInterval(() => {
      if (i !== 400 && baloonRef.current !== null) {
        i++;
        left = parseFloat(left) + Math.sin(i / 30);
        top = parseFloat(top) - 3;
        console.log(baloonRef);
        setBaloonStyle({ baloonRef, left, top });
      } else if (baloonRef.current !== null) {
        clearInterval(timer);
        setInitialBaloonStyle(baloonRef);
      }
    }, 1);
  }
};

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

  useEffect(() => {
    setInitialBaloonStyle(baloonRef);
  }, []);

  const handleClick = () => {
    setPump(1);
    if (pumps === 3) {
      baloonPop(baloonRef);
      setPumps(0);
      onExplosion();
    } else {
      onSuccessfulPump();
      setPumps(pumps + 1);
      baloonPump(baloonRef, 20);
    }
  };

  const handleAnimationEnd = () => {
    setPump(0);
  };

  const handleResign = () => {
    setPumps(0);
    baloonResign(baloonRef);
    onResign();
  };

  const thereIsANextBalloon = number < numberOfBaloons - 1;

  return (
    <div>
      <Button onClick={handleResign} variant="contained" color="secondary">
        {thereIsANextBalloon ? dictionary[language].next : "OK"}
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
        <div className="baloon" pump={pump} ref={baloonRef}></div>
      </div>
    </div>
  );
}
