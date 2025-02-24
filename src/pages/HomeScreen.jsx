import React, { useEffect, useState } from 'react'
import computer from '../assets/img/computer.jpg'
import Profile from '../components/Profile';
import ScrollAnimation from 'react-animate-on-scroll';
const HomeScreen = () => {
     // Typing Animation Texts
     const roles = ["Web Designer", "Frontend Developer"];
     const [text, setText] = useState("");
     const [index, setIndex] = useState(0);
     const [charIndex, setCharIndex] = useState(0);
     const [isDeleting, setIsDeleting] = useState(false);
 
     useEffect(() => {
         const timeout = setTimeout(() => {
             if (!isDeleting && charIndex < roles[index].length) {
                 setText(prev => prev + roles[index][charIndex]);
                 setCharIndex(charIndex + 1);
             } else if (isDeleting && charIndex > 0) {
                 setText(prev => prev.slice(0, -1));
                 setCharIndex(charIndex - 1);
             } else if (!isDeleting && charIndex === roles[index].length) {
                 setTimeout(() => setIsDeleting(true), 1000);
             } else if (isDeleting && charIndex === 0) {
                 setIsDeleting(false);
                 setIndex((index + 1) % roles.length);
             }
         }, isDeleting ? 100 : 150);
         return () => clearTimeout(timeout);
     }, [charIndex, isDeleting, index, roles]);
  return (
    <div id='Home' className='bg-cyan-400  absolute w-full h-full ' style={{ backgroundImage: `url(${computer})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='bg-black  opacity-70 w-full h-full flex justify-center items-center'> 
            <div className='opacity-100 text-white'>
                {/* Typing Animation */}
                <ScrollAnimation  animateIn=" fadeInUp"
            duration={1}
            animateOnce={true}  >
                <h1 className='text-4xl md:text-6xl font-bold text-center'>I am Thae Oo Su Pyae Sone</h1>

                <div className="text-2xl md:text-4xl mt-3 text-center font-semibold text-white-400  ">
                    <span className="text-white">{text}</span>
                    <span className="animate-blink">|</span>
                </div>
            </ScrollAnimation>
            </div>
        </div>
        <ScrollAnimation  animateIn=" fadeInUp"
            duration={.5}
            animateOnce={true}  >

        <Profile/>
        </ScrollAnimation>
    </div>
  )
}

export default HomeScreen