import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion, useInView } from "framer-motion";
import toast from 'react-hot-toast';

const Spinner = () => {
  return (
    <>
    <div role="status">
    <svg aria-hidden="true" class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
    </>
  ) }

const ContactForm = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm('service_2fkgu7r', 'template_syszomo', formRef.current, 
        'rWgcg9XuPdZJ63VoK',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          formRef.current.reset()
          toast.success('Message sent successfully!');
          setIsSubmitting(false);
        }
        ).catch(

          (error) => {
            setIsSubmitting(false);
            console.log('FAILED...', error);
            formRef.current.reset()
            toast.error('Something went wrong!');
          }
        )
  };
  return (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
  
    <div id="Contact" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
      <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>

      {/* Contact Info */}
      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 text-2xl  border-1 p-2 rounded-full "> <MapPin size={20}/></span>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">No.10B, Thukha Street, Hlaing Township, Yangon.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 text-2xl border-1 p-2 rounded-full"><Phone size={20} /></span>
          <div>
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-gray-600">+959 421019280</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 text-2xl border-1 p-2 rounded-full"><Mail size={20}/></span>
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-gray-600">thaeoosupyae@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="hidden" name="to_name" value="Su Pyae" />
          <input
            type="text"
            name="from_name" 
            placeholder="Your Name"
            className="p-3 border rounded-md w-full"
            required
          />
          <input
            type="email"
            name="email_id"           
            placeholder="Your Email"
            className="p-3 border rounded-md w-full"
            required
          />
        </div>
        <input
          type="text"
          name="subject"        
          placeholder="Subject"
          className="p-3 border rounded-md w-full mb-4"
          required
        />
        <textarea
          name="message"         
          placeholder="Message"
          rows="5"
          className="p-3 border rounded-md w-full mb-4"
          required
        ></textarea>
        <button
          type="submit"
          className={`flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-md w-full md:w-auto mx-auto ${isSubmitting ? "cursor-not-allowed" : "hover:bg-yellow-600"}`}
          disabled={isSubmitting}
        >
          Send Message {isSubmitting && <Spinner/>}
        </button>
      </form>
    </div>
    </motion.div>
  );
};

export default ContactForm;
