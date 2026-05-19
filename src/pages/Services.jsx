import React from 'react'

const Services = () => {
  const services = [
  {
    title: "Industrial Planning",
    image: "/portfolio-sample/images/a.jpg",
    description:
      "We create functional and efficient industrial spaces that balance operational performance with modern architectural aesthetics."
  },

  {
    title: "Residential Planning",
    image: "/portfolio-sample/images/a.jpg",
    description:
      "Thoughtfully designed residential spaces crafted to enhance comfort, simplicity, and everyday living experiences."
  },

  {
    title: "Commercial Planning",
    image: "/images/a.jpg",
    description:
      "Modern commercial environments designed with a focus on functionality, brand identity, and spatial efficiency."
  },

  {
    title: "Institutional Planning",
    image: "/portfolio-sample/images/a.jpg",
    description:
      "Purpose-driven institutional spaces that encourage learning, interaction, and long-term usability."
  }
]
  return (
    <div>
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

      Our Services

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

    <div className='px-6 md:px-12 lg:px-20 py-16 space-y-20'>

  {
    services.map((service, index) => (

      <div
        key={index}
        className={`
          flex
          flex-col
          ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}
          items-center
          gap-10
        `}
      >

        {/* Image Section */}
        <div className='flex-1 w-full overflow-hidden rounded-3xl shadow-xl'>

          <img
            src={service.image}
            alt={service.title}
            className='
              w-full
              h-75
              md:h-112.5
              object-cover
              hover:scale-105
              transition
              duration-700
            '
          />

        </div>

        {/* Text Section */}
        <div className='flex-1 w-full'>

          <div className='border-b border-yellow-900 pb-6'>

            <h2 className='
              text-3xl
              font-light
              text-yellow-900
              mb-6
              tracking-wide
            '>

              {service.title}

            </h2>

            <p className='
              text-gray-700
              leading-8
              text-justify
              text-lg
            '>

              {service.description}

            </p>

          </div>

        </div>

      </div>

    ))
  }

</div>

     

         

   
    </div>
  )
}

export default Services