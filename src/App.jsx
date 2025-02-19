// style
import './App.css'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'
import NewUserForm from './components/newuser/NewUserForm'

// others
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  // deleteUser function
  const deleteUser = (id) => {
    setUsers(prev => {
      return prev.filter(user => {
        return user.id !== id
      })
    })
  }

  // closeModal function
  const closeModal = e => {
    if(e.target.className === 'overlay') setShowModal(false)
    if(e.key === 'Escape') setShowModal(false)
  }

  const addUser = user => {
    setUsers(prev => {
      return [...prev, user]
    })
    setShowModal(false)
  }


  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLength={users.length}/>
        <main>
          <div className="no-users">
            { users.length===0 && <h2>No User :(</h2> }
          </div>
          <UserList users={users} deleteUser={deleteUser}/>
        </main>
        <button className="create-user" onClick={() => setShowModal(true)}>Create User</button>
        { showModal && <NewUserForm addUser={addUser}/> }
      <Footer/>
    </div>
  )
}

export default App
