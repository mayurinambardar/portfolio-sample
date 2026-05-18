import React from 'react'

const Portfolio = () => {
  const images = [
  "./a.jpg",
  "./a.jpg",
  "./a.jpg",
  "./a.jpg",
  "./a.jpg",
  "./a.jpg",
  "./a.jpg",
  "./a.jpg",
  "./a.jpg",
]
  return (
    <div className=''>
    <div className='
  bg-stone-900
  px-6
  md:px-12
  py-16
  text-center
'>

  <div className='max-w-4xl mx-auto'>

    <h1 className='
      text-[#FDFCFB]
      text-2xl
      md:text-3xl
      font-light
      tracking-wide
      
    '>

      Our Portfolio

    </h1>

    <div className='
      w-20
      h-0.5
      bg-[#a67c37]
      mx-auto
      mt-6
      mb-8
    '></div>

    <p className='
      text-[#D1D1D1]
      leading-8
      text-lg
      max-w-3xl
      mx-auto
      
    '>

      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eligendi enim quasi repellendus nostrum, quo eveniet et
      minima ipsum voluptatibus sunt natus placeat tempora hic
      obcaecati tempore vitae eos ratione nisi.

    </p>

  </div>

</div>
    <div>
      

<div className='
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6
  p-6
'>

  {
    images.map((image, index) => (

      <div
        key={index}
        className='overflow-hidden rounded-2xl'
      >

        <img
          src={image}
          alt=""
          className='
            w-full
            h-75
            object-cover
            rounded-2xl
            hover:scale-105
            transition
            duration-500
          '
        />

      </div>

    ))
  }

</div>
    </div>
    </div>
  )
}

export default Portfolio