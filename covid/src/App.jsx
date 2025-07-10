import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/countries`)
      .then(res => res.json())
      .then(jsondata => setData(jsondata)) // ✅ Fix: jsondata is already the array
      .catch(err => console.log(err)); // optional: error handling
  }, []);

  return (
    <>
      <div>
        <center>
          <h1>COVID-19 DASHBOARD</h1>
          <table className="table" border="4" cellPadding="6" >
            <thead style={{ backgroundColor: '#333', color: '#fff' }}>
              <tr >
                <th>Country</th>
                <th>Total Cases</th>
                <th>New Today</th>
                <th>Total Deaths</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Tests</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.country}</td>
                  <td>{item.cases}</td>
                  <td>{item.todayCases}</td>
                  <td>{item.deaths}</td>
                  <td>{item.recovered}</td>
                  <td>{item.active}</td>
                  <td>{item.tests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
};

export default App;
