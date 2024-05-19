import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="text-white text-center ">
      <div className="footer-top bg-slate-700 p-10">
        <div className="container my-7">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div className="card p-4">
              <h3 className="uppercase mb-2 font-medium text-[1.75rem]">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p className="my-4">Clark, MO 65243</p>
            </div>
            <div className="card p-4">
              <h3 className="uppercase mb-2 font-medium text-[1.75rem]">Around the web</h3>
              <div className="icon mt-3">
                <i className="fa-brands fa-facebook p-[10px] mx-2 border border-white rounded-full hover:bg-cyan-600"></i>
                <i className="fa-brands fa-twitter p-[10px] mx-2 border border-white rounded-full hover:bg-cyan-600"></i>
                <i className="fa-brands fa-linkedin-in p-[10px] mx-2 border border-white rounded-full hover:bg-cyan-600"></i>
                <i className="fa-solid fa-globe p-[10px] mx-2 border border-white rounded-full hover:bg-cyan-600"></i>
              </div>
            </div>
            <div className="card p-4">
              <h3 className="uppercase mb-2 font-medium text-[1.75rem]">ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 p-5">Copyright © Your Website 2021</div>
    </footer>

  </>
  )
}
