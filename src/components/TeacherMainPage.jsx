import React, { useState } from 'react';
import "../styles/dashboardStyles1.css"
import CreateStudents from './CreateStudents';
import Dashboard from './Dashboard';
import StudentsList from './StudentsList';
import UpcomingExams from './UpcomingExams';
import CreateExam from './CreateExam';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineSpaceDashboard, MdCreate, MdOutlineNoteAdd, MdOutlineGridView } from 'react-icons/md'

export default function MainPage({ userInfo }) {
  const pages = {
    dashboard : "d",
    students : "s",
    createStudent : "cs",
    createExam : "ce",
    upcomingExams : "ue"
  }
  const [page,setPage] = useState(pages.dashboard);
  const [user,setUser] = useState(userInfo);

  return (
    <div className='dashboard-container'>
      <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Online Exam Portal</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#" onClick={()=>window.location.reload()}>Sign out</a>
            </div>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item" style={{textAlign: 'left'}}>
                    <a className="nav-link active" aria-current="page" href="#" onClick={()=> setPage('d')}>
                      <MdOutlineSpaceDashboard size={20} className="icon-style-css" />
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link" href="#" onClick={()=> setPage('s')} style={{textAlign: 'left', paddingLeft:20}}>
                      <CgProfile size={20} className="icon-style-css"/>
                      Students
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=> setPage('cs')} style={{textAlign: 'left', paddingLeft:20}}>
                      <MdCreate size={20} className="icon-style-css"/>
                      Create Students
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=> setPage('ce')} style={{textAlign: 'left', paddingLeft:20}}>
                      <MdOutlineNoteAdd size={20} className="icon-style-css"/>
                      Create Exams
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=> setPage('ue')} style={{textAlign: 'left', paddingLeft:20}} >
                      <MdOutlineGridView size={20} className="icon-style-css" />
                      Upcoming Exams
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
      {
        page == "d" ? <Dashboard userInfo={user} /> : page == "s" ? <StudentsList userInfo={user}/> : page == "cs" ? <CreateStudents userInfo={user}/> : page == "ue" ? <UpcomingExams userInfo={user} /> : page == "ce" ? <CreateExam userInfo={user}/> : null
      }
    </div>
  )
}
