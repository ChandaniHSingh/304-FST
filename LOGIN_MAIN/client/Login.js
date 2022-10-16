import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const[email,setEmail]=useState('')
  const[pwd,setPwd]=useState('')

  const collectData = async() =>{
    try{
      const result = await axios.post("http://localhost:5000/api/checkLogin",{
          email,pwd
      })

      console.log(result.data[0].email)
      if(result.data[0].email){
        localStorage.setItem("isLogin",true)
        localStorage.setItem("login",result.data)
          navigate('/ViewAll')
      }
      else{
        alert("Invalid Login Credentials")
      }
    }catch(error){
      alert("Inavlid Login")
    }
  }
  return (
    <>
       <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>Login Into System</h1>
                    <hr></hr>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Pwd</label>
                        <input type="text" className="form-control" id="pwd"  value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                    </div>
                    <input type="submit" value="Login" onClick={collectData}  className="btn btn-primary"/>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </>
  )
}

export default Login