import React, { useState, useEffect } from 'react';
const axios = require('axios');

const fetchData = async (userInfo) => {
    const request = {
        method: 'post',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/student/details',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(userInfo?.userType == 'S') {
        request.data = JSON.stringify({
            userAccountId:userInfo?.userAccountId
        })
    }
    const res = await axios(request);
    return res;
}

export default function StudentsList({ userInfo }) {
    const [students,setStudents]=useState([])

    useEffect(()=>{
        fetchData(userInfo).then( reports => {
            setStudents(reports?.data.data)
        })
    },[])

    return (
        <div><main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Students</h1>
                <span className='user sivsa12312'>{userInfo?.userName}</span>
                <span class="badge bg-success user">Head Master</span>
            </div>
            <h2>Students Information</h2>
            <div className="table-responsive">
                <table className="table table-m">
                    <thead>
                        <tr>
                            <th scope="col">#regNumber</th>
                            <th scope="col">studetName</th>
                            <th scope="col">course</th>
                            <th scope="col">contactNumber</th>
                            <th scope="col">emailId</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((value) => {
                            return <tr>
                                <td>{value.regNumber}</td>
                                <td>{value.studetName}</td>
                                <td>{value.course}</td>
                                <td>{value.contactNumber}</td>
                                <td>{value.emailId}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </main></div>
    )
}
