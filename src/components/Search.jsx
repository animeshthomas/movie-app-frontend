import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Search = () => {
    const [inputfield, changeInputfield] = useState({
        name: ''
    });

    const [result, changeResult] = useState([
        {
            name: '',
            actor: '',
            actress: '',
            director: '',
            producer: '',
            image: '',
            releaseDate: '',
            genre: '',
            duration: ''
        }
    ]);

    const inputHandler = (event) => {
        changeInputfield({ ...inputfield, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(inputfield);

        axios.post('http://127.0.0.1:8000/api/search/', inputfield).then(
            (response) => {
                console.log(response.data);
                changeResult(response.data);
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
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">
                                    Movie Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control "
                                    name="name"
                                    value={inputfield.name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button onClick={readValue} className="btn btn-primary">
                                        Search
                                    </button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col col-12">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {result.map((value, index) => (
                            <div key={index} className="col">
                                <div className="card h-100">
                                    <img src={value.image} style={{ height: '350px' }} className="card-img-top" alt={value.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">Actor: {value.actor}</p>
                                        <p className="card-text">Actress: {value.actress}</p>
                                        <p className="card-text">Director: {value.director}</p>
                                        <p className="card-text">Producer: {value.producer}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Search;
