import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';


const App=()=> {
  const[data,setData]=useState([])
  const[perPage,setPerPage]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => {setData(res.data);setPerPage(res.data.slice(0,10));}
    )
  },[])
  const pageHandler=(pageNumber)=>{
    setPerPage(data.slice((pageNumber*10)-10,pageNumber*10))
  }
  return (
    <>
      <div className='App'>
        {data.length>=1?
        <div>
          {perPage.map(post => <div className='post' key={post.id}>{post.title}</div>)}<br />
          <Pagination data={data} pageHandler={pageHandler}/>
        </div>
        :
        <p>Data Not Loaded</p>}
      </div>
    
    </>
  )
}

export default App
