import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  // const getUserInputsHandler = (data) => {
  //   const userInputs = [...data];
  //   console.log(userInputs);
  // };

  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
