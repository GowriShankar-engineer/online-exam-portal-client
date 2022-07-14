import React, { useEffect, useState } from 'react'
const axios = require('axios');

export default function CreateExam({ userInfo }) {
    debugger
    const [examInfo, setExamInfo] = useState({
        "examName": "",
        "subjectId": null,
        "courseId": "",
        "questions": [],
        "totalMarks": 50,
        "userAccountId": userInfo?.user?.userAccountId,
        "examDate": "",
        "resultDate": ""
    });

    useEffect(() => {
        console.log(examInfo)
    }, [examInfo])

    const [questions1, setQuestions1] = useState({
        "question": "",
        "option1": "",
        "option2": "",
        "option3": "",
        "option4": "",
        "answer": ""
    });

    const [questions2, setQuestions2] = useState({
        "question": "",
        "option1": "",
        "option2": "",
        "option3": "",
        "option4": "",
        "answer": ""
    });

    const [questions3, setQuestions3] = useState({
        "question": "",
        "option1": "",
        "option2": "",
        "option3": "",
        "option4": "",
        "answer": ""
    });

    const [questions4, setQuestions4] = useState({
        "question": "",
        "option1": "",
        "option2": "",
        "option3": "",
        "option4": "",
        "answer": ""
    });

    const [questions5, setQuestions5] = useState({
        "question": "",
        "option1": "",
        "option2": "",
        "option3": "",
        "option4": "",
        "answer": ""
    });

    const createExam = async (req1) => {
        const req = req1;
        req.courseId = req.courseId == "BSC" ? "1" : "2";
        req.subjectId = req.subjectId == "PYTHON" ? "1" : "2";
        const res = await axios({
            method: 'post',
            url: 'https://sathish-online-exam-portal.herokuapp.com/api/exam/create',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(req)
        });
        console.log('authentication', res)
        return res;
    }

    function onSubmitClick() {
        const req = examInfo;
        setExamInfo({ ...examInfo, questions: [questions1, questions2, questions3, questions4, questions5] });
        console.log({ questions: [questions1, questions2, questions3, questions4, questions5] })
        req.questions = [questions1, questions2, questions3, questions4, questions5];
        createExam(req).then(
            resp => {
                console.log('response34', resp);
            }
        )
        userInfo.setPage('d');
    }

    function onHandleChange(e) {
        setExamInfo({ ...examInfo, [e.target.id]: e.target.value });
    }

    function onHandleQuestionChange1(e) {
        setQuestions1({ ...questions1, [e.target.id]: e.target.value });
    }

    function onHandleQuestionChange2(e) {
        setQuestions2({ ...questions2, [e.target.id]: e.target.value });
    }

    function onHandleQuestionChange3(e) {
        setQuestions3({ ...questions3, [e.target.id]: e.target.value });
    }

    function onHandleQuestionChange4(e) {
        setQuestions4({ ...questions4, [e.target.id]: e.target.value });
    }

    function onHandleQuestionChange5(e) {
        setQuestions5({ ...questions5, [e.target.id]: e.target.value });
    }

    return (
        <div className="container">
            <main>
                <div className="py-5">
                    <img className="d-block mb-4 image-center-take1" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Madras_University_Seal.svg/1200px-Madras_University_Seal.svg.png" alt="" width={100} height={100} />
                    <h3>Madras University</h3>
                </div>
                <div className="row g-5 form-c">
                    <div className="col-md-7-col-lg-8">
                        <h4 className="mb-3">Create Exam</h4>
                        <br />
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="country" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Subject</label>
                                    <select className="form-select" id="courseId" value={examInfo.courseId} onChange={(e) => onHandleChange(e)} required>
                                        <option value>Select the Subject </option>
                                        <option key={1}>Python</option>
                                        <option key={2}>DSA</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="country" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Course</label>
                                    <select className="form-select" id="subjectId" value={examInfo.subjectId} onChange={(e) => onHandleChange(e)} required>
                                        <option value>Select the Course </option>
                                        <option key={1}>BSC</option>
                                        <option key={2}>MSC</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Exam Name</label>
                                    <input type="text" className="form-control" id="examName" value={examInfo.examName} onChange={(e) => onHandleChange(e)} placeholder='Exam Name' required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="col-12">
                                    <label htmlFor="Question-1" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Question 1</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">1</span>
                                        <input type="text" className="form-control" id="question" required value={questions1?.question} onChange={(e) => onHandleQuestionChange1(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="Option-1" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 1</label>
                                    <input type="text" className="form-control" id="option1" placeholder='Option1' value={questions1?.option1} onChange={(e) => onHandleQuestionChange1(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 2</label>
                                    <input type="text" className="form-control" id="option2" placeholder='Option2' value={questions1?.option2} onChange={(e) => onHandleQuestionChange1(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 3</label>
                                    <input type="text" className="form-control" id="option3" placeholder='Option3' value={questions1?.option3} onChange={(e) => onHandleQuestionChange1(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 4</label>
                                    <input type="text" className="form-control" id="option4" placeholder='Option4' value={questions1?.option4} onChange={(e) => onHandleQuestionChange1(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Question-1" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Answer</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">Answer</span>
                                        <input type="text" className="form-control" id="answer" required value={questions1?.answer} onChange={(e) => onHandleQuestionChange1(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Question 2</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">2</span>
                                        <input type="text" className="form-control" id="question" placeholder='Option2' value={questions2?.question} onChange={(e) => onHandleQuestionChange2(e)} required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 1</label>
                                    <input type="text" className="form-control" id="option1" placeholder='Option1' value={questions2?.option1} onChange={(e) => onHandleQuestionChange2(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 2</label>
                                    <input type="text" className="form-control" id="option2" placeholder='Option2' value={questions2?.option2} onChange={(e) => onHandleQuestionChange2(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 3</label>
                                    <input type="text" className="form-control" id="option3" placeholder='Option3' value={questions2?.option3} onChange={(e) => onHandleQuestionChange2(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 4</label>
                                    <input type="text" className="form-control" id="option4" placeholder='Option4' value={questions2?.option4} onChange={(e) => onHandleQuestionChange2(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Question-1" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Answer</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">Answer</span>
                                        <input type="text" className="form-control" id="answer" required value={questions2?.answer} onChange={(e) => onHandleQuestionChange2(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Question 3</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">3</span>
                                        <input type="text" className="form-control" id="question" placeholder='Option4' value={questions3?.question} onChange={(e) => onHandleQuestionChange3(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 1</label>
                                    <input type="text" className="form-control" id="option1" placeholder='Option1' value={questions3?.option1} onChange={(e) => onHandleQuestionChange3(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 2</label>
                                    <input type="text" className="form-control" id="option2" placeholder='Option2' value={questions3?.option2} onChange={(e) => onHandleQuestionChange3(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 3</label>
                                    <input type="text" className="form-control" id="option3" placeholder='Option3' value={questions3?.option3} onChange={(e) => onHandleQuestionChange3(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 4</label>
                                    <input type="text" className="form-control" id="option4" placeholder='Option4' value={questions3?.option4} onChange={(e) => onHandleQuestionChange3(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Question-1" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Answer</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">Answer</span>
                                        <input type="text" className="form-control" id="answer" required value={questions3?.answer} onChange={(e) => onHandleQuestionChange3(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Question 4</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">3</span>
                                        <input type="text" className="form-control" id="question" placeholder='Question' value={questions4?.question} onChange={(e) => onHandleQuestionChange4(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 1</label>
                                    <input type="text" className="form-control" id="option1" placeholder='Option1' value={questions4?.option1} onChange={(e) => onHandleQuestionChange4(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 2</label>
                                    <input type="text" className="form-control" id="option2" placeholder='Option2' value={questions4?.option2} onChange={(e) => onHandleQuestionChange4(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 3</label>
                                    <input type="text" className="form-control" id="option3" placeholder='Option3' value={questions4?.option3} onChange={(e) => onHandleQuestionChange4(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 4</label>
                                    <input type="text" className="form-control" id="option4" placeholder='Option4' value={questions4?.option4} onChange={(e) => onHandleQuestionChange4(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Question-1" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Answer</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">Answer</span>
                                        <input type="text" className="form-control" id="answer" required value={questions4?.answer} onChange={(e) => onHandleQuestionChange4(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Question 5</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">3</span>
                                        <input type="text" className="form-control" id="question" placeholder='Question' value={questions5?.question} onChange={(e) => onHandleQuestionChange5(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 1</label>
                                    <input type="text" className="form-control" id="option1" placeholder='Option1' value={questions5?.option1} onChange={(e) => onHandleQuestionChange5(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 2</label>
                                    <input type="text" className="form-control" id="option2" placeholder='Option2' value={questions5?.option2} onChange={(e) => onHandleQuestionChange5(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 3</label>
                                    <input type="text" className="form-control" id="option3" placeholder='Option3' value={questions5?.option3} onChange={(e) => onHandleQuestionChange5(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Option 4</label>
                                    <input type="text" className="form-control" id="option4" placeholder='Option4' value={questions5?.option4} onChange={(e) => onHandleQuestionChange5(e)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Question-1" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Answer</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">Answer</span>
                                        <input type="text" className="form-control" id="answer" required value={questions5?.answer} onChange={(e) => onHandleQuestionChange5(e)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Exam Date</label>
                                    <input type="date" className="form-control" id="examDate" placeholder='Option4' value={examInfo.examDate} onChange={(e) => onHandleChange(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label" style={{float: 'left', marginLeft:1, fontWeight:'bold', paddingTop:10, paddingLeft:5, paddingBottom:10 }}>Result Date</label>
                                    <input type="date" className="form-control" id="resultDate" placeholder='Option4' value={examInfo.resultDate} onChange={(e) => onHandleChange(e)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />
                            <input className="w-100 btn btn-primary btn-lg" type="button" value={'Create Exam'} onClick={() => onSubmitClick()} />
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
