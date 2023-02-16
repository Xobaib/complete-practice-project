import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isUserEnered, setIsUserEntered] = useState(false);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      setIsUserEntered(true);
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random() }];
    });
  };

  const deleteItemHandler = (userId) => {
    setUsersList((prevItems) => {
      const updatedItems = prevItems.filter((user) => user.id !== userId);
      return updatedItems;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList
        users={usersList}
        onDeleteItem={deleteItemHandler}
        userConfirm={isUserEnered}
      />
    </div>
  );
}

export default App;
