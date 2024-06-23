import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Design.scss"
const SocialTeam = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='front-page'>
          <div className='container'>
            <div className="team-name">
              <h1>Design Team</h1>
              <p className='info'>Design team is a group of students responsible planning and crafting of flyers and banners for ACM-RSCOE Chapter.</p>
              <span>LEAD</span>
              <p><a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/yashlondhe-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><div className='border'><div className='lead-icon'><img src="./assets/teams/design/Dheemahi.png" alt="head-img" /></div> <span>Dheemahi Gupta </span></div> </a></p>
            </div>
            <img src="./assets/design-home.png" alt="home" className='homeImg' />
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
                <img className='team-img' src="./assets/teams/design/Dheemahi.png" alt="" />
                <p className='m-2 p-2'><h4>Dheemahi Gupta (Lead)</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/dheemahi-gupta-89774424b' ><button className='view-btn'>LinkedIn</button></a>
                </div>

              </div>
              <div className=" col-lg-4 col-md-4 col-sm cards">
                <img className='team-img object-contain w-[80px]' src="./assets/teams/design/Prajakta-Satav.png" alt="" />
                <p className='m-2 p-2'><h4>Prajakta Satav </h4></p>
                <a href='https://www.linkedin.com/in/prajakta-satav-630823257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><button className='view-btn'>LinkedIn</button></a>
                

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/design/Tanvi-Kulkarni.jpg" alt="" />  
                <p className=''><h4>Tanvi Kulkarni</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/tanveekulkarni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><button className='view-btn'>LinkedIn</button></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/socialMedia/kaniska-kulkarni.jpg" alt="" />
                <p className='m-2 p-2'><h4>Kaniska Vishwasroa</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/kanishka-vishwasrao-0510b6214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_mediu' ><button className='view-btn'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/design/Ajay-Kamble.jpg" alt="" />
                <p className='m-2 p-2'><h4>Ajay Kamble</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/ajay-kamble-84945924b' ><button className='view-btn'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/design/Sarthak-Mhase.jpeg" alt="" />
                <p className='m-2 p-2'><h4>Sarthak Mhase</h4></p>
                <div >
                <a href='http://www.linkedin.com/in/sarthak-mhase-275767256' ><button className='view-btn'>LinkedIn</button></a>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/teams/design/Sushant-Bhoyar.jpg" alt="" />
                <p className='m-2 p-2'><h4>Sushant Bhoyar</h4></p>
                <div >
                <a href='https://www.linkedin.com/in/sushant-bhoyar-41329928b' ><button className='view-btn'>LinkedIn</button></a>
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