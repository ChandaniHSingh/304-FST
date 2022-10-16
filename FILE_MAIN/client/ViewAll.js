import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import {imageUrl} from '../../public/images/'

function ViewAll() {
    const[data,setData]=useState([])
    let srno = 0;

    const getAllData = async() =>{
        const result = await axios.get("http://localhost:5000/api/getAllLogin")
        setData(result.data)
    }

    useEffect(()=>{
        getAllData()
    },[])

    const allLoginInfo = data.map((d)=>{
        {srno++}
        return(
            <tr>
                <th scope="row">{srno}</th>
                {/* <td>{d._id}</td> */}
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.pwd}</td>
                <td><img width="100px" heught="100px" src={process.env.PUBLIC_URL+"images/"+d.photo} /></td>
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
                    <h1>View All Login</h1>
                    <hr></hr>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Srno</th>
                                {/* <th scope="col">_id</th> */}
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">pwd</th>
                                <th scope="col" colSpan="2">Action</th>
                                <th scope="col">ViewDetail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allLoginInfo}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewAll