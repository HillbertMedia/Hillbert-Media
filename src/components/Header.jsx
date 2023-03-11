import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes,} from '@fortawesome/free-solid-svg-icons';
import {  faInstagram, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    const closeNav = () => {
      setIsNavOpen(false);
    };
    return(
        
      <div className=" text-white text-center py-4 fixed w-32 z-10 md:bg-secondary md:fixed md:top-0 md:w-full">
      <ul className="hidden md:flex md:justify-center">
        <li className="mx-5">
          <a href="/" className='text-lg'>Home</a>
        </li>
        <li className="mx-5">
          <a href="/about" className='text-lg'>About</a>
        </li>
        <li className="mx-5">
          <a href="/work" className='text-lg'>Work</a>
        </li>
        <li className="mx-5">
          <a href="/contact" className='text-lg'>Contact</a>
        </li>
      </ul>

      <div className="md:hidden z-50">
        <button onClick={toggleNav} className="text-white hover:text-gray-200 z-50">
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="2x" />
        </button>

        {isNavOpen && (
          <div className="absolute top-full left-5 w-full rounded bg-secondary text-white z-50">
            <ul className="py-4 z-50">
              <li className="px-3 py-2">
                <a onClick={closeNav} href="/">Home</a>
              </li>
              <li className="px-3 py-2">
                <a onClick={closeNav} href="/about">About</a>
              </li>
              <li className="px-3 py-2">
                <a onClick={closeNav} href="/work">Work</a>
              </li>
              <li className="px-3 py-2">
                <a onClick={closeNav} href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="fixed right-4 top-4">
      <a href="#">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
        </a>
  </div>

  <div className='fixed left-4 top-0'>
  <img src='/logo.png' className='hidden md:flex md:w-28 object-fill' alt="hillbertmedialogo"/>
  </div>
</div>
    )
}