import React, { useEffect, useState } from "react";
import "../styles/loginAppStyles.css"
import StudentMainPage from "./StudentMainPage";
import TeacherMainPage from "./TeacherMainPage";
const axios = require('axios');

const initailUserLogin = {
  userName: "",
  password: ""
}

const authentication = async (req) => {
  const res = await axios({
      method: 'post',
      url: 'https://sathish-online-exam-portal.herokuapp.com/api/getUser',
      headers: {
          'Content-Type': 'application/json'
      },
      data:JSON.stringify(req)
  });
  console.log('authentication',res)
  return res;
}

export default function LoginApp() {
  const [userLogins, setUserLogin] = useState(initailUserLogin);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [role,setRole] = useState("S");
  const [userInfo,setUserInfo] = useState({})

  const signInClick = async(e)=> {
    debugger;
    setIsBtnClicked(true);
    let isAuth  = {};
    await authentication(userLogins).then(response=>{
      isAuth = response?.data;
    });
    console.log('getUserResisAuthp', isAuth);
    if (isAuth?.code == "200") {
      setIsLoggedIn(true)
      setUserLogin(initailUserLogin);
      setRole(isAuth?.data[0].userType)
      setUserInfo(isAuth?.data[0]);
    }
    else {
      setIsLoggedIn(false)
    }
  }

  return (
    <div className="loginasdsad-app">
      <div className="text-center">
      {
        !isLoggedIn ? <main className="form-signin">
          <form className="hellosample">
            <img
              className="mb-4"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Madras_University_Seal.svg/1200px-Madras_University_Seal.svg.png"
              alt=""
              width={165}
              height={165}
            />
            <h1 className="h3 mb-3 fw-normal">Online Exam Portal</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                onChange={(e) => {
                  setUserLogin({ ...userLogins, userName: e.target.value });
                  setIsBtnClicked(false);
                }}
                value={userLogins.userName}
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                onChange={(e) => {
                  setUserLogin({ ...userLogins, password: e.target.value });
                  setIsBtnClicked(false);
                }}
                value={userLogins.password}

              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label style={{ color: isLoggedIn ? "green" : "red" }}>
                {isBtnClicked ? isLoggedIn ? "Loggedin" : "Invalid username or password" : ""}
              </label>
            </div>
            <input type="button" className="w-100 btn btn-lg btn-primary" value="Sign in" onClick={(e) => { 
              signInClick(e);
            }} />
            <p className="mt-5 mb-3 text-muted">© 2017–2022 </p>
          </form>
        </main> : role == "HM" ? <TeacherMainPage userInfo={userInfo}/> : <StudentMainPage userInfo={userInfo}/>
      }
    </div>
    </div>
  );
}
