import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./LanguageChoice.css";
import "./Reading.css";

const Instruction = ({ points, onRead }) => {
  return (
    <>
      <div className="reading centered" style={{ color: "white" }}>
        {points.map((point, index) => (
          <Typography variant="h5" component="h5" key={index}>
            {`${index + 1} ${point}`}
          </Typography>
        ))}
        <Button onClick={onRead} variant="contained" color="secondary">
          OK
        </Button>
      </div>
    </>
  );
};

export default Instruction;
