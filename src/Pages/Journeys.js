import React from 'react'
import Navbar from '../Components/Navbar'

function Journeys({dataJourney}) {
    console.log(dataJourney)
    return (
        <>
            <div className="container mt-3 rounded-2">
                <Navbar />
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
                    {dataJourney?.map((item) => (
                        <tr>
                        <th scope="row">{item?.id}</th>
                        <td>{item?.name}</td>
                        <td>{item?.username}</td>
                        <td>{item?.email}</td>
                        <td>{item?.address?.company?.name}</td>
                        <td>ffefw</td>
                        <td>ffefw</td>
                      </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Journeys
