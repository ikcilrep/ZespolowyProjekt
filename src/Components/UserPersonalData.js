import React from 'react';
import './UserPersonalData.css'
import ReactDOM from 'react-dom';

class UserPersonalData extends React.Component {
  render() {
    return <div>
       <form>
  <label>
    Imię:
    <input type="text" name="name" />
    Nazwisko:
    <input type="text" name="surname" />
    Data urodzenia:
    <input type="number" name="age" />
    Płeć:
    <select>
  <option value="Men">Mężczyzna</option>
  <option value="Woman">Kobieta</option>
  <option value="Other">Inny</option>
</select>
  </label>
  <input type="submit" value="Wyślij" />
</form> 

    </div>;
   
}
}

export default UserPersonalData;