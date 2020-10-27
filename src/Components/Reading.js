import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import "./LanguageChoice.css";
import "./Reading.css";

const Reading = ({ text, nextPagePath }) => {
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
        <Typography variant="h5" component="h5">
          {text}
        </Typography>
        <Button onClick={handleClick} variant="contained" color="secondary">
          OK
        </Button>
      </div>
    </>
  );
};

export default Reading;
