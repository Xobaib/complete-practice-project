import React, { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUserBox = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  & .user-box {
    position: relative;
  }

  & .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  & .user-box label {
    position: absolute;
    top: -20px;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  & .user-box input:focus ~ label,
  & .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  & form Button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #1da1f2;
    background-color: #131418;
    border: 1px solid black;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 2px;
  }

  & Button:hover {
    background: #03e9f4;
    color: #000;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
`;

const UserBox = styled.div``;

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

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
      setError({
        title: "Invalid Input",
        message: "please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <AddUserBox>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}

      <form onSubmit={addUserHandler}>
        <UserBox className="user-box">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
        </UserBox>
        <UserBox className="user-box">
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
        </UserBox>
        <Button type="submit">Add User</Button>
      </form>
    </AddUserBox>
  );
};

export default AddUser;
