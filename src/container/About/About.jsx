import { motion } from 'framer-motion';
import React, {useState, useEffect } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';

import { urlFor, client} from '../../client'


import './About.scss'

const About = () => {

  const [abouts, setAbouts] = useState([]);
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const awardsQuery = '*[_type == "awards"]'

    client.fetch(query).then((data) => {

      setAbouts(data);
    
    })

    client.fetch(awardsQuery).then((data) => {

      setAwards(data);
    
    })


  }, [])
  
  return (
    <>
      <h2 className="head-text"><span>Education</span> and <span>Awards</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title+index}
          
          >

            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <h2 className="p-text" style={{marginTop: 10}}>{about.description}</h2>
            <h2 className="p-text" style={{marginTop: 10}}>{about.years}</h2>
            <h2 className="p-text" style={{marginTop: 10}}>{about.awards}</h2>
          </motion.div>
        ))}

        <span className="vertical-line" />

        {awards.map((award, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={award.title+index}
          
          >

            <img src={urlFor(award.imgUrl)} alt={award.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{award.title}</h2>
            <h2 className="p-text" style={{marginTop: 10}}>{award.description}</h2>
            <h2 className="p-text" style={{marginTop: 10}}>{award.awards}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'education', "app__whitebg")