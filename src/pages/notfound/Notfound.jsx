import React from 'react'
import image404 from "../images/404.jpg"

export default function Notfound() {
  return (
        <>
      <div className="container mx-auto  main-content  flex flex-col justify-center items-center">
        <img src={image404} className="h-[60vh]  md:w-full md:h-[60vh] mx-auto " alt="404page" />
    </div>
  </>
  )
}
