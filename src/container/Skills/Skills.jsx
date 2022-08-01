import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import {AppWrap, MotionWrap } from '../../wrapper';
import {urlFor, client} from '../../client';

import './Skills.scss'

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [fulldesc, setFulldesc] = useState({});

  const handleClick = (name) => {

    const c = structuredClone(fulldesc);
    c[name] = !c[name]
    for (let i in c) {
      if (!(i === name)) c[i] = false;
    }
    setFulldesc(c);
  }
  

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      
      let dict = {};
      data.sort((a,b) => b.year - a.year);
      
      for (let index = 0; index < data.length; index++) {
        for (let j = 0; j < data[index].works.length; j++) {
          if (data[index].works[j].desc.includes("breakline")) {
            data[index].works[j].desc = data[index].works[j].desc.split("breakline");
          } else {
            data[index].works[j].desc = [data[index].works[j].desc];
          }

          dict[data[index].works[j].name] = false;
        }
        
      }

      setFulldesc(dict);

      setExperience(data);
    })
    client.fetch(skillsQuery).then((data) => {
      const s = ["Python", "Tensorflow", "Git", "React", "HTML", "CSS", "Javascript", "C++"]

      let j = 0;
      for (let i = 0; j < data.length; i++) {
        if (data[i].name === s[j]) {
          const element = data[i];
          data[i] = data[j];
          data[j] = element;
          j++;
          i = 0;
        }
      }
      setSkills(data);
    })
  }, [])

  return (
    <>
      <h2 className="head-text"><span>Skills</span> and <span>Experience</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>


        <motion.div className="app__skills-exp"> 
          {experience?.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{opacity: [0,1]}}
                      transition={{duration: 0.5}}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                      onClick={() => handleClick(work.name)}
                    >
                      <div className="arrowcontainer">                      
                        <h4 className="bold-text">{work.name} </h4> 
                        <h4 className="rotation">{fulldesc[work.name] ? `❮` : `❯`}</h4>
                      </div>
                      <p className="p-text">{work.company} <span className="unbolded">{fulldesc[work.name] ? `(${work.timeframe})` : ``}</span></p>
                      {fulldesc[work.name] && work.desc.map((ind) => (
                        <>
                          <ul className="list">
                            <li className="p-text p-desc">{ind}</li>
                          </ul>
                        </>
                      ))}
                      {!fulldesc[work.name] && (
                        <>
                          <ul className="list">
                            <li className="p-text p-desc">{work.desc[0]}...</li>
                          </ul>
                        </>
                      )}

                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'experience', "app__whitebg");