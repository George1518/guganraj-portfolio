import React from 'react'

function Footer() {


  return (
    <>
  <footer className="bg-black text-white py-6">
    <div className="container mx-auto text-center">
      <p className="text-sm mb-4">
        © {new Date().getFullYear()} Guganraj. All rights reserved.
      </p>

    </div>
  </footer>
</>


  )
}

export default Footer