import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/amey-dhamgunde/" target="_blank">
        <div>
            <BsLinkedin />
        </div>
      </a>
      <a href="https://www.facebook.com/amey.dhamgunde/" target="_blank">
        <div>
            <FaFacebookF />
        </div>
      </a>
      <a href="https://www.instagram.com/amznss/" target="_blank">
        <div>
            <BsInstagram />
        </div>
      </a>
    </div>
  )
}


export default SocialMedia