import React,{useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Yes from './Yes'


const Display = () => {

    const handleYesClick = () => {
  navigate("/yes");
};
      const navigate = useNavigate(); // ✅ useNavigate must be called
     const noBtnRef = useRef(null);
     const [isMoved,setIsMoved] = useState(false);

  const handleMouseEnter = () => {
    const btn = noBtnRef.current;
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    // Generate random positions (keep the button inside container bounds)
    const maxX = bodyWidth - btn.offsetWidth;
    const maxY = bodyHeight - btn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;

    setIsMoved(true);
  };


  return (
    <>
    <div>
        <center> 
              <img
          src="https://media.tenor.com/6JZUH_Wo6XwAAAAj/mimibubu.gif"
          alt="bubu asking dudu"
          style={{ width: '90vw', maxWidth: '400px', marginTop: '20px'  }}
        />         
              
                <h1>Do You Love me?</h1>
                <button onClick={handleYesClick}>Yes</button>&nbsp;&nbsp;
                <button  ref={noBtnRef}
        onMouseEnter={handleMouseEnter}
        style={{
          position: isMoved?'absolute':'static',
          
        }}
      >No</button>
            
        </center>

       
    </div>
     
      
       </>
  )
}




export default Display