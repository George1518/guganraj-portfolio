import React from 'react'

function Nav() {
  return (
<>
  <nav
    className="fixed top-0 left-0 z-10 w-full bg-black text-white px-8 sm:px-4 md:px-16 lg:px-24 py-3"
  >
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Guganraj</div>

      <div className="flex gap-10 sm:gap-4">
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400">
          About me
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
        <a href="#Education" className="hover:text-gray-400">
          Academics
        </a>
      </div>

      <div
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hidden sm:inline-block"
      >
        <a href="#contacts">Contact me</a>
      </div>
    </div>
  </nav>
</>

  )
}

export default Nav