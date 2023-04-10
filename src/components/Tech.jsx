import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../HOC"
import { technologies } from "../constants"

const Tech = () => {

  const techModels =  technologies.map((technology, index) => (
    <div className="w-28 h-28 flex flex-col items-center" key={index}>
      <BallCanvas icon={technology.icon}/>
      <p>{technology.name}</p>
    </div>
  ))

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {techModels}
    </div>
  )
}

export default SectionWrapper(Tech, "")