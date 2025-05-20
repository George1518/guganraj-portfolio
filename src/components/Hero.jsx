import React from 'react'
import img from '../assets/img.jpg'

function Hero() {
  return (
<>
 
    <div
        className="bg-black text-white text-center py-24" 
        id="home"
    >
      
        <img
            src={img}
            alt="my-pic"
            className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                Guganraj
            </span>
            , Front-End Developer
        </h1>
        
        <p className="mt-4 text-lg text-gray-300">
            Turning designs into reality with clean, maintainable, and scalable
            code.
        </p>

    
        <div className="mt-8 space-x-4 flex flex-row justify-center">
          
            <div
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
                <a href="#contacts">Contact me</a>
            </div>

            <a href="/resume.pdf" download="resume.pdf"
                className="bg-gradient-to-r from-red-600 to-yellow-400 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
                Resume
            </a>
        </div>
    </div>
</>

  )
}

export default Hero
