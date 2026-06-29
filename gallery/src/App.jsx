import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  
  const [userData,setUserData] = useState([]);

  const getData = async () =>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=15");
    setUserData(response.data);
  }

  let printUserData = "No data available";

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return(
          <img className="images" src={elem.download_url} alt="" />
      )
    })
  }

  return (
    <div className='container'>
      <button onClick={getData}>Get data</button>
      <div  className='picture'>
        {printUserData}
      </div>
    </div>

  )
}

export default App
