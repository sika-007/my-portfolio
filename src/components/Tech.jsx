import { useEffect, useState } from "react"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../HOC"
import { technologies } from "../constants"
import BallCard from "./BallCard"

const Tech = () => {

  const [canCarryModels, setCanCarryModels] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    setCanCarryModels(!mediaQuery.matches);

    function handleMQChange(e) {
      setCanCarryModels(!e.matches)
    }

    mediaQuery.addEventListener('change', handleMQChange)

    return () => mediaQuery.removeEventListener("change", handleMQChange)
  }, [])

  const techModels = technologies.map((technology, index) => (
    <div className="w-28 h-28 flex flex-col items-center" key={index}>
      <BallCanvas icon={technology.icon} />
      <p>{technology.name}</p>
    </div>
  ))

  const techCards = technologies.map((technology, index) => {

    if (index === 11 || index === 13) {
      return (
        <div className="w-28 h-28 flex flex-col items-center" key={index}>
          <BallCard padding="py-2" smHeight="h-16" icon={technology.icon} />
          <p>{technology.name}</p>
        </div>
      )
    } else {
      return (
        <div className="w-28 h-28 flex flex-col items-center" key={index}>
          <BallCard icon={technology.icon} />
          <p>{technology.name}</p>
        </div>
      )
    }

  })

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {canCarryModels ? techModels : techCards}
    </div>
  )
}

export default SectionWrapper(Tech, "")