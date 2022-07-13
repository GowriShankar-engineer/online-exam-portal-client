import React, { useState, useEffect } from 'react';
import TakeExam from './TakeExam';
const axios = require('axios');

const fetchData = async () => {

    const request = {
        method: 'get',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/exam/details',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = await axios(request);
    return res;
}

const getExamQuestions = async (req) => {
    const request = {
        method: 'post',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/exam/questions',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(req)
    }
    const res = await axios(request);
    return res;
}

export default function UpcomingExams({ userInfo }) {
    const [exams, setexams] = useState([]);
    const [examId, setExamId] = useState(0);
    const [btnClicked,setBtnClicked] = useState(false);
    const [questions,setQuestions] = useState([])

    const takeExam = (index) => {
        const examId = exams[index].examNumber;
        setExamId(examId);
        setBtnClicked(true);
        getExamQuestions().then(reports => {
            setQuestions(reports?.data?.data)
        })
    }

    useEffect(() => {
        fetchData().then(reports => {
            setexams(reports?.data?.data)
        })
    }, [])

    return (
        <div>
            {examId == 0 && !btnClicked ?
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Madras University</h1><span className='user sivsa'>{userInfo?.userName}</span>
                        <span class="badge bg-success user">{ userInfo?.userType == "HM" ? 'Head Master' : 'Student'}</span>
                    </div>
                    <h3>Assigned Exams</h3>
                    <br />
                    <div className="table-responsive">
                        {
                            exams.map((value,index) => {
                                return <div class="p-5 mb-4 bg-light rounded-3">
                                    <div class="container-fluid py-10">
                                        <h1 class="display-10">{value?.subjectName}</h1>
                                        <p class="col-md-8 fs-8 upcoming-exams">Using a {value?.examName} series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                                        { userInfo?.userType == "HM" ? null : <input type="button" class="btn btn-primary btn-m" onClick={()=>takeExam(index)}  value={'Take Exam'} />}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </main> : <TakeExam/>}
        </div>
    )
}
