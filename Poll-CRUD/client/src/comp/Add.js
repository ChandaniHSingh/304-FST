import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const navigate = useNavigate()

    const[que,setQue]=useState('')
    const[op1,setOp1]=useState('')
    const[op2,setOp2]=useState('')
    const[op3,setOp3]=useState('')
    const[op4,setOp4]=useState('')

    const collectData = async() =>{
        const result = axios.post("http://localhost:5000/api/addPoll",{
            que,op1,op2,op3,op4
        })
        if(result){
            navigate('/ViewAll')
        }
    }
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>Add Poll</h1>
                    <hr></hr>
                    <div className="mb-3">
                        <label for="que" className="form-label">Question</label>
                        <input type="text" className="form-control" id="que"  value={que} onChange={(e)=>setQue(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="op1" className="form-label">Option-1</label>
                        <input type="text" className="form-control" id="op1"  value={op1} onChange={(e)=>setOp1(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="op2" className="form-label">Option-2</label>
                        <input type="text" className="form-control" id="op2"  value={op2} onChange={(e)=>setOp2(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="op3" className="form-label">Option-1</label>
                        <input type="text" className="form-control" id="op3"  value={op3} onChange={(e)=>setOp3(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="op4" className="form-label">Option-2</label>
                        <input type="text" className="form-control" id="op4"  value={op4} onChange={(e)=>setOp4(e.target.value)}/>
                    </div>
                    <input type="submit" value="Add" onClick={collectData}  className="btn btn-primary"/>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        {/* <h1>Add Poll</h1>
        Question : <input type="text" value={que} onChange={(e)=>setQue(e.target.value)}/><br/>
        Option-1 : <input type="text" value={op1} onChange={(e)=>setOp1(e.target.value)}/><br/>
        Option-2 : <input type="text" value={op2} onChange={(e)=>setOp2(e.target.value)}/><br/>
        Option-3 : <input type="text" value={op3} onChange={(e)=>setOp3(e.target.value)}/><br/>
        Option-4 : <input type="text" value={op4} onChange={(e)=>setOp4(e.target.value)}/><br/>
        <input type="submit" value="Add" onClick={collectData}/> */}

    </>
  )
}

export default Add