import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Cards from './components/Cards';
function App() {
  
  const [userData,setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
      setUserData(response.data);
      console.log(response)
    }

    fetchData();
  }, [index])

  let printUserData = <h3 className='loading'>Loading...</h3>;

  if(userData.length>0){
    printUserData = userData.map(function(elem){
      return(
        <Cards elem={elem}/>
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
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}>
        Back</button>
        <h4>Page {index} </h4>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}>
        Next</button>
          
      </div>
    </div>

  )
}

export default App
