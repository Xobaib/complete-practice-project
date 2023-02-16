import React, { useState } from "react";
import Card from "../UI/Card";
import styled from "styled-components";

const UserList = styled.ul`
  & {
    list-style: none;
    padding: ${(props) => (props.userConfirm ? "1rem" : "0px")};
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
    cursor: pointer;
  }

  & li:hover {
    border: 3px solid red;
    border-radius: 5px;
    background-color: #efd0d0;
  }
`;

const UsersList = (props) => {
  return (
    <Card isErrorModal={false} isAddUser={false} isUsersList={true}>
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
    </Card>
  );
};

export default UsersList;
