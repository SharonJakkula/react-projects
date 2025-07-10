import { useEffect, useState } from 'react'
import './App.css'
import EmojiData from './Emoji.json'


const App=()=> {
  const [search, setSearch] = useState('')
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
    setData(newData);
  },[search])
  

  return (
    <>

     <div className="emoji-background">
        {/* Background floating emojis */}
        <span className="emoji">🎉</span>
        <span className="emoji">😊</span>
        <span className="emoji">🚀</span>
        <span className="emoji">🔥</span>
        <span className="emoji">✨</span>
      </div>

      <div><center>
        <h2>Emoji Search App</h2>
        <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for an Emoji'/>
        </center>
        {data.map(emoji => <div>
          <div class="card" key={emoji.title}>
            <div calss="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji is copied to clipboard!!  Enjoyy🎉🎉")}}>
              {emoji.symbol} {emoji.title}
            </div>
          </div>
        </div>)}
      </div>
    </>
  )
}

export default App
