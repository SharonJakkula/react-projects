import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      alert("Please enter a search term.");
      return;
    }

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=263d22d8
      `)
      .then((response) => response.json())
      .then((value) => {
        if (value && value.Search) {
          setData(value.Search);
        } else {
          setData([]); // Clear results if no data found
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  const download = (url) => {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blobUrl = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = blobUrl;
        link.setAttribute("download", "image.png");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <center>
          <h1 style={{ fontFamily: "Georgia" }}>WEB SERIES</h1>
          <br />
          <br />
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="text"
              placeholder="search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            &nbsp;&nbsp;
            <input type="submit" value="Search" />
          </form>

          {Array.isArray(data) && data.length > 0 ? (
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              {data.map((item, index) => (
                <div className="card" style={{ width: '18rem', padding: '0.5em' }} key={index}>
                  <img src={item.Poster} className="card-img-top" alt={item.Title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">
                      Type: {item.Type}
                      <br />
                      Year: {item.Year}
                    </p>
                    <a
                      href={`https://www.imdb.com/title/${item.imdbID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-btn"
                    >
                      View on IMDb
                    </a>
                    <br />
                    <br />
                    <button className="custom-btn" onClick={() => download(item.Poster)}>
                      Download Poster
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No results found</p>
          )}
        </center>
      </div>
    </>
  );
};

export default App;
