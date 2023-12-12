import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
const View = () => {
  const [data, setData] = useState([])
  const fetchData=()=>{
    axios.post("http://127.0.0.1:8000/api/movie/").then(
      (response)=>{
        setData(response.data)
      }
    )
  }
  useEffect(()=>{fetchData()},[])
  

 

   
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col col-12">
            <div className="row g-4">
             
                <div className="col col-12">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data.map((value, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default View;