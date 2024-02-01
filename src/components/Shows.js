import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Shows() {

  const [shows, setShows] = useState([]);

  const showDetails = ({ show }) => {
    const imageUrl = show.image && show.image.original; 
    return (
      <div key={show.id} className="col-md-4 mb-4"> 
        <div className="card">
          {imageUrl && <img src={imageUrl} className="card-img-top" alt={show.name} />}
          <div className="card-body">
            <h3 className="card-title">{show.name}</h3>
            <p className="card-text">Language: {show.language}</p>
            <p className="card-text">Genres: {show.genres.join(', ')}</p>
            <Link to={`/summary/${show.id}`} className="btn btn-primary">Summary</Link>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setShows(data.map(item => item.show)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container show-class">
      <div className="row">
        {shows.map(show => (
          showDetails({ show })
        ))}
      </div> 
    </div>
  );
}

export default Shows;
