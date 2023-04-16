import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utilities/motion.js";
import { SectionWrapper } from "../HOC";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.4 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-center text-white text-[20px] font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  const serviceElements = services.map((service, index) => (
    <ServiceCard
      key={service.title}
      index={index}
      title={service.title}
      icon={service.icon}
    />
  ))


  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1)}>
        I'm a talented Frontend Engineer with extensive knowledge of HTML5, CSS3, Node.js, JavaScript(ES6), react.js, and tools such as TypeScript, Material UI, SASS/SCSS, tailwindcss, version control (Git and GitHub) and so much more. I've had proven successes in developing and deploying web applications and websites while being highly organized, detail-oriented and open to new ideas. I would absolutely love to be part of a team of talented people whom I can bring value to and also learn from as we build the web applications of the future.
      </motion.p>

      <motion.div initial="hidden" viewport={{once: true}} whileInView="show" className="mt-20 flex flex-wrap gap-10">
        {serviceElements}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about")