import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState(null);
  const uploaded = ()=>{
    storage.ref(`/images/${image.name}`).put(image);
    'file uploaded successfully', alert('success'),alert
  
  }

  return (
    <>
      <div className='mid'>
       <center>
        <input type="file" onChange={(e)=>setImage(e.target.files[0].name)}/>
        <button onClick={uploaded}>upload</button>
       </center>
      </div>
      
    </>
  )
} 

export default App
