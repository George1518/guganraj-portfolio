import React from 'react'

function Edu() {
  return (
<>
  <div className="bg-black mx-auto text-white py-20" id="Education">
    <h2 className="text-4xl font-bold text-center mb-12">Academics</h2>

    <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl">
    
      <div className="text-center w-full md:w-96 h-auto p-6 border border-gray-500 rounded-lg hover:bg-gray-900">
        <h3 className="text-2xl text-white font-semibold mb-4">BCA</h3>
        <p className="text-lg text-cyan-400 font-semibold mb-4 overflow-hidden">
        Pursuing a Bachelor's in Computer Applications (BCA), where I have gained
          a strong foundation in programming, web development, and database
          management. My coursework includes hands-on experience in building
          real-world applications using technologies like HTML, CSS, JavaScript, and
          React.
</p>

      </div>

  
      <div className="text-center w-full md:w-96 h-auto p-6 border border-gray-500 rounded-lg hover:bg-gray-900">
        <h3 className="text-2xl text-white font-semibold mb-4">Certification</h3>
        <p className="text-lg text-cyan-400 font-semibold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non
          impedit blanditiis, ullam, minus molestiae earum id saepe quam aspernatur
          vitae? Eum.
        </p>
      </div>
    </div>
  </div>
</>

    


  )
}

export default Edu