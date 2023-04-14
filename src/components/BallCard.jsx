import { Tilt } from "react-tilt";

const BallCard = ({ icon }) => {
  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="relative h-[100px] w-[100px]"
    >
        <div className=" rounded-xl bg-tertiary flex justify-center">
            <img src={icon} alt="tech" className="w-4/5" />
        </div>
    </Tilt>
  )
}

export default BallCard
