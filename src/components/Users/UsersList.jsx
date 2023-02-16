import React, { useState } from "react";
// import Card from "../UI/Card";
import styled from "styled-components";

const UserList = styled.ul`
  & {
    list-style: none;
    padding: ${(props) => (props.userConfirm ? "1rem" : "0px")};
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #2c3e50;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  @media all and (min-width: 768px) {
    position: absolute;
    top: 60%;
    left: 34%;
    width: 400px;
  }

  & li {
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #131418;
    color: #1da1f2;
    letter-spacing: 2px;
    margin: 0.5rem 0;
    padding: 0.5rem;
    cursor: pointer;
    text-align: center;
  }

  & li:hover {
    border: 3px solid red;
    border-radius: 5px;
    background-color: #efd0d0;
    color: #d50000;
  }
`;

const UsersList = (props) => {
  return (
    <>
      <UserList userConfirm={props.userConfirm}>
        {props.users.map((user) => {
          const deleteHandler = () => {
            const userConfirm = window.confirm(
              "Do you want to dalete this item?"
            );
            userConfirm && props.onDeleteItem(user.id);
          };
          return (
            <li key={user.id} onClick={deleteHandler}>
              {user.name} is {user.age} years old
            </li>
          );
        })}
      </UserList>
    </>
  );
};

export default UsersList;
