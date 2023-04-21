import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../HOC";
import { textVariant } from "../utilities/motion";

const ExperienceCard = ({ experience }) => {

  const experienceListElements = experience.points.map((point, index) => (
    <li key={index} className="text-white text-[14px] pl-1 tracking-wider">{point}</li>
  ))


  return(
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color:"white" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, overflow: "hidden" }}
      icon={<div className="flex justify-center items-center h-full w-full"><img className="w-[80%] absolute h-[80%] object-contain" src={experience.icon} alt={experience.company} loading="lazy"/></div>}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experienceListElements}
      </ul>
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