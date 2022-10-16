import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

function File() {

    const navigate = useNavigate()
    const [photo, setPhoto] = useState('')
    console.log(photo)

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pwd,setPwd]=useState('')

    const collectData = async(e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file',photo)
        formData.append('filename',name+((Math.random() * 100).toFixed(2)))
        formData.append('name',name)
        formData.append('email',email)
        formData.append('pwd',pwd)

        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }

        const result = axios.post('http://localhost:5000/api/addLogin',formData,config)
        if(result){
            navigate('/ViewAll')
        }
    }
  return (
    <>
        <form onSubmit={collectData} encType='multipart/form-data'>
            Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            Email : <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            Pwd : <input type="text" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
            <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>
            <input type="submit" value="Upload"/>
        </form>
    </>
  )
}

export default File