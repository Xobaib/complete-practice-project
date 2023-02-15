import React, { useState } from "react";

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
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        //onChange={onChangeUsernameHandler}
        value={username}
      />

      <label htmlFor="age">Age (Years)</label>
      <input
        type="number"
        id="age"
        //onChange={onChangeAgeHandler}
        value={age}
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
