import React, { useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';


export default function Edit({data,setData}) {
   let [name,setName]=useState("")
   let [email,setEmail]=useState("")
   let [userName,setUserName]=useState("")
   let [mobile,setMobile]=useState()
   let [batch,setBatch]=useState("")
   let navigate=useNavigate()
   let params=useParams()

   let getData=(index)=>{
      setName(data[index].name)
      setUserName(data[index].userName)
      setEmail(data[index].email)
      setMobile(data[index].mobile)
      setBatch(data[index].batch)

   }
  useEffect(()=>{
    if(Number(params.id)<data.length){
      getData(Number(params.id))
    }
    else{
      navigate('/dashboard')
    }
  },[])
  let handleEdit =()=>{
    let newArray=[...data]
    newArray.splice(Number(params.id),1,{ 
      name,
      userName,
      email,
      mobile,
      batch
    })
    setData(newArray)
    navigate('/dashboard')
  }
  return (
    <>
    <div className="container-fluid">

      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create User</h1>

      </div>
      <div className="row">
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name"value={name} onChange={(e)=>setName(e.target.value)} />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control type="text" placeholder="Enter User Name"value={userName} onChange={(e)=>setUserName(e.target.value)} />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email}onChange={(e)=>setEmail(e.target.value)} />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Mobile </Form.Label>
      <Form.Control type="number" placeholder="Enter Mobile number"value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch Name"value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Button variant="primary" onClick={()=>handleEdit()}>
      Submit
    </Button>
  </Form>
      </div>
    </div>

  </>
  )
}
