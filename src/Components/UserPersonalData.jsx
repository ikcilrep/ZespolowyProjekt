import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import dictionary from "../dictionary.json";
import "./UserPersonalData.css";

const MAN = "Man";
const WOMAN = "Woman";
const OTHER = "Other";

const UserPersonalData = ({ handleData, nextPagePath, language }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    handleData({ firstName, lastName, age, sex });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

  return (
    <div style={{ color: "black" }} id="personaldataform" className="centered">
      <div style={{ width: "75%" }}>
        <label>
          {dictionary[language].FirstName}:
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="name"
          />
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
        <Button onClick={handleClick} variant="contained" color="secondary">
          Ok
        </Button>
      </div>
    </div>
  );
};

export { MAN, WOMAN, OTHER };
export default UserPersonalData;
