import axios from 'axios'

import {useState, useEffect} from 'react'

function Sanket() {
         const [userData, setState] = useState([]);
         useEffect(()=> {
         
               axios.get("https://jsonplaceholder.typicode.com/users")
                   .then((response)=>{
                         console.log(response)
                         setState(response.data)
                   })   
          
     },[])
  return(
    <div>
          {userData.map((data)=>{
                    return(<div>
                          {data.username}
                    </div>) 
          })}
    </div>
  )
}


export default Sanket



Sanket