import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from '../style';
import { navLinks } from '../constants';
import {pnglogo, menu, close } from '../assets';

/* Font family used for logo is the megrim font */

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  const linkElements = navLinks.map(link => (
    <li key={link.id}>
      <Link className={`${active === link.title ? "text-white" : "text-secondary"} sm:hover:text-white sm:text-[18px] font-medium sm:cursor-pointer font-poppins cursor-pointer`} to={`/${link.id}`} onClick={(e) => {
        e.stopPropagation()
        setActive(link.title)
        setToggle(false)
      }}>
        {link.title}
      </Link>
    </li>
  ))

  console.log(active, toggle)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link className='flex items-center sm:gap-2 gap-5 sm:grow' to="/" onClick={() => {
          setActive("")
          scrollTo(0, 0)
          }}>
            <img src={pnglogo} alt="logo" className="h-6 object-contain" />
            <p className='text-white text-left text-[16px] font-light cursor-pointer'>Nsikak <span className='sm:inline block'>Thomas</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {linkElements}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className='flex flex-col gap-1 items-end' onClick={(() => setToggle(prev => !prev))}>
            <div className={`${toggle ? "w-6" : "w-5"} h-[3px] origin-center bg-white ${toggle && "rotate-45 translate-y-[7px]"} transition-all duration-300`} />
            <div className={`w-4 h-[3px] bg-white ${toggle && "opacity-0 rotate-45"} transition-all duration-300`} />
            <div className={`${toggle ? "w-6" : "w-3"} h-[3px] origin-center bg-white ${toggle && "-rotate-45 -translate-y-[7px]"} transition-all duration-300`} />
          </div>
          <div className={`${toggle ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"} transition-all flex p-6 black-gradient absolute top-20 right-0 my-2 mx-4 min-w-[140px] z-10 rounded-sm`}>
            <ul className='list-none flex flex-col items-start gap-4'>
              {linkElements}
            </ul> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar