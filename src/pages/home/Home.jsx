import React from 'react'

export default function Home() {
  return (
    <>
      <section className="home bg-main-color text-center text-white flex justify-center items-center min-h-[95vh]">
        <div>
          <div className="home-img">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-60 mb-3 mx-auto' alt="" />
          </div>
          <div className="home-contant">
            <h2 className='font-bold text-3xl md:text-4xl uppercase py-3'>start Framework</h2>
            <div className="flex justify-center items-center my-2">
              <div className="line bg-white w-20 h-1 "></div>
              <i className="fa-solid fa-star mx-3"></i>
              <div className="line bg-white w-20 h-1"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  )
}
