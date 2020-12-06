import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';

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
        <Typography variant="h6" component="h5">
          {text}
        </Typography>
        <Box textAlign='center'>
          <Button onClick={handleClick} size="large" variant="contained" color="secondary" >
            == OK ==
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Reading;
