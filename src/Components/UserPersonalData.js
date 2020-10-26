import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { ENGLISH, POLISH, SPANISH } from './LanguageChoice';
import Button from "@material-ui/core/Button";
import "./UserPersonalData.css";

const Man = 'Man';
const Woman = 'Woman';
const Other = 'Other';

const UserPersonalData = ({ onDataEntered, nextPagePath, language }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [redirect, setRedirect] = useState(false);

  const dictionary = {};
  dictionary[ENGLISH] = {
    Man: 'Man',
    Woman: 'Woman',
    Other: 'Other',
    FirstName: 'First name',
    LastName: 'Last name',
    Age: 'Age',
    Sex: 'Sex'
  };
  dictionary[POLISH] = {
    Man: 'Mężczyzna',
    Woman: 'Kobieta',
    Other: 'Inny',
    FirstName: 'Imię',
    LastName: 'Nazwisko',
    Age: 'Wiek',
    Sex: 'Płeć'
  };

  dictionary[SPANISH] = {
    Man: 'Hombre',
    Woman: 'Mujer',
    Other: 'Diferente',
    FirstName: 'Nombre',
    LastName: 'Apellido',
    Age: 'Años',
    Sex: 'Sexo'
  };

  const handleClick = () => {
    onDataEntered({ firstName, lastName, age, sex });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

  return (
    <div style={{ color: "white" }}>
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
          <option value={Man}>{dictionary[language].Man}</option>
          <option value={Woman}>{dictionary[language].Woman}</option>
          <option value={Other}>{dictionary[language].Other}</option>
        </select>
      </label>
      <Button
        onClick={handleClick}
        variant="contained"
        color="secondary"
      >
        Ok
      </Button>
    </div>
  );
};

export { Man, Woman, Other };
export default UserPersonalData;
