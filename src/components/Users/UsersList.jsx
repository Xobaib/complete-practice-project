import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";

const UserList = styled.ul`
  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

const UsersList = (props) => {
  return (
    <Card isErrorModal={false} isAddUser={false} isUsersList={true}>
      <UserList>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age}) years old
            </li>
          );
        })}
      </UserList>
    </Card>
  );
};

export default UsersList;
