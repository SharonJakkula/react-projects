import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const { imgname } = useParams(); // ✅ Get route param
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pixabay.com/api/?key=51175865-554477abc01e79672c10cfca6&q=${imgname}&image_type=photo`)
      .then(res => setData(res.data.hits))
  }, [imgname]);

  return (
    <div className='search'>
      <div className="row">
        {data.length > 0 ? (
          data.map((imgObj) => (
            <div className="card" key={imgObj.id}>
              <img
                className="card-img-top"
                src={imgObj.largeImageURL}
                alt={imgObj.tags}
                height="250"
                width="200"
              />
              <div className='card-body'>
                <h5 className="card-title">{imgObj.tags}</h5>
              </div>
            </div>
          ))
        ) : (
          <p>No images found for "{imgname}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;
