import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ViewDetail() {

    const params = useParams()
    const navigate = useNavigate()

    const[ans,setAns]=useState('')

    const[total,setTotal]=useState(0)

    const[que,setQue]=useState('')
    const[op1,setOp1]=useState('')
    const[op2,setOp2]=useState('')
    const[op3,setOp3]=useState('')
    const[op4,setOp4]=useState('')
    let[op1Count,setOp1Count]=useState(0)
    let[op2Count,setOp2Count]=useState(0)
    let[op3Count,setOp3Count]=useState(0)
    let[op4Count,setOp4Count]=useState(0)

    const getOnePollData = async() =>{
        const result = await axios.get(`http://localhost:5000/api/getOnePoll/${params.id}`)
        setQue(result.data.que)
        setOp1(result.data.op1)
        setOp2(result.data.op2)
        setOp3(result.data.op3)
        setOp4(result.data.op4)
        setOp1Count(result.data.op1_count)
        setOp2Count(result.data.op2_count)
        setOp3Count(result.data.op3_count)
        setOp4Count(result.data.op4_count)
    }

    useEffect(()=>{
        getOnePollData()

        setTotal(op1Count + + op2Count + op3Count + op4Count)
    },[])

    const updatePoll = async() => {
        if(ans == op1){
            setOp1Count(op1Count + 1)
        }
        else if(ans == op2){
            setOp2Count(op2Count + 1)
        }
        else if(ans == op3){
            setOp3Count(op3Count + 1)
        }
        else if(ans == op4){
            setOp4Count(op4Count + 1)
        }

        const result =  axios.patch(`http://localhost:5000/api/updateOnePoll/${params.id}`,{
            op1Count,op2Count,op3Count,op4Count
        })
        
        if(result){
            navigate(`/ViewDetail/${params.id}`)
        }
    }

    const loop = (n) =>{
        let i = 0;
        let str = '';
        while(n>i){
            str += '=';
            i++;
        }
        return(str)
    }

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>View Poll Detail</h1>
                    <hr></hr>
                    <div className="mb-3">
                        <h5 className="form-label">{que}</h5>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" id="op1" value={op1} name="rdbAns" onClick={(e)=>(setAns(op1))}/>
                        <label className="form-check-label" for="op1">{op1}</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" id="op2" value={op2} name="rdbAns" onClick={(e)=>(setAns(op2))}/>
                        <label className="form-check-label" for="op2">{op2}</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" id="op3" value={op3} name="rdbAns" onClick={(e)=>(setAns(op3))}/>
                        <label className="form-check-label" for="op3">{op3}</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" id="op4" value={op4} name="rdbAns" onClick={(e)=>(setAns(op4))}/>
                        <label className="form-check-label" for="op4">{op4}</label>
                    </div>
                    <input type="submit" value="Submit" onClick={(e)=>updatePoll(e)}  className="btn btn-primary"/>
                

                    <hr></hr>
                    <h1>Result</h1>
                    <hr></hr>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Option</th>
                                <th scope="col">Option - Count</th>
                                <th scope="col">Option - Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{op1}</td>
                                <td>{op1Count}</td>
                                <td>{loop(op1Count)}</td>
                                
                                {/* <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td> */}
                            </tr>
                            <tr>
                                <td>{op2}</td>
                                <td>{op2Count}</td>
                                <td>{loop(op2Count)}</td>
                            </tr>
                            <tr>
                                <td>{op3}</td>
                                <td>{op3Count}</td>
                                <td>{loop(op3Count)}</td>
                            </tr>
                            <tr>
                                <td>{op4}</td>
                                <td>{op4Count}</td>
                                <td>{loop(op4Count)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>

        {/* {que}  <br/>
        <input type="radio" value={op1} name="rdbAns" onClick={(e)=>(setAns(op1))}/> {op1} <br/>
        <input type="radio" value={op2} name="rdbAns" onClick={(e)=>(setAns(op2))}/> {op2} <br/>
        <input type="radio" value={op3} name="rdbAns" onClick={(e)=>(setAns(op3))}/> {op3}  <br/>
        <input type="radio" value={op4} name="rdbAns" onClick={(e)=>(setAns(op4))}/> {op4} <br/>
        <input type="submit" value="Submit" onClick={(e)=>updatePoll(e)}/>


        <br></br><hr></hr><br></br>
        <h4>Result</h4>
        <table border="2">
            <tr>
                <td>{op1}</td>
                <td>{op1Count}</td>
                <td>{loop(op1Count)}</td>
            </tr>
            <tr>
                <td>{op2}</td>
                <td>{op2Count}</td>
                <td>{loop(op2Count)}</td>
            </tr>
            <tr>
                <td>{op3}</td>
                <td>{op3Count}</td>
                <td>{loop(op3Count)}</td>
            </tr>
            <tr>
                <td>{op4}</td>
                <td>{op4Count}</td>
                <td>{loop(op4Count)}</td>
            </tr>
        </table> */}

    </>
  )
}

export default ViewDetail