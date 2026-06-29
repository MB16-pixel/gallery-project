import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  
  const [userData,setUserData] = useState([]);

  const getData = async () =>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=15");
    setUserData(response.data);
    console.log(response)
  }

  useEffect(function(){
    getData();
  },[])

  let printUserData = "No data available";

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return(
        <a href={elem.url} target='_blank'>
          <img className="images" src={elem.download_url} alt="" key={idx} />
        </a>
      )
    })
  }

  return (
    <div className='container'>
      {/* <button onClick={getData}>Get data</button> */}
      <div  className='picture'>
        {printUserData}
      </div>
      <div className='btn'>
        <button >Back</button>
        <button>Next</button>
      </div>
    </div>

  )
}

export default App
