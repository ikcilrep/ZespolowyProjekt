import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import "./LanguageChoice.css";
import "./Reading.css";

const Instruction = ({ points, nextPagePath }) => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

  return (
    <>
      <div className="reading centered" style={{ color: "black" }}>
        {points.map((point, index) => (
          <Typography variant="h5" component="h5" key={index}>
            {`${index + 1}. ${point}`}
          </Typography>
        ))}
        <Button onClick={handleClick} variant="contained" color="secondary">
          OK
        </Button>
        <Typography variant="h2" component="h5">
          TODO: CZY CHCEMY TAKI FORMAT Z WYLICZANIEM GDZIEŚ???
        </Typography>
      </div>
    </>
  );
};

export default Instruction;
