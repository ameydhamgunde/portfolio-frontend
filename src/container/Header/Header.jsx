import React from 'react'
import {motion } from 'framer-motion';
import {images } from '../../constants';

import { AppWrap } from '../../wrapper';

import './Header.scss'

const scaleVariants ={
  whileInView: {
    scale: [0,1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}

        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">

            <span>👋</span>
            <div style={{marginLeft:20}} className="intro">
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Amey</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Machine Learning Student</p>
            <p className="p-text">Engineering Science 2T4 @ UofT</p>
            <p> <br/></p>
            <p className="p-text">Seeking 12-16 month internship <br />opportunities from May 2023!</p>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Contact:</p>
            <p className='p-text'><a href="tel:+1(647)642-5991">+1 (647) 642-5991</a></p>
            <p className="p-text"><a href="mailto:ameydhamgunde@gmail.com">ameydhamgunde@gmail.com</a></p>
            <p> <br/></p>
            <p className="p-text">Check out my <a href="">resume</a>!</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}

        className="app__header-img">
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}

          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.tensorflow, images.python, images.javascript].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}

      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')