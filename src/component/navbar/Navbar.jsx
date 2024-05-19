import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={`fixed shadow z-50 left-0 right-0 top-0 bg-dark-gray flex justify-between px-2 ${scrolled ? 'py-4' : 'py-8'} md:px-40 transition-all duration-500`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
        <h1 className="text-2xl md:text-[2rem] font-bold uppercase ">
          <a href="/">Start Framework</a>
        </h1>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 justify-center text-white rounded-lg lg:hidden" aria-controls="navbar-default" aria-expanded={open}>
          <i className={`${open ? "fa-solid fa-x text-white text-2xl" :"fas fa-bars text-white text-3xl"}`}></i>
        </button>
        <div className={`${open ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col gap-3 mt-4 rounded-lg lg:flex-row lg:mt-0">
            <li>
              <NavLink to="about" className="block uppercase font-bold py-2 px-3 rounded-md">About</NavLink>
            </li>
            <li>
              <NavLink to="portfolio" className="block uppercase font-bold py-2 px-3 rounded-md">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="contact" className="block uppercase font-bold py-2 px-3 rounded-md">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
