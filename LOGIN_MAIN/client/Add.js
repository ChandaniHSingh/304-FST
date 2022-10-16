import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const navigate = useNavigate()

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pwd,setPwd]=useState('')

    const collectData = async() =>{
        const result = axios.post("http://localhost:5000/api/addLogin",{
            name,email,pwd
        })
        if(result){
            navigate('/ViewAll')
        }
    }

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin')
        if(!isLogin){
            navigate('/Login')
        }
    },[])
    
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>Add Login</h1>
                    <hr></hr>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="pwd" className="form-label">Pwd</label>
                        <input type="text" className="form-control" id="pwd"  value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                    </div>
                    <input type="submit" value="Add" onClick={collectData}  className="btn btn-primary"/>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </>
  )
}

export default Add