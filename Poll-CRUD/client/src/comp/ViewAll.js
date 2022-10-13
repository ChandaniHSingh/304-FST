import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ViewAll() {
    const[data,setData]=useState([])
    let srno = 0;

    const getAllData = async() =>{
        const result = await axios.get("http://localhost:5000/api/getAllPoll")
        setData(result.data)
    }

    useEffect(()=>{
        getAllData()
    },[])

    const allPollInfo = data.map((d)=>{
        {srno++}
        return(
            <tr>
                <th scope="row">{srno}</th>
                {/* <td>{d._id}</td> */}
                <td>{d.que}</td>
                <td>{d.op1}</td>
                <td>{d.op1_count}</td>
                <td>{d.op2}</td>
                <td>{d.op2_count}</td>
                <td>{d.op3}</td>
                <td>{d.op3_count}</td>
                <td>{d.op4}</td>
                <td>{d.op4_count}</td>
                <td><a href={`Edit/`+d._id} className="btn btn-warning">Edit</a></td>
                <td><a href={`Delete/`+d._id} className="btn btn-danger">Delete</a></td>
                <td><a href={`ViewDetail/`+d._id} className="btn btn-primary">View</a></td>
            </tr>
        )
    })

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1>View All Poll</h1>
                    <hr></hr>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Srno</th>
                                {/* <th scope="col">_id</th> */}
                                <th scope="col">Que</th>
                                <th scope="col">Op1</th>
                                <th scope="col">Op1_count</th>
                                <th scope="col">Op2</th>
                                <th scope="col">Op2_count</th>
                                <th scope="col">Op3</th>
                                <th scope="col">Op3_count</th>
                                <th scope="col">Op4</th>
                                <th scope="col">Op4_count</th>
                                <th scope="col" colSpan="2">Action</th>
                                <th scope="col">ViewDetail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPollInfo}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* <table border="2">
            <thead>
                <th>Srno</th>
                <th>_id</th>
                <th>Que</th>
                <th>Op1</th>
                <th>Op1_count</th>
                <th>Op2</th>
                <th>Op2_count</th>
                <th>Op3</th>
                <th>Op3_count</th>
                <th>Op4</th>
                <th>Op4_count</th>
                <th colSpan="2">Action</th>
                <th>ViewDetail</th>
            </thead>
            <tbody>
                {allPollInfo}
            </tbody>
        </table> */}
    </>
  )
}

export default ViewAll