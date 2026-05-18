import React from 'react'

const About = () => {
  return (
   <div>
    {/* First */}
     <div className='bg-[#a67c37] p-8 text-center '>
      <div className='mt-4 p-8 text-[#FDFCFB]' >
        <h1 className='text-[#FDFCFB] text-3xl'>About Us</h1>
          <p  className='text-[#FDFCFB] mt-4 font-bold'>We deliever integrated solutions in architecture, project management, and regulatory approvals.</p>
       <h2 className='text-[#bdbdbd] mt-4 font-bold text-lg '>Architecture | Project Management | Approvals</h2>
        <h3 className='text-[#474747] font-bold mt-4'>Where Design Meets Development</h3>    
      </div>
    </div>
  {/* second */}
      <div className='flex flex-col md:flex-row p-8 gap-4 '>
         <div className='md:w-1/2 flex-1 h-100 shadow-2xl rounded-2xl overflow-hidden'>
        <img src="./mapAssociates.jpg" className='w-full h-full object-cover' alt="" />
      </div>
      <div className='bg-gray-200/50 p-8 text-gray-800 md:w-1/2 flex-1 text-center justify-center flex items-center shadow-2xl rounded-2xl overflow-hidden' >
      <p>I am a young architect passionate about architecture, art, and minimalist design. I believe architecture has the power to shape meaningful spaces and strengthen communities. <span className='text-gray-500 font-bold block'>My design approach focuses on simplicity, clean lines, and functionality, with the goal of creating spaces that inspire and connect people.</span></p>
    
</div>
     
      </div>


      
   </div>
  )
}

export default About