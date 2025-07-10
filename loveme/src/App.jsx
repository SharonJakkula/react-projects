import React,{ useState } from 'react'
import Display from './Display'
import { useNavigate } from 'react-router-dom';
import './App.css'

const App=()=> {
  const [name, setName] = useState('');
  const [error, setError] = useState(''); // error state to show messages
  const navigate = useNavigate();

  const correctName = 'Abhilash';      // replace with actual correct name

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === correctName ) {
      setError('');
      navigate('/display');
    } else {
      alert('Invalid Details Abhilash');
    }
  };

  return (
    <>
      <div>
        <center>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            
            <br />
            <input type="submit" value="Submit" />
          </form>

          {/* Display error message if present */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </center>
      </div>
      <p className="read-the-docs">
       Heyyyy I have a surprise for youu
      </p>
    </>
  )
}

export default App
