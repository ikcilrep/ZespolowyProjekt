import React from "react";
import { Redirect } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import dictionary from "../dictionary.json";
import { Context } from "../Store";
import "./UserPersonalData.css";

const MAN = "Man";
const WOMAN = "Woman";
const OTHER = "Other";

const UserPersonalData = ({ handleData, nextPagePath, language }) => {
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState(dictionary[language].Man);
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    handleData({ lastName, age, sex });
    setRedirect(true);
  };

  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    if (age !== null && sex !== null && lastName !== null) {
      dispatch({ type: `ADD_USER_DATA`, payload: [age, sex, lastName] });
    }
  }, [age, sex, lastName]);

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

  return (
    <div style={{ color: "black" }} id="personaldataform" className="centered" >
      <div style={{ width: "75%" }} >
        <label>
          {dictionary[language].LastName}:
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="surname"
          />
          {dictionary[language].Age}:
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="age"
          />
          {dictionary[language].Sex}:
          <select onChange={(e) => setSex(e.target.value)}>
            <option value={MAN}>{dictionary[language].Man}</option>
            <option value={WOMAN}>{dictionary[language].Woman}</option>
            <option value={OTHER}>{dictionary[language].Other}</option>
          </select>
        </label>
        <div>
          <Button onClick={handleClick} variant="contained" color="primary">
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export { MAN, WOMAN, OTHER };
export default UserPersonalData;
