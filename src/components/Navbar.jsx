import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { github, linkedin, pnglogo } from "../assets";

/* Font family used for logo is the megrim font */

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const linkElements = navLinks.map((link) => (
    <li key={link.id}>
      <a
        className={`${
          active === link.title ? "text-white" : "text-secondary"
        } sm:hover:text-white sm:text-[18px] font-medium sm:cursor-pointer font-poppins cursor-pointer`}
        href={`#${link.id}`}
        onClick={(e) => {
          e.stopPropagation();
          setActive(link.title);
          setToggle(false);
        }}
      >
        {link.title}
      </a>
    </li>
  ));

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center sm:gap-2 gap-5 sm:grow"
          to="/"
          onClick={() => {
            setActive("");
            scrollTo(0, 0);
          }}
        >
          <img
            src={pnglogo}
            alt="logo"
            loaing="lazy"
            className="h-6 object-contain"
          />
          <p className="text-white text-left text-[16px] font-light cursor-pointer">
            Nsikak <span className="sm:inline block">Thomas</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          <li>
            <a href="https://linkedin.com/in/dev-sika">
              <img
                src={linkedin}
                alt="linkedin"
                className="w-6 h-6 p-1 bg-white rounded-sm"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/sika-007">
              <img src={github} alt="github" className="w-7 h-7" />
            </a>
          </li>
          {linkElements}
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <div
            className="flex flex-col gap-1 items-end"
            onClick={() => setToggle((prev) => !prev)}
          >
            <div
              className={`${
                toggle ? "w-6" : "w-5"
              } h-[3px] origin-center bg-white ${
                toggle && "rotate-45 translate-y-[7px]"
              } transition-all duration-300`}
            />
            <div
              className={`w-4 h-[3px] bg-white ${
                toggle && "opacity-0 rotate-45"
              } transition-all duration-300`}
            />
            <div
              className={`${
                toggle ? "w-6" : "w-3"
              } h-[3px] origin-center bg-white ${
                toggle && "-rotate-45 -translate-y-[7px]"
              } transition-all duration-300`}
            />
          </div>
          <div
            className={`${
              toggle ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
            } transition-all flex p-6 black-gradient absolute top-20 right-0 my-2 mx-4 min-w-[140px] z-10 rounded-sm`}
          >
            <ul className="list-none flex flex-col items-start gap-4">
              {linkElements}
              <li>
                <a
                  className="flex items-center flex-row-reverse gap-1"
                  href="https://github.com/sika-007"
                >
                  <img src={github} alt="github" className="w-7 h-7" />
                  <p className=" text-secondary font-poppins sm:hover:text-white sm:text-[18px] font-medium">
                    Github
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center flex-row-reverse gap-1"
                  href="https://linkedin.com/in/dev-sika"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="bg-white w-6 h-6 p-1 rounded-sm"
                  />
                  <p className=" text-secondary font-poppins sm:hover:text-white sm:text-[18px] font-medium">
                    LinkedIn
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
