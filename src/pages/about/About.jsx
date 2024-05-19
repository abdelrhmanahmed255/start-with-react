import React from 'react'

export default function About() {
  return (
    <>
    <section className="about bg-main-color text-white flex justify-center items-center min-h-[70vh] md:min-h-[95vh]">
      <div>
        <div className="about-contant">
          <h2 className='text-center font-bold md:text-5xl text-3xl uppercase py-3'>about component</h2>
          <div className="flex justify-center items-center my-2">
            <div className="line bg-white w-20 h-1 "></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line bg-white w-20 h-1"></div>
          </div>
          <div className="container md:flex md:px-56 mt-4">
            <p className='pb-3 md:pe-8 text-center md:text-left'>Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='md:ps-8 text-center md:text-left' >Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
