import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../HOC";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utilities/motion";
import { github, eyeSolid } from "../assets";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_site_link }) => {

  const tagElements = tags.map(tag => (
    <p key={tag.name} className={`text-14px ${tag.color}`}>
      #{tag.name}
    </p>
  ))

  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-2 rounded-2xl xs:w-[360px] w-full sm:h-[450px] flex flex-col sm:justify-between"
      >
        <div>
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="github" className="w-[80%] h-[80%] object-contain" />
              </div>
            </div>

            <div className="absolute inset-0 flex sjustify-end m-3 right-11 card-img_hover">
              <div
                onClick={() => window.open(live_site_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={eyeSolid} alt="eye" className="w-[80%] h-[80%] object-contain" />
              </div>
            </div>

          </div>

          <div className="mt-4">
            <h3 className="text-white font-bold text-[24px] mb-2">{name}</h3>
            <p className="text-secondary text-[14px]">{description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {tagElements}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

  const projectElements = projects.map((project, index) => (
    <ProjectCard
      key={`projext-${index}`}
      index={index}
      {...project}
    />
  )) 

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These are a few projects to showcase my skills and experience. Each project is briefly descirbed with links to its source code and a live demo. These projects are a testimony of my resourcefulness and tenacity in solving problems and coming up with new ways of implementing solutions where needed.
        </motion.p>
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{once: true}} className="mt-20 flex flex-wrap gap-7 items-stretch h-full">
        {projectElements}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "")