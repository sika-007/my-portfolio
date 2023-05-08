import { Tilt } from "react-tilt";

const BallCard = ({ icon, padding, smHeight }) => {
  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="relative h-[100px] w-[100px]"
    >
        <div className={`${padding} rounded-xl bg-tertiary flex justify-center`}>
            <img src={icon} alt="tech" className={`${smHeight} w-4/5 object-contain`} loading="lazy" />
        </div>
    </Tilt>
  )
}

export default BallCard
