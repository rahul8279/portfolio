import React from "react";
import image from "../assets/Myimage.jpeg"
import { motion, stagger } from "framer-motion";

const Containervariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={image}
              alt="rahul"
              width={650}
              height={650}
              className="border border-stone-900 rounded-3xl"
              initial={{x:100,opacity:0}}
              animate ={{x:0,opacity:1}}
              transition={{duration:1,delay:1.5}}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={Containervariants}
          className="flex flex-col items-center lg:items-start mt-10">
            < motion.h2 
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              {" "}
              Rahul Singh
            </motion.h2>
            <motion.span 
            variants={childVariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer{" "}
            </motion.span>
            < motion.p 
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            Enthusiastic and detail-oriented Full Stack Developer with hands-on experience in developing scalable web applications using React.js, Node.js, Express.js, and MongoDB. Proficient in front-end design using HTML5, CSS3, Tailwind CSS, and JavaScript, along with backend API development, RESTful services, and database integration. Strong understanding of version control with Git/GitHub, deployment on Render, Vercel, and Cloudinary for file handling. Passionate about building responsive and user-friendly applications with a focus on clean code and continuous learning.
            </motion.p>
            <motion.a
            variants={childVariants}
              href="public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </ motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
