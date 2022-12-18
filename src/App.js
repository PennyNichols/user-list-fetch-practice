import "./styles.css";
import {useState, useEffect} from 'react'

const url = 'https://jsonplaceholder.typicode.com/users'

export default function App() {
  const [users, setUsers] = useState()

  const getData = async () => {
    const response = await fetch(url)
    const results = await response.json()
    setUsers(results)
  }
  useEffect(()=>{
    getData()
  })


  return (
    <div className="App">
      <h1>User List</h1>
      {users?.map(user => 
        <>
        <p>{user.name} : {user.email}</p>
        </>
      )}
    </div>
  );
}
