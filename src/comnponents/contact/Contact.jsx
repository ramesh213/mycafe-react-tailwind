import React from "react";
import { FaKeyboard, FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = ({handlePopUp}) => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          <h1 className="py-10 text-3xl font-bold text-center">Contact Me</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                Gauriganj R.M-2,Parewakhopi, Jhapa, Nepal<br />
                Currently- Balkot-15, Bhaktapur
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>rameshfood.com</p>
                <p>ktmgoodfood.com</p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-4xl" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <p>Mobile: +977 9813608363</p>

                <button onClick={handlePopUp} className="flex justify-center mt-1 items-center bg-gray-200 text-lg p-1 text-dark px-5 hover:scale-105 duration-300">
                  <FaKeyboard className="mr-2" />
                  Drop queries here !
                </button>
              </div>
            </div>
          </div>
          <div className=" flex justify-between px-3 py-4">
            <p> © 2024 All Rights Reserved.</p>
            <p>
              Design & Developed by{" "}
              <a href="https://yourportfolio.com" className="underline">
                Ramesh Tudu
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
