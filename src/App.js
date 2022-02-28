import React, { useState } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddNewForm';
import EditUserForm from './components/EditUserForm';

const App = () => {

  // Initial state and ID unique for each element
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  // Add new user to usersData
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([...users, user])
    console.log(users)
  }
  // Edit user
  const [ editing, setEditing ] = useState(false)

  const [ currentUser, setCurrentUser ] = useState(
    {id: null, name: '', username:''}
  )

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }


  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  // Delete current User
  const deleteUser = (id) => {
    const filterArray = users.filter(user => user.id !== id)
    setUsers(filterArray)
    console.log(id)
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Add user</h2>
                <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            setEditing={setEditing}
            editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
