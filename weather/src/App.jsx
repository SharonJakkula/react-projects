import  React,{useState } from 'react'
import './App.css'


const App = () => {
const [city,setCity]=useState("")
const [result,setResult]=useState("")
const changeHandler=e=>{
  setCity(e.target.value);
}
const submitHandler=e=>{
  e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
    response=>response.json()
  ).then(data=>{
    const kelvin = data.main.temp;
    const celsius = kelvin - 273.15
    setResult("Temperature at"+" "+city+"\n"+Math.round(celsius)+"°C")
    setCity("")

  })
}
  return (
    <>
      <div className="card">
       <div className="card-body">
        <h4 className="card-ttle">Weather Application </h4>
        <form onSubmit={submitHandler}>
          <input type="text" name="city" value={city} onChange={changeHandler} /><br/><br/>
          <input type="submit" value="Get Temp"/>
        </form>
        <h4>{result}</h4>
       </div>
      </div>
      
      
      <p className="read-the-docs">
        Give your city to get the temperature
      </p>
    </>
  )
}

export default App
