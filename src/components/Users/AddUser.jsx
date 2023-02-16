import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUserBox = styled.div`
  margin-top: 10rem;
  margin-left: 11.5rem;
  margin-right: auto;
  width: 300px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  @media all and (min-width: 768px) {
    position: absolute;
    top: 5%;
    left: 35%;
    width: 400px;
  }

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
  const userNameInput = useRef();
  const userAgeInput = useRef();

  const [error, setError] = useState();

  //   it will be executed when user clicks on the button
  const addUserHandler = (event) => {
    event.preventDefault();
    // storing the user inputs on refs
    const name = userNameInput.current.value;
    const age = userAgeInput.current.value;
    // if one of the inputs was empty or an invalid information was entered
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(name, age);

    userNameInput.current.value = "";
    userAgeInput.current.value = "";
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

      <form onSubmit={addUserHandler} autoComplete="off">
        <UserBox className="user-box">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            ref={userNameInput}
            placeholder="just type your name 😉"
          />
        </UserBox>
        <UserBox className="user-box">
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={userAgeInput}
            placeholder="something like: 89 😐"
          />
        </UserBox>
        <Button type="submit">Add User</Button>
      </form>
    </AddUserBox>
  );
};

export default AddUser;
