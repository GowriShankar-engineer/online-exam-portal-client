import React, { useEffect, useState } from 'react'
const axios = require('axios');

const fetchData = async (userInfo) => {
    const req = {
        method: 'post',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/exam/reports',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(userInfo?.userType == "S") {
        req.data = JSON.stringify({
            userAccountId: userInfo?.userAccountId
        })
    }
    const res = await axios(req)
    
    return res;
}


export default function Dashboard({ userInfo }) {
    const [examReports, setExamReports] = useState([]);

    useEffect(()=>{
        fetchData(userInfo).then( reports => {
            setExamReports(reports?.data.data)
        })
    },[])

    return (
        <div><main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Madras University</h1><span className='user sivsa'>{userInfo?.userName}</span>
                <span class="badge bg-success user">{ userInfo?.userType == "HM" ? 'Head Master' : 'Student'}</span>
            </div>
            <h2>Students Exam Reports</h2>
            <br />
            <div className="table-responsive">
                <table className="table table-m">
                    <thead>
                        <tr>
                            <th scope="col">ExamCode</th>
                            <th scope="col">examName</th>
                            <th scope="col">course</th>
                            <th scope="col">subject</th>
                            <th scope="col">totalMarks</th>
                            <th scope="col">marksScored</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            examReports.map((value) => {
                                return <tr key={value.examId}>
                                    <td>{value.examId}</td>
                                    <td>{value.examName}</td>
                                    <td>{value.course}</td>
                                    <td>{value.subject}</td>
                                    <td>{value.totalMarks}</td>
                                    <td>{value.marksScored}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </main></div>
    )
}
