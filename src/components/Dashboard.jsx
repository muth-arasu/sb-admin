import React from 'react'
import Tile from './Tile'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard({data,setData}) {

    let dashBoardData = [
        {
            color: "primary",
            title: "Earnings (Monthly)",
            value: "$40000",
            icon: "fa-calender"
        },
        {
            color: "success",
            title: "Earnings (Annual)",
            value: "$215,000",
            icon: "fa-dollar-sign "
        },
        {
            isProgress: true,
            color: "info",
            title: "Tasks",
            value: "80",
            icon: "fa-clipboard-list"
        },
        {
            color: "warning",
            title: "Pending request",
            value: "18",
            icon: "fa-comments"
        }
    ]
    let handleDelete=(index)=>{
        let newArray =[...data];
        newArray.splice(index,1);
        setData(newArray);
    }
    let navigate = useNavigate();
    return (
        <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">

                {
                    dashBoardData.map((e, i) => {
                        return <Tile
                            color={e.color}
                            title={e.title}
                            icon={e.icon}
                            isProgress={e.isProgress}
                            value={e.value}
                            key={i}
                        />
                    })
                }
            </div>
            <div className="row">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Batch</th>
                            <th>Edit or Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {data.map((e,i)=>{
                                return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.batch}</td>
                                <td>
                                    <Button variant="primary" onClick={()=>{navigate(`/edit/${i}`)}}>Edit</Button>
                                    &nbsp;
                                    &nbsp;
                                    <Button variant="danger"onClick={()=>handleDelete(i)}>Delete</Button>
                                </td>
                                </tr>
                                
                               
                                
                            })}

                            
                        
                    </tbody>
                </Table>
            </div>
        </div>

    )
}
