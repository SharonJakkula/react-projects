import React,{ useState } from 'react'
import './App.css';
import Questions from './Questions.json';
import Display from './Display'; 

const App=()=> { 
    let tempMarks =[]
  const [marks,setMarks] = useState([]);
  const changeHandler = (value,index) =>{
    tempMarks = marks;  
    tempMarks[index] = value; 
        setMarks([...tempMarks]);
  }

  return (
    <>
      <div className='quiz-container'>
          {Questions.map((question,index) =>{
          return(
            <Display question={question} index={index} changeHandler={changeHandler}/>
          )
           })}
           <button
           style={{
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px'
  }}
   onClick={()=>alert(marks.reduce((a,b)=>a+b,0)+'/6')}>End Quiz</button>
        
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
