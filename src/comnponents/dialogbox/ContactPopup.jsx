import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const ContactPopup = ({ popUp, setPopUp }) => {
  return (
    <>
      {popUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-4 shadow-md rounded-md duration-200 w-[90%] sm:w-[500px] mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-dark">Write Message</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setPopUp(false)}
              />
            </div>
            
            <form className="flex flex-col space-y-2">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                className="w-full rounded-sm border border-gray-300 dark:border-gray-500 p-2"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-sm border border-gray-300 dark:border-gray-500 p-2"
              />
              <input
                type="number"
                min={0}
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-full rounded-sm border border-gray-300 dark:border-gray-500 p-2"
              />
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-sm border border-gray-300 dark:border-gray-500 p-2"
              ></textarea>
              <button
                type="submit"
                className="self-end bg-orange-800 text-lg p-2 text-white rounded-md px-4 hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
