import React from "react";

function Contact() {
  return (
    <>
      <div className="flex h-screen items-center justify-center  dark:bg-slate-900 dark:text-white ">
        <div className="w-[600px]">
          <div className="modal-box  dark:bg-slate-900 dark:text-white">
            <h3 className="font-bold text-lg">Contact Us</h3>

            {/* NAME */}
            <div className="mt-4 space-y-2 py-1">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"
              />
            </div>
            {/* EMAIL */}
            <div className="mt-4 space-y-2 py-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"

              />
            </div>

            {/* Message */}
            <div className="mt-4 space-y-2 py-1 ">
              <span>Message</span>
              <br />

              <textarea
                className="textarea textarea-bordered w-80"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Buttton */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className=" bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
