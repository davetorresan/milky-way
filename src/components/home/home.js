import './home.css'
import Fade, { Zoom } from 'react-reveal'
import Earth from './img/world.mp4'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const Home = () => {
 
  

  return(
    <main className="page-container">
      
      <section className="cover">
        <div className="left">
          <p>
            We made the Italy future
          </p>
        </div>

        <div className="center">
          <Fade>
            <div className="title">
              <h1>Milky Way</h1>
            </div>
            <div className="subtitle">
              <h3>The first italian non-profit space program</h3>
            </div>
          </Fade>
        </div>

        <div className="right">
          <div className="content">
            <p>Follow us on&nbsp; <i className="lni lni-minus"></i></p>
            <div className="socials">
              <i className="lni lni-linkedin"></i>
              <i className="lni lni-twitter"></i>
              <i className="lni lni-instagram"></i>
              <i className="lni lni-github"></i>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <Fade>
          <div className="blocks">
            <div className="block-left">
              <div className="title">
                <h2>Our Concept</h2>
              </div>
              <div className="text">

              </div>
            </div>
            <div className="block-right">
              <div className="title">
                <h2>Our Teams</h2>
              </div>
              <div className="text">

              </div>
            </div>
          </div>
        </Fade>
      </div>

    </main>
  )
}

export default Home;
