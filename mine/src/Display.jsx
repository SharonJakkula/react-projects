import React,{useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Yes from './Yes'
import './Display.css'


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
                <h1>Hello Love</h1>
                <h2>Will you come to our home?? </h2>
                <button onClick={handleYesClick}>Yes</button>&nbsp;&nbsp;
                <button  ref={noBtnRef}
        onMouseEnter={handleMouseEnter}
        style={{
          position: isMoved?'absolute':'static',
          
        }}
      >No</button>
            
        </center>

        <div className="emoji-background">
        {/* Background floating emojis */}
        <span className="emoji">💗</span>
        <span className="emoji">💋</span>
        <span className="emoji">💗</span>
        <span className="emoji">💞</span>
        <span className="emoji">💗</span>
        <span className="emoji">💕</span><br />
        
        
      </div>
    </div>
     
      
       </>
  )
}




export default Display