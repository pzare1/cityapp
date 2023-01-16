import React from 'react'
import Navbar from './Components/Navbar'


function Home() {
    return (
        <>
            <div className="container mt-3 rounded-2">
                <div className="row">
                    <Navbar />
                </div>
                <h5 className="text-custome text-center">List of Journeys</h5>
                <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col text-muted">#</th>
                        <th scope="col text-muted">Departure Time</th>
                        <th scope="col text-muted">Return Time</th>
                        <th scope="col text-muted">Departure Station</th>
                        <th scope="col text-muted">Return Station</th>
                        <th scope="col text-muted">Distance</th>
                        <th scope="col text-muted">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>ffefw</td>
                        <td>ffefw</td>
                        <td>ffefw</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>dwd</td>
                        <td>dwd</td>
                        <td>dwd</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>fee</td>
                        <td>fee</td>
                        <td>fee</td>
                    </tr>
                </tbody>
            </table>
            </div>

        </>
    )
}

export default Home
