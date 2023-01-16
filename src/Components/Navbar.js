import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="container-fluid Navbar-main">
                <div className="row">
                    <div className="col-md-6">
                        <Link to={"/"}>
                            <h5 className="text-secondary mt-2 text-title">
                                City App
                            </h5>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-end">
                            <Link to={"/journeys"}>
                                <button className="btn btn-custome">
                                    Journeys
                                </button>
                            </Link>
                            <Link to={"/stations"}><button className="btn btn-outcustome">
                                Stations
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
