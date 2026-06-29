import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  
  const [userData,setUserData] = useState([]);

  const getData = async () =>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    setUserData(response.data);
  }

  let 

  return (
    <div className='container'>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App
