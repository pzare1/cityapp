import React from 'react'
import Navbar from '../Components/Navbar'
import { AiOutlineRight } from "react-icons/ai";

function Stations() {
    return (
        <>
             <div className="container mt-3 rounded-2">
                <Navbar />
                <h5 className="text-custome text-center">List of Stations</h5>
                <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col text-muted">#</th>
                        <th scope="col text-muted">Station Name</th>
                        <th scope="col text-muted">Address</th>
                        <th scope="col text-muted">Capacity</th>
                        <th scope="col text-muted">Location Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button className="btn btn-outcustome"><AiOutlineRight/></button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><button className="btn btn-outcustome">Link</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td><button className="btn btn-outcustome">Link</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Stations
