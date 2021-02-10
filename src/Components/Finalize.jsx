import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import { Context } from "../Store";
import "./Finalize.css";
require('dotenv').config()


const Finalize = ({ text }) => {
  const [redirect, setRedirect] = useState(false);
  const [state, dispatch] = useContext(Context);
  
  const AirTable = require('airtable')
  var base = new AirTable({apiKey: process.env.REACT_APP_API_KEY}).base(process.env.REACT_APP_BASE_ID)    

  console.log(state)
  console.log({"UserData": state.user_data})
  console.log({"Language": state.language})
  console.log({"PersonalityTest": state.answears})
  console.log({"ReadingComprehension": state.answears2})
  console.log({"Balloons": state.balloon})

  base('Table 1').create({
    "Date" : new Date(),
    "UserData": state.user_data,
    "Language": state.language,
    "PersonalityTest": state.answears,
    "ReadingComprehension": state.answears2,
    "Balloons": state.balloon
  }, {typecast: true}, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });
  
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
