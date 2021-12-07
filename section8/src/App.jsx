import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (name, age) => {
    const newUser = {name, age, id: Math.random().toString()}
    setUsersList(prevContent => [...prevContent, newUser])
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}


export default App