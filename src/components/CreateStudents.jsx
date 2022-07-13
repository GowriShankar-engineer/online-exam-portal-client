import React,{useState} from 'react';
import clientCall from '../client/client2';
const axios = require('axios');

const createStudent = async (req) => {
    console.log('req',req)
    const res = await axios({
        method: 'post',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/student/create',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(req)
    });
    console.log('Sucess Creaeted',res)
    return res;
}

export default function CreateStudents() {
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [courseId,setcourseId] = useState("");
    const [emailId,setemailId] = useState("");
    const [phoneNumber,setphoneNumber] = useState("");
    const [userName,setuserName] = useState("");
    const [password,setpassword] = useState("");


    const onSubmit = async() => {
        let resp1 = "";
        const req ={
            firstName,lastName,courseId: courseId == "BSC" ? 1 : 2,emailId,phoneNumber,userName,password
        }
        console.log(req);
        createStudent(req).then(
            resp => {
                console.log('response34',resp);
                resp1 = resp.data.code;
            }
        )
        console.log(resp1)
        return resp1;
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
                        <h4 className="mb-3">Create Student</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" value={firstName} required onChange={(e)=>setfirstName(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName"value={lastName} onChange={(e)=>setlastName(e.target.value)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="userName" value={userName} placeholder="Username" required onChange={(e)=>setuserName(e.target.value)}/>
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="emailId" value={emailId} placeholder="you@example.com" onChange={(e)=>setemailId(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} placeholder="1234 Main St" required onChange={(e)=>setphoneNumber(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Password <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="password" value={password} placeholder="Apartment or suite" onChange={(e)=>setpassword(e.target.value)}/>
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Course</label>
                                    <select className="form-select" id="courseId"  value={courseId} required onChange={(e)=>setcourseId(e.target.value)}>
                                        <option value>Choose...</option>
                                        <option key={1}>BSC</option>
                                        <option key={2}>MSC</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" >
                                        <option value>Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <input className="w-100 btn btn-primary btn-lg" value="Create Student" type="button" onClick={()=>onSubmit()}/>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
