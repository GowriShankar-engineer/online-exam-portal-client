import React, { useState } from 'react';
import "../styles/dashboardStyles1.css"
import Dashboard from './Dashboard';
import UpcomingExams from './UpcomingExams';
import { MdOutlineSpaceDashboard, MdOutlineGridView } from 'react-icons/md'

export default function StudentMainPage({ userInfo }) {
  const pages = {
    dashboard : "d",
    students : "s",
    createStudent : "cs",
    createExam : "ce",
    upcomingExams : "ue"
  }
  const [page,setPage] = useState(pages.dashboard);

  return (
    <div className='dashboard-container'>
      <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">🌀 Online Exam Portal</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-4" href="#" style={{ color:"white", fontWeight:"inherit" }} onClick={()=>window.location.reload()}>Sign out</a>
            </div>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" onClick={()=> setPage('d')} style={{textAlign: 'left', paddingLeft:20}}>
                    <MdOutlineSpaceDashboard size={20} className="icon-style-css" />
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=> setPage('er')} style={{textAlign: 'left', paddingLeft:20}}>
                    <MdOutlineGridView size={20} className="icon-style-css" />
                      Exam Reports
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
      {
        page == "d" ? <UpcomingExams userInfo={userInfo} />  : page == "er" ? <Dashboard userInfo={userInfo}/> : null
      }
    </div>
  )
}
