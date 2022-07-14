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

const postExam = async (req) => {
    const res = await axios({
        method: 'post',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/exam/submit',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(req)
    })
    return res;
}

export default function TakeExam({ userInfo }) {
    const [examInfo, setExamInfo] = useState([]);

    const [qas, setQas] = useState([]);
    const [request, setRequest] = useState({
        "userAccountId": userInfo?.userAccountId,
        "examId": userInfo?.examId,
        "answers": []
    })

    useEffect(() => {
        console.log('request',request)
        fetchData({
            "examId": userInfo?.examId
        }).then(reports => {
            setExamInfo(reports?.data?.data)
        });
        console.log(examInfo, 'examInfo');
        const a = qas;
        const quesArray = [];
        examInfo.forEach((value, index) => {
            const obj = {
                selected1: false,
                selected2: false,
                selected3: false,
                selected4: false
            }
            const quesObj = {
                "question": value.question,
                "answer": ""
            }
            a.push(obj);
            quesArray.push(quesObj)
        });
        setQas(a);
        setRequest({ ...request, answers: quesArray })
        console.log(a, qas, 'inital qas')
    }, []);

    const submitExam = () => {
        postExam(request).then(res => {
            console.log(res)
        })
    }

    const onRadioChange = (e, index) => {

        console.log('id', e.target.id, index, examInfo[index], e.target.id,'qas',qas,request.answers)
        const qasCopy = qas;
        const quesArray = request.answers
        console.log('qasCOpy', examInfo, quesArray, qasCopy);
        //
        const checkOption = e.target.id;
        console.log('selected', checkOption, index)

        if (checkOption == "option1") {
            qasCopy[index].selected1 = true;
            quesArray[index].answer = examInfo[index].option1;
        }
        else if (checkOption == "option2") {
            qasCopy[index].selected2 = true;
            quesArray[index].answer = examInfo[index].option2;
        }
        else if (checkOption == "option3") {
            qasCopy[index].selected3 = true;
            quesArray[index].answer = examInfo[index].option3;
        }
        else if (checkOption == "option4") {
            qasCopy[index].selected4 = true;
            quesArray[index].answer = examInfo[index].option4;
        }

        console.log('qasCOpy2', qasCopy, quesArray);
        setQas(qasCopy);
        setRequest({ ...request, answers: quesArray });
    }

    return (
        <div className="container">
            <main className='main-take-exam'>
                <div className="py-5">
                    <img className="d-block image-center-take" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Madras_University_Seal.svg/1200px-Madras_University_Seal.svg.png" alt="" width={100} height={100} />
                </div>
                <h3 className=''>Madras University</h3>
                <br />
                <h4 className="mb-3">{examInfo[0]?.examName} Exam</h4>
                <br />
                <div>
                    {examInfo.map((value, index) => {
                        return (
                            <div className='p-5 mb-4 bg-light rounded-3' key={index}>
                                <h4 className="mb-3 question-style">{value.question}</h4>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input id={"option1"} name={value.question} type="radio" className="form-check-input" value={value.answer} onChange={(e) => onRadioChange(e, index)} checked={qas[index]?.selected1} required />
                                        <label className="form-check-label answers-style" htmlFor="credit">{value.option1}</label>
                                    </div>
                                    <div className="form-check">
                                        <input id={"option2"} name={value.question} type="radio" className="form-check-input" value={value.answer} onChange={(e) => onRadioChange(e, index)} checked={qas[index]?.selected2} required />
                                        <label className="form-check-label answers-style" htmlFor="debit">{value.option2}</label>
                                    </div>
                                    <div className="form-check">
                                        <input id={"option3"} name={value.question} type="radio" className="form-check-input" value={value.answer} onChange={(e) => onRadioChange(e, index)} checked={qas[index]?.selected3} required />
                                        <label className="form-check-label answers-style" htmlFor="paypal">{value.option3}</label>
                                    </div>
                                    <div className="form-check">
                                        <input id={"option4"} name={value.question} type="radio" className="form-check-input" value={value.answer} onChange={(e) => onRadioChange(e, index)} checked={qas[index]?.selected4} required />
                                        <label className="form-check-label answers-style" htmlFor="paypal">{value.option4}</label>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <hr className="my-4" />
                <input className="w-100 btn btn-primary btn-lg button-bottom-take" onClick={() => submitExam()} value="Submit Exam" type="button" />
            </main>
        </div>
    )
}
