"use client";
import { useForm } from "react-hook-form";
import "@/css/Contact.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/mkgbrkjl", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
      } else {
        console.error("Formspree error:", await response.json());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="contact fit-body"
        initial={{ height: "1000px" }}
        animate={{ height: isSubmitSuccessful ? "500px" : "750px" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {isSubmitSuccessful ? (
          <motion.div
            className="message-success"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
          >
            <h1 className="main-heading">Message Sent Successfully!</h1>
            <p>
              We’ve received your message and will get back to you as soon as
              possible.
            </p>
          </motion.div>
        ) : (
          <>
            <h1>We’d love to hear from you</h1>
            <p className="subtext">
              Whether you have a question, a project idea, or just want to say
              hi — our inbox is always open.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="label-input">
                <label>Name</label>
                <input type="text" {...register("name")} />
              </div>

              <div className="label-input">
                <label>
                  Email<span className="required">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{1,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>

              <div className="label-input">
                <label>
                  Subject<span className="required">*</span>
                </label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <span className="error">{errors.subject.message}</span>
                )}
              </div>

              <div className="label-input">
                <label>
                  Message<span className="required">*</span>
                </label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <span className="error">{errors.message.message}</span>
                )}
              </div>

              <div className="required-fields">
                All <span className="required">*</span> fields are required
              </div>
              <button className="submit-button" type="submit">
                Send Message
              </button>
            </form>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
