import React from 'react'

const Contact = () => {
  return (

    <div className='px-6 md:px-12 lg:px-20 py-12'>

      {/* Heading Section */}
      <div className='text-center max-w-4xl mx-auto'>

        <h1 className='
          text-4xl
          md:text-5xl
          uppercase
          text-[#a67c37]
          font-light
          tracking-wide
        '>

          Get in Touch With Us

        </h1>

        <div className='
          border-b
          border-[#a67c37]
          mt-6
          pb-8
          shadow-sm
        '>

          <p className='
            text-gray-700
            leading-8
            text-lg
          '>

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque officiis doloremque consequuntur laudantium sint
            dolores sed magnam libero necessitatibus accusamus.

          </p>

        </div>

      </div>

      {/* Contact Section */}
      <div className='
        flex
        flex-col
        md:flex-row
        gap-8
        mt-14
      '>

        {/* Form Section */}
        <div className='
          flex-1
          bg-gray-100/60
          p-8
          rounded-2xl
          shadow-sm
        '>

          <form action="" className='space-y-5'>

            <h4 className='
              text-center
              text-[#a67c37]
              font-semibold
              text-2xl
              mb-6
            '>

              Contact Us

            </h4>

            <div className='flex flex-col'>
              <label htmlFor="fullName" className='mb-2'>
                Full Name
              </label>

              <input
                type="text"
                placeholder='Your name'
                className='
                  bg-white
                  p-3
                  rounded-lg
                  outline-none
                  border
                  border-gray-200
                  focus:border-[#a67c37]
                '
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="email" className='mb-2'>
                Email
              </label>

              <input
                type="email"
                placeholder='Your email'
                className='
                  bg-white
                  p-3
                  rounded-lg
                  outline-none
                  border
                  border-gray-200
                  focus:border-[#a67c37]
                '
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="phone" className='mb-2'>
                Phone
              </label>

              <input
                type="text"
                placeholder='+91 1234567890'
                className='
                  bg-white
                  p-3
                  rounded-lg
                  outline-none
                  border
                  border-gray-200
                  focus:border-[#a67c37]
                '
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="message" className='mb-2'>
                Message
              </label>

              <textarea
                placeholder='Write your message here'
                rows="5"
                className='
                  bg-white
                  p-3
                  rounded-lg
                  outline-none
                  border
                  border-gray-200
                  focus:border-[#a67c37]
                  resize-none
                '
              ></textarea>
            </div>

            <button className='
              w-full
              bg-[#a67c37]
              text-white
              py-3
              rounded-lg
              hover:bg-white
              hover:text-[#a67c37]
              hover:border
              hover:border-[#a67c37]
              transition
              duration-300
            '>

              Send Message

            </button>

          </form>

        </div>

        {/* Contact Info Section */}
        <div className='
          flex-1
          shadow-sm
          rounded-2xl
          p-8
          bg-white
        '>

          <h4 className='
            text-center
            text-[#a67c37]
            font-semibold
            text-2xl
            mb-8
          '>

            Send Us a Message

          </h4>

          <div className='space-y-5 text-gray-700'>

            <div className='flex gap-4'>
              <p className='font-semibold'>Phone:</p>
              <p><a href="tel:+919370251148">
  +91 9370251148
</a></p>
            </div>

            <div className='flex gap-4'>
              <p className='font-semibold'>Email:</p>
              <p><a href="mailto:patilmansi102@gmail.com">
  patilmansi102@gmail.com
</a></p>
            </div>

          </div>

          {/* Office Section */}
          <div className='mt-10'>

            <h3 className='
              text-2xl
              text-[#a67c37]
              mb-4
              font-medium
            '>

              Visit Our Office

            </h3>

            <p className='
              text-gray-700
              leading-7
              mb-6
            '>

              Located in the heart of the city, our studio is open
              for scheduled visits and consultations.

            </p>

            <div className='
              overflow-hidden
              rounded-2xl
            '>

              <img
                src="./a.jpg"
                alt=""
                className='
                  w-full
                  h-62.5
                  object-cover
                '
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Contact