import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Social.scss"
const SocialTeam = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='front-page'>
          <div className='container'>
            <div className="team-name">
              <h1>Social Media Team</h1>
              <p className='info'>Social Media is a group of students responsible increasing the outreach on social media platforms.</p>
              <span>LEAD</span>
              <p><a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/yashlondhe-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><div className='border'><div className='lead-icon'><img src="./assets/teams/socialMedia/kedarnath.jpg" alt="head-img" /></div> <span>Yash Londhe</span></div> </a></p>
            </div>
            <img src="./assets/social-home.png" alt="home" className='homeImg' />
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
                <img className='team-img' src="./assets/teams/socialMedia/yash-londe.jpg" alt="" />
                <p className='m-2 p-2'><h4>Yash Londhe (Lead)</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/yashlondhe-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><button className='view-btn m-4'>LinkedIn</button></a>
                </div>

              </div>
              <div className=" col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/socialMedia/kedarnath.jpg" alt="" />
                <p className='m-2 p-2'><h4>Kedarnath Zunjare  </h4></p>
                <a href='https://www.linkedin.com/in/kedarnath-zunjare-71452b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><button className='view-btn m-5'>LinkedIn</button></a>
                

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/socialMedia/atharvk.jpeg" alt="" />  
                <p className=''><h4>Atharva Kale</h4></p>
                <div >
                <a href='http://www.linkedin.com/in/dhanashree-kesarkar' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>
              </div>
           
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/socialMedia/pawan-bhonde.jpg" alt="" />
                <p className='m-2 p-2'><h4>Pawan Bhodre</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/pawan-bondre-6262b1243' ><button className='view-btn m-5'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/socialMedia/rushikesh.jpg" alt="" />
                <p className='m-2 p-2'><h4>Rushikesh Mashalkar </h4></p>
                <div >
                <a href='https://www.linkedin.com/in/rushikeshmashalkar/' ><button className='view-btn m-4'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/socialMedia/shreya-ithape.jpg" alt="" />
                <p className='m-2 p-2'><h4>Shreya Ithape</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/shreya-ithape-495251229' ><button className='view-btn m-5'>LinkedIn</button></a>
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

export default SocialTeam