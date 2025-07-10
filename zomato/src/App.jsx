import React,{ useState } from 'react'

import './App.css'
const App = () =>{
  const[search,setSearch]=useState("");
  const [data,setData]=useState([]);
  const YOUR_APP_ID = "cdfc5849";
const YOUR_APP_KEY = "49b12c8b98e8267c0c227399d2ea4be4"	;
  /*const changeHandler=e=>{
    setSearch(e.target.value)
  }*/
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`http://localhost:3000/recipes?q=${search}`)


  .then(response => response.json())
  .then(data => {
    console.log(data);
    setData(data.hits || []);
     // Optional: if you want to store the recipes
  })
  .catch(err => console.error(err));
  }
  return(
    <div>
      <center>
        <h4>Search your cravings</h4>
        <form onSubmit={submitHandler}>
          <input type="text"  value={search} onChange={(e) => setSearch(e.target.value)}/> &nbsp;&nbsp;
          <input type="submit" value="Search"name="search"/>
        </form>
        
      </center>
      
    </div>
    
  )
}



export default App