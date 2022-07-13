import React, { useEffect, useState } from 'react'
const axios = require('axios');

const fetchData = async (req) => {
    const res = await axios({
        method: 'post',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/exam/questions',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(req)
    })
    return res;
}

export default function TakeExam({ userInfo }) {
    debugger
    const [examInfo, setExamInfo] = useState([{
        "questionId": 3,
        "examName": "Python",
        "question": "How are you?",
        "subjectName": "Javascript",
        "option1": "Im Good",
        "option2": "Fine",
        "option3": "Im unlucky",
        "option4": "My bad",
        "answer": "Im unlucky"
    },
    {
        "questionId": 4,
        "examName": "UNIT TEST - 1",
        "question": "How old are you?",
        "subjectName": "Javascript",
        "option1": "18",
        "option2": "19",
        "option3": "20",
        "option4": "21",
        "answer": "Im unlucky"
    }]);

    useEffect(()=>{
        fetchData({
            "examId": "2"
        }).then( reports => {
            setExamInfo(reports?.data?.data)
        })
    },[])

    return (
        <div className="container">
            <main className='main-take-exam'>
                <div className="py-5">
                    <img className="d-block image-center-take" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Madras_University_Seal.svg/1200px-Madras_University_Seal.svg.png" alt="" width={100} height={100} />
                </div>
                <h3 className=''>Madras University</h3>
                <br />
                <h4 className="mb-3">{examInfo[0].examName} Exam</h4>
                <br />
                <div>
                    {examInfo.map((value, index) => {
                        return (
                            <div className='p-5 mb-4 bg-light rounded-3' key={index}>
                                <h4 className="mb-3 question-style">{value.question}</h4>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name={value.question + (index + 1)} type="radio" className="form-check-input" defaultChecked required />
                                        <label className="form-check-label answers-style" htmlFor="credit">{value.option1}</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name={value.question + (index + 1)} type="radio" className="form-check-input" required />
                                        <label className="form-check-label answers-style" htmlFor="debit">{value.option2}</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name={value.question + (index + 1)} type="radio" className="form-check-input" required />
                                        <label className="form-check-label answers-style" htmlFor="paypal">{value.option3}</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name={value.question + (index + 1)} type="radio" className="form-check-input" required />
                                        <label className="form-check-label answers-style" htmlFor="paypal">{value.option4}</label>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <hr className="my-4" />
                <input className="w-100 btn btn-primary btn-lg button-bottom-take" value="Create Student" type="button"/>
            </main>
        </div>
    )
}
