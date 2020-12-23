import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import { Context } from "../Store";
import "./Finalize.css";


const Finalize = ({ text }) => {
  const [redirect, setRedirect] = useState(false);
  const [state, dispatch] = useContext(Context);

  console.log(state)
  return (
    <>
      <div className="reading centered" style={{
        color: "black", overflowY: 'scroll', height: "500px", width: "auto"
        }}>
        <Typography  style={{whiteSpace: 'pre-line'}} variant="h5" gutterBottom>
          {text}
        </Typography>
      </div>
    </>
  );
};

export default Finalize;
