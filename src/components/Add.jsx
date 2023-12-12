import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const AddMovie = () => {
  const [inputfield, changeInputfield] = useState({
    name: '',
    actor: '',
    actress: '',
    director: '',
    producer: '',
    image: '',
    releaseDate: '',
    genre: '',
    duration: '',
  });

  const inputHandler = (event) => {
    changeInputfield({ ...inputfield, [event.target.name]: event.target.value });
  };

  const readValue = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log(inputfield);

    axios.post('http://127.0.0.1:8000/api/add/', inputfield).then(
      (response) => {
        alert(response.data.Status);
      }
    );
  };

  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="name" className="form-label">
                  Movie Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={inputfield.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="actor" className="form-label">
                  Actor
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="actor"
                  name="actor"
                  value={inputfield.actor}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="actress" className="form-label">
                  Actress
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="actress"
                  name="actress"
                  value={inputfield.actress}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="director" className="form-label">
                  Director
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="director"
                  name="director"
                  value={inputfield.director}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="producer" className="form-label">
                  Producer
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="producer"
                  name="producer"
                  value={inputfield.producer}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  value={inputfield.image}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="releaseDate" className="form-label">
                  Release Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="releaseDate"
                  name="releaseDate"
                  value={inputfield.releaseDate}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  name="genre"
                  value={inputfield.genre}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="duration" className="form-label">
                  Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="duration"
                  name="duration"
                  value={inputfield.duration}
                  onChange={inputHandler}
                />
              </div>
              
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <form>
                  <center>
                    <button onClick={readValue} className="btn btn-success">
                      Add Movie
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
