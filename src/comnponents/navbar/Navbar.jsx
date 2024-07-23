
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
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
  {
    id: 4,
    name: "Blog",
    link: "#/",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "My Portfolio",
    link: "/#",
  },
  {
    id: 2,
    name: "Trending Techs",
    link: "/#",
  },
  {
    id: 3,
    name: "My projects",
    link: "/#",
  },
];

const Navbar2 = () => {
  // const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // <div
  //       className={` bg-white w-full shadow-md transition-all duration-500 ease-in-out ${
  //         sticky ? "fixed top-0 left-0 z-50" : "relative"
  //       }`}

  return (
    <>
      <div
        className= "bg-white w-full shadow-md transition-all duration-500 ease-in-out fixed top-0 left-0 z-50">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <div data-aos="zoom-in" className="font-bold px-4 text-3xl">
            HiThere!
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div>
            <ul
              className={`max-md:bg-red-300 max-md:p-5 gap-10 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "max-md:font-medium max-md:top-[60px] opacity-95 " : "md:block hidden"
              }`}
            >
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block hover:text-primary text-xl my-3"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="cursor-pointer group ">
                <a
                  href="#/"
                  className="inline-block hover:text-primary text-xl"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Categories
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                {/* dropdown section */}
                <div className="absolute hidden group-hover:block w-[200px] max-md:bg-red-400 text-black shadow-md max-md:text-center max-md:font-medium">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href="/#"
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
