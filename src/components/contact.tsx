import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// Initialize EmailJS
const EMAILJS_SERVICE_ID = "service_iocca89";
const EMAILJS_TEMPLATE_ID = "template_44dkv5a";
const EMAILJS_PUBLIC_KEY = "hpba2_SBo2wUFdO9Q";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);



  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validate form on submit
  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    type Current = {
      name: boolean;
      email: boolean;
      message: boolean;
    };

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current["name"] = false;
    } else {
      nameError.classList.add("hidden");
      current["name"] = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // valiate email
    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError.classList.remove("hidden");
      current["email"] = false;
    } else {
      emailError.classList.add("hidden");
      current["email"] = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current["message"] = false;
    } else {
      messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current],
    );
  };

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default page reload
    e.preventDefault();

    // validate form
    if (!validateForm()) return false;

    // show loader
    setLoading(true);

    // send email using EmailJS with sendForm
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully! ✅", {
            description: "Thank you for contacting me. I'll reply soon.",
          });
          // Reset form
          setForm({
            name: "",
            email: "",
            message: "",
          });
          // Clear form ref
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          setLoading(false);
          console.log("[CONTACT_ERROR]: ", error);
          toast.error("Failed to send message ❌", {
            description: "Please try again later.",
          });
        }
      );
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                title="What's your name?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Name */}
              <span className="text-red-400 mt-2 hidden" id="name-error">
                Invalid Name!
              </span>
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                title="What's your email?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Email */}
              <span className="text-red-400 mt-2 hidden" id="email-error">
                Invalid E-mail!
              </span>
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there!"
                title="What do you want to say?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60 disabled:resize-none"
              />

              {/* Invalid Message */}
              <span className="text-red-400 mt-2 hidden" id="message-error">
                Invalid Message!
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:bg-tertiary/20 disabled:text-white/60"
              disabled={loading}
              aria-disabled={loading}
            >
              {/* check loader state */}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 flex flex-col gap-8"
        >
          <div className="bg-black-100 p-8 rounded-2xl h-fit">
            <h4 className="text-white text-xl font-bold mb-4">Contact Information</h4>
            <div className="flex flex-col gap-4 text-secondary">
              <p className="text-sm">
                <span className="text-white font-semibold">Email:</span>
                <br />
                <a href="mailto:sakshimishra10112006@gmail.com" className="hover:text-white transition">
                  sakshimishra10112006@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <span className="text-white font-semibold">Phone:</span>
                <br />
                <a href="tel:+918218563995" className="hover:text-white transition">
                  +91-8218563995
                </a>
              </p>
            </div>
          </div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            {/* Contact info display placeholder */}
            <div className="w-full h-full bg-tertiary rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white font-bold text-[24px] mb-4">Let's Connect!</h3>
                <p className="text-secondary text-[16px]">
                  I'm always open to discussing new projects and opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
