import React from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "About",
    link: "#/",
  },
  {
    id: 3,
    name: "Contact",
    link: "#/",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#"
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
]

const Navbar = () => {
  return (
    <>
        <div className="bg-white shadow-lg">
            <div className="container flex justify-between py-4 sm:py-3">
              {/* logo section */}
              <div className="font-bold text-3xl">Logo</div>
               <div>
                <ul className='flex items-center gap-10'>
                  {
                    NavLinks.map(({id, name, link}) => (
                      <li key={id}>
                        <a href={link} className='inline-block hover:text-primary text-xl' >{name}</a>
                      </li>
                    ))
                  }
                  <li className='cursor-pointer group '>
                  <a href="#/" className='inline-block hover:text-primary text-xl' > 
                  <div className='flex items-center gap-[2px] py-2'>
                  categories
                  <span>
                    <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                  </span>
                  </div>
                  </a>
                  {/* dropdown section */}
                  <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md'>
                    <ul>
                      {
                        DropdownLinks.map(({id,name,link}) => (
                          <li key={id}>
                            <a href="/#" className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20'>{name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  </li>
                  {/* User Account Button */}
                  <li>
                    <button className='flex justify-center items-center gap-2 bg-secondary text-lg p-1 text-white px-5 hover:scale-105 duration-300'>
                      <FaUser/>
                      My Account
                    </button>
                  </li>
                </ul>
                </div> 
            </div>
        </div>
    </>
  )
}

export default Navbar
