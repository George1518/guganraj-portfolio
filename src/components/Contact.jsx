import React from 'react'
import fb from '../assets/fb.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

function Contact() {
  return (
    <>
    <div className="bg-black mx-auto text-white py-16" id="contacts">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
  
      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="text-center">
          <a href="https://www.linkedin.com/in/gugan-raj-5b304a343" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-20 mx-auto transform transition duration-300 hover:scale-110" />
          </a>
          <p className="mt-2">LinkedIn</p>
        </div>
  
        <div className="text-center">
          <a href="https://www.instagram.com/george_grj" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-20 mx-auto transform transition duration-300 hover:scale-110" />
          </a>
          <p className="mt-2">Instagram</p>
        </div>
  
        <div className="text-center">
          <a href="https://github.com/George1518" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-20 mx-auto transform transition duration-300 hover:scale-110" />
          </a>
          <p className="mt-2">GitHub</p>
        </div>
  
        <div className="text-center">
          <a href="https://www.facebook.com/share/18urXg4jMN/" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="w-20 mx-auto transform transition duration-300 hover:scale-110" />
          </a>
          <p className="mt-2">Facebook</p>
        </div>
      </div>
  
      {/* Contact Info */}
      <div className="flex flex-wrap justify-center gap-6 py-16 mt-8">
        <div className="p-4 border border-gray-500 rounded-lg hover:bg-gray-900 text-center w-full max-w-[320px]">
          <p className="text-sm font-bold break-words">
            <span className="mr-2">Email:</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">GuganrajRengaraju@gmail.com</span>
          </p>
        </div>
  
        <div className="p-4 border border-gray-500 rounded-lg hover:bg-gray-900 text-center w-full max-w-[320px]">
          <p className="text-sm font-bold break-words">
            <span className="mr-2">Mobile:</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">+91 9514189590</span>
          </p>
        </div>
      </div>
    </div>
  </>
  
  
  )
}

export default Contact