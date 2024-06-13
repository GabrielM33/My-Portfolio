import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projects2, projects3, projects4, projects5 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  size, // Add the size prop
}) => {
  const cardWidth = size === "small" ? "sm:w-[240px]" : "sm:w-[360px]";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl ${cardWidth} w-full`}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectCard2 = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  size, // Add the size prop
}) => {
  const cardWidth = size === "small" ? "sm:w-[205px]" : "sm:w-[360px]";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl ${cardWidth} w-full`}
      >
        <div className='relative w-full h-[115px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          {/*<p className='mt-2 text-secondary text-[14px]'>{description}</p>8?}*/}
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <motion.div variants={textVariant()} >
        <h2 className={`mt-12 ${styles.sectionHeadText}`} style={{ fontSize: '40px' }}></h2>
      </motion.div>
      <div className='mt-2 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <>
        <motion.div>
          <h2 className={`mt-12 ${styles.sectionHeadText}`} style={{ fontSize: '40px' }}>More Projects.</h2>
        </motion.div>
        <div className='mt-2 flex flex-wrap gap-7'>
          {projects2.map((project, index) => (
            <ProjectCard2 key={`project-${index}`} index={index} size="small" {...project} />
          ))}
          {/*
           {projects3.map((project, index) => (
           <ProjectCard2 key={`project-${index}`} index={index} size="small" {...project} />
          ))}
            {projects4.map((project, index) => (
              <ProjectCard2 key={`project-${index}`} index={index} size="small" {...project} />
          ))}
             {projects5.map((project, index) => (
              <ProjectCard2 key={`project-${index}`} index={index} size="small" {...project} />
          ))}
            */}
        </div>
      </>
    </>
    
  );
};

export default SectionWrapper(Works, "");
