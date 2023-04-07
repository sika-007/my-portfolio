import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../HOC";
import { staggerContainer, textVariant } from "../utilities/motion";

const ExperienceCard = ({ experience }) => {

  return(
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color:"white" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={<img className="w-[60%] h-[60%] object-cover" src={experience.icon} alt={experience.company}></img>}
    >
      <div>
        <h3 className="teat-white text-[24px] font-bold">{experience.title}</h3>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {

  const experienceElements = experiences.map((experience, index) => (
    <ExperienceCard key={index} experience={experience}/>
  ))

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My journey so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experienceElements}      
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")