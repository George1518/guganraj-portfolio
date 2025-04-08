import React from 'react'
import img from '../assets/img.jpg'

function About() {
  return (
    <>
    <div className='bg-black text-white py-20' id='about'>
      
        <div className='max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24'>
           
            <h2 className='text-4xl font-bold text-center mb-12'> About Me</h2>

          
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
              
                <img
                    src={img}
                    alt='aboutimage'
                    className='w-60 sm:w-72 h-72 sm:h-80 rounded object-cover mb-8 md:mb-0 transform transition-transform duration-300 hover:scale-105'
                />
                
              
                <div className='flex-1'>
                    <p className='text-lg mb-8'>
                        I'm a passionate Front-End Developer with expertise in building dynamic, responsive, and user-friendly websites. I specialize in React, Tailwind CSS, and modern web technologies to bring ideas to life with clean and maintainable code. I love turning complex problems into simple, beautiful interfaces that enhance user experience.
                    </p>

                 
                    <div className='space-y-4'>

                    
                        <div className='flex items-center'>
                            <label htmlFor='html' className='w-4/12 sm:w-2/12'>HTML</label>
                            <div className='flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden'>
                                <div className='bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full w-11/12 transform transition-transform duration-300 hover:scale-105'></div>
                            </div>
                        </div>

                       
                        <div className='flex items-center'>
                            <label htmlFor='tailwind' className='w-4/12 sm:w-2/12'>TAILWIND CSS</label>
                            <div className='flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden'>
                                <div className='bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full w-4/12 transform transition-transform duration-300 hover:scale-105'></div>
                            </div>
                        </div>

                        
                        <div className='flex items-center'>
                            <label htmlFor='jsandapi' className='w-4/12 sm:w-2/12'>JAVASCRIPT</label>
                            <div className='flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden'>
                                <div className='bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full w-8/12 transform transition-transform duration-300 hover:scale-105'></div>
                            </div>
                        </div>

                    
                        <div className='flex items-center'>
                            <label htmlFor='reactjs' className='w-4/12 sm:w-2/12'>REACT JS</label>
                            <div className='flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden'>
                                <div className='bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full w-7/12 transform transition-transform duration-300 hover:scale-105'></div>
                            </div>
                        </div>

                       
                        <div className='flex items-center'>
                            <label htmlFor='apis' className='w-4/12 sm:w-2/12'>APIs</label>
                            <div className='flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden'>
                                <div className='bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full w-1/12 transform transition-transform duration-300 hover:scale-105'></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</>


  )
}

export default About