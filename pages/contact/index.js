import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Circles from '../../components/Circles';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError(false);

    emailjs.sendForm(
      'service_qni2nxi', //  EmailJS service ID
      'template_l8gisdm', //  EmailJS template ID
      form.current,
      'hzFcr2N_tPYGP9zgK' //  EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      form.current.reset();
    })
    .catch((error) => {
      console.log(error.text);
      setError(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="bg-primary/60 h-full">
      <div className="h-full w-full bg-[#111823]">
        <Circles />
        <div className="container mx-auto flex flex-col justify-center items-center h-full px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[600px] bg-white/10 backdrop-blur-lg rounded-lg p-8"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Contact Me</h2>
            
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 text-green-500 p-3 rounded-md mb-6 text-center"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 text-red-500 p-3 rounded-md mb-6 text-center"
              >
                Failed to send message. Please try again later.
              </motion.div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff4654]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff4654]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff4654]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff4654]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isLoading
                    ? 'bg-[#ff4654]/50 cursor-not-allowed'
                    : 'bg-[#ff4654] hover:bg-[#ff4654]/90'
                } text-white`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;