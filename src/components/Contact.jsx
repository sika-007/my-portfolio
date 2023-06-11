import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utilities/motion";


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => {
      return {...prev, [name]: value}
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (form.name && form.email && form.message) {
      setLoading(true);
      emailjs.send(
        "service_h03ku4d", 
        "template_ojr6l25", 
        {
          form_name: form.name,
          to_name: "Nsikak",
          from_email: form.email,
          to_email: "nsikakthomas102@gmail.com",
          message: form.message
        },
        "EujvNh3ADNbu1LKyV"
      )
        .then(() => {
          setLoading(false)
          alert("Thanks for reaching out! I will get back to you as soon as possible.")
          setForm({
            name: "",
            email: "",
            message: "",
          })
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert("Something went wrong. Please try again later.")
        })
    } else {
      setLoading(false)
      alert("Please fill in the details correctly")
    }
  }
 
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-">name: </span>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-">email: </span>
            <input 
              type="text" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-">message: </span>
            <textarea
              rows={7}
              name="message" 
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
           type="submit"
           onSubmit={handleSubmit}
           className="bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.25, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")