import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>Introduction</p> */}
          <h2 className={`${styles.sectionHeadText} text-center`}>ABOUT ME.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto '
        >
          Programming, for me, is much more than writing code or implementing technical requirements. It is a thoughtful process that begins with a deep understanding of the problem, continues with informed decision-making, and results in creating clear, precise, and sustainable solutions. Every line of code represents a choice, and every choice impacts the stability, readability, and future growth of the system.
          <br />
          <br />
          I see code as a language that tells a story — a story of proper structure, smart simplicity, and attention to detail. High-quality code, in my view, is code that can be easily read, understood, and maintained long after it is written. It reflects organized thinking, professional responsibility, and consideration for other developers who will work with it in the future.
          <br />
          <br />
          Beyond solving the immediate problem, I place strong emphasis on a broad, system-level perspective. Effective programming requires anticipating future use cases, understanding business processes, and building solutions that serve people, teams, and organizations in a reliable and efficient way. For me, technical success is measured not only by what works, but by how well it continues to work over time.
          <br />
          <br />
          The words behind the code are reliability, collaboration, and a commitment to quality. I aspire to work as part of a professional team, contribute my skills and knowledge, learn from others, and grow in an environment that encourages excellence, shared thinking, and continuous development.
        </motion.p>
      </motion.div>

    </>
  );
};

export default SectionWrapper(About, "about");
