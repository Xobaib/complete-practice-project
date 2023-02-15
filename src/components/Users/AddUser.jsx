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
  //   const [username, setUsername] = useState("");
  //   const [age, setAge] = useState("");

  //   const onChangeUsernameHandler = (event) => {
  //     // console.log(event.target.value);
  //     setUsername(event.target.value);
  //   };

  //   const onChangeAgeHandler = (event) => {
  //     // console.log(event.target.value);
  //     setAge(event.target.value);
  //   };

  const addUserHandler = (event) => {
    event.preventDefault();
    // const userInputs = {
    //   username: username,
    //   age: age,
    // };
    // console.log(userInputs);
    // setUsername("");
    // setAge("");
  };

  return (
    <Card>
      <FormInput onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          //onChange={onChangeUsernameHandler}
          //value={username}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          //onChange={onChangeAgeHandler}
          //   value={age}
        />
        <Button type="submit">Add User</Button>
      </FormInput>
    </Card>
  );
};

export default AddUser;
