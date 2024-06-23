import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './Documentation.scss'

const DocumentationTeam = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='front-page'>
      <div className='container'>
            <div className="team-name">
              <h2>Documentation Team</h2>
              <p className='info'>Documentation team is a group of students responsible for documentation of important events, regiration of events, formating official letters.</p>
              <span>LEAD</span>
              <p><a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/pratik-katkar-74609a24a" target="_blank"><div className='border'><div className='lead-icon'><img src="./assets/teams/documentation/pratik-2.jpg" alt="head-img" /></div> <span>Pratik Katkar</span></div> </a></p>
            </div>
            <img src="./assets/doc-home.png" alt="home" className='homeImg' />
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
                <img className='team-img' src="./assets/teams/documentation/pratik-2.jpg" alt="" />
                <p className='m-2 p-2'><h4>Pratik katkar (Lead)</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/pratik-katkar-74609a24a' ><button className='view-btn m-4'>LinkedIn</button></a>
                </div>

              </div>
              <div className=" col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/documentation/Aarti-Kalpure.jpg" alt="" />
                <p className='m-2 p-2'><h4>Aarti Kalhapure</h4></p>
                <a href='https://www.linkedin.com/in/arti-kalhapure-93869424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><button className='view-btn m-5'>LinkedIn</button></a>
                
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/documentation/niraj.jpeg" alt="" />  
                <p className=''><h4>Niraj Dhakulkar</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/niraj-dhakulkar-799871259/' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/documentation/anis-shake.jpg" alt="" />
                <p className='m-2 p-2'><h4>Anis Shaikh</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/anis-shaikh-a87496240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/documentation/homesh-patil.jpg" alt="" />
                <p className='m-2 p-2'><h4>Homesh Patil</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/homesh-patil-a8410a252' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/documentation/shreya-patil.jpeg" alt="" />
                <p className='m-2 p-2'><h4>Shreya Patil</h4></p>
                <div >
                <a href='http://www.linkedin.com/in/shreya-patil-97b3a1257' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </section>
      </section> 
      <Footer />
    </div>
  )
}

export default DocumentationTeam