import React, { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";

const FormInput = styled.form`
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // storing the value of Usrename input in enteredUsername state
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  // storing the value of Age input in enteredAge state
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //   it will be executed when user clicks on the button
  const addUserHandler = (event) => {
    event.preventDefault();

    // if one of the inputs was empty or an invalid information was entered
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <FormInput onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </FormInput>
    </Card>
  );
};

export default AddUser;
