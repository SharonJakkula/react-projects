import React from 'react'
import './Yes.css';
const Yes = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
        <center>
            <h1  >
                Hurrayyy!!🎉
            </h1>
            <h2>
              I Love Youuu😙</h2><div style={{ display:'flex',justifyContent:'center',gap:'10px',marginTop:'20px'
              
            }
            }>
              <img
          src="https://media.tenor.com/sFStC1YwBzMAAAAm/milk-and-mocha-hug.webp"
          alt="Milk and Mocha bears hugging"
          style={{ width: '90vw', maxWidth: '500px', marginTop: '20px'  }}
        />
        </div>
        </center>

        <div className="emoji-background">
        {/* Background floating emojis */}
        <span className="emoji">🎉</span>
        <span className="emoji">🥳</span>
        <span className="emoji">🫂</span>
        <span className="emoji">🎉</span>
        <span className="emoji">🤍</span>
        <span className="emoji">🎊</span><br />
         <span className="emoji">🎉</span>
        
      </div>
    </div>
  )
}

export default Yes