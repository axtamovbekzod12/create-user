// style
import './UserList.css'

function UserList({users, deleteUser}) {
  return (
    <div className='userList'>
        <div className="userList-container container">
            { users.map((user) => {
                return (
                    <div className="card" key={user.id}>
                        <div className="card-inner">
                            <img src={ user.imageUrl } alt={user.name} height={150}/>
                            <h3>{user.firstName} {user.lastName}, {user.age}</h3>
                            <p><b>From:</b> {user.from}</p>
                            <p><b>Job:</b> {user.job}</p>
                            <p><b>Gender:</b> {user.gender}</p>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    </div>
                )
            }) }
        </div>
    </div>
  )
}

export default UserList