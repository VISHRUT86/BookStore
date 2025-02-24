import React from "react";


function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
        <div className="w-full md:w-1/2 mt:12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl md:text-4xl font-bold">
              Hello,welcome here to learn something
              <span className="text-pink-500"> new everyday!!</span>
            </h1>
            <p className="md:text-xl text-sm">
              Explore a vast collection of books across all genres, from
              bestsellers to hidden gems. Enjoy a seamless shopping experience
              with secure checkout, fast delivery, and exclusive discounts.
              Whether you seek adventure, knowledge, or inspiration, your next
              great read is just a click away. Start your journey today!
            </p>
            <label className="px-3 py-1 border rounded-md flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70  "
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className=" grow outline-none  dark:bg-slate-900 dark:text-white " placeholder="Enter your Email" />
          </label>
      
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
          
        </div>
        <div className="w-full md:w-1/2 md:order-2 order-1">
        <img src="/banner.png" alt="Banner" className="w-92 h-92 "/></div>
      </div>
    </>
  );
}

export default Banner;
