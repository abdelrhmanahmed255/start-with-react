import React from 'react'

export default function Contact() {
  return (
    <>

    <div className="container mx-auto pt-20 pb-10">
      <div className="mt-16 text-slate-700">
        <div>
          <h2 className='text-center font-bold text-4xl uppercase py-3'>contact section</h2>
          <div className="flex justify-center items-center my-2">
            <div className="line bg-slate-700 w-20 h-1 "></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line bg-slate-700 w-20 h-1"></div>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-11 w-7/12 mx-auto mt-7" >
        
        <div class="relative ">
          <input type="text" id="userName" class=" rounded block p-3 w-full text-base bg-transparent border-0 border-b  appearance-none focus:outline-none focus:ring-0 focus:border-main-color peer" placeholder=" " />
          <label for="userName" class="absolute text-base text-gray-500 ps-3 duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:start-0 peer-focus:text-main-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 ">userName</label>
        </div>
        <div class="relative ">
          <input type="number" id="userAge" class=" rounded block p-3 w-full text-base bg-transparent border-0 border-b  appearance-none focus:outline-none focus:ring-0 focus:border-main-color peer" placeholder=" " />
          <label for="userAge" class="absolute text-base text-gray-500 ps-3 duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:start-0 peer-focus:text-main-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 ">userAge</label>
        </div>
        <div class="relative ">
          <input type="email" id="uerEmail" class=" rounded block p-3 w-full text-base bg-transparent border-0 border-b  appearance-none focus:outline-none focus:ring-0 focus:border-main-color peer" placeholder=" " />
          <label for="uerEmail" class="absolute text-base text-gray-500 ps-3 duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:start-0 peer-focus:text-main-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 ">userEmail</label>
        </div>
        <div class="relative ">
          <input type="password" id="userPassword" class=" rounded block p-3 w-full text-base bg-transparent border-0 border-b  appearance-none focus:outline-none focus:ring-0 focus:border-main-color peer" placeholder=" " />
          <label for="userPassword" class="absolute text-base text-gray-500 ps-3 duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:start-0 peer-focus:text-main-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 ">userPassword</label>
        </div>

        <button type="button" className="rounded-md mb-4 px-3 py-2 self-start bg-main-color hover:bg-main-color- text-white">
          Send Message
        </button>
      </form>
    </div>
  </>
  )
}
