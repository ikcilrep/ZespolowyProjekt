import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./LanguageChoice.css";
import "./Reading.css";

const Reading = ({ text, onRead }) => {
  return (
    <>
      <div className="reading centered" style={{ color: "white" }}>
        <Typography variant="h5" component="h5">
          {text}
        </Typography>
        <Button onClick={onRead} variant="contained" color="secondary">
          OK
        </Button>
      </div>
    </>
  );
};

export default Reading;
