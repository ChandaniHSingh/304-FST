import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {
  const params = useParams()
  const navigate = useNavigate()

  const[data,setData]=useState([])
  const deletePoll = async() =>{
    const result = await axios.delete(`http://localhost:5000/api/deleteOnePoll/${params.id}`)
    if(result){
      navigate('/ViewAll')
    }
  }

  useEffect(()=>{
    deletePoll()
  },[])
  
  return (
    <>
      Delete
    </>
  )
}

export default Delete