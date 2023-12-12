import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {

    const [inputfield, changeInputfield] = useState(
        {

            "name": ""
        }
    )

    const inputHandler = (event) => {
        changeInputfield({ ...inputfield, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputfield)

    }
    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Movie Name</label>
                                <input type="text" className="form-control " name='name' value={inputfield.name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <center> <button onClick={readValue} className="btn btn-danger">Delete</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Delete