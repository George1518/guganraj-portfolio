import React from 'react'
import dummy from '../assets/dummy.png'

function projects() {
  return (
    <>
    <div className="bg-black text-white py-20" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
  
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="flex flex-col space-y-8 md:flex-row items-center justify-center md:space-x-12 md:space-y-0">
          {/* Project 1 */}
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src={dummy}
                alt="Project 1"
                className="aspect-video rounded-lg object-cover mb-4 transform transition duration-300 hover:scale-105"
              />
            </a>
            <p className="text-xl md:text-2xl font-bold mt-4">Project - 1</p>
          </div>
  
          {/* Project 2 */}
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src={dummy}
                alt="Project 2"
                className="aspect-video rounded-lg object-cover mb-4 transform transition duration-300 hover:scale-105"
              />
            </a>
            <p className="text-xl md:text-2xl font-bold mt-4">Project - 2</p>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default projects