import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import {Link} from "react-router-dom";
import "./Web.scss"
const WebTeam = () => {
  return (
    <div >
      <Navbar />
      <div className="home">
        <section className='front-page'>
          <div className='container'>
            <div className="team-name">
              <h1>WEB TEAM</h1>
              <p className='info'>Web team is a group of persons responsible for development of web site.</p>
              <span>LEAD</span>
              <p><a style={{ textDecoration: "none" }} href="https://github.com/abhishekrd" target="_blank"><div className='border'><div className='lead-icon'><img src="./assets/teams/webteam/abhishek-bonde.png" alt="head-img" /></div> <span> Abhishek Bonde</span></div> </a></p>
            </div>
            <img src="./assets/web-home.png" alt="home" className='homeImg' />
          </div>
        </section>
        <section className='team-mem-card'>

          <section className="teams">
        <div className="container">
          <div className='title'>
             Team Members
            <hr />
          </div>
          <div className='cardContainer'>
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/webteam/abhishek-bonde.png" alt="" />
                <p className='m-2 p-2'><h4>Abhishek Bonde (Lead)</h4></p>
                <div >
                <div className='btnn'><a href='' ><button className='view-btn'>LinkedIn</button></a></div>
                </div>

              </div>
              <div className=" col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/webteam/Yashini-Pardeshi.jpg" alt="" />
                <p className='m-3 p-2'><h4>Yashini Pardeshi</h4></p>
                <a href='https://www.linkedin.com/in/yashini-pardeshi-608657211/' ><button className='view-btn m-5'>LinkedIn</button></a>
              </div>

              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/webteam/Dhanashree.jpg" alt="" />  
                <p className=''><h4>Dhanashree Kesarkar</h4></p>
                <div >
                <a href='http://www.linkedin.com/in/dhanashree-kesarkar' ><button className='view-btn m-4'>LinkedIn</button></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/webteam/Samarth-Hapse.png" alt="" />
                <p className='m-2 p-2'><h4>Samarth Hapse</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/samarth-hapse-ab9569256/' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/webteam/tanmay.jpg" alt="" />
                <p className='m-2 p-2'><h4>Tanmay Kumbhar</h4></p>
                <div >
                <a href='' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default WebTeam

