import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'

import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    const userInfo = {
      email : data.email,
      password : data.password,
     }
    await axios.post("/login",userInfo)
     .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Loggedin Successfully")
        setTimeout(()=>{
        document.getElementById("my_modal_3").close();
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user))
        },600)

        
      }

     })
     .catch((error)=>{
      if(error.response){
        console.log(error)
      toast.error("Error: " +error.response.data.message);
      setTimeout(()=>{},600)
      }
     })
  
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* EMAIL */}
            <div className="mt-4 space-y-2 py-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mt-4 space-y-2 py-1 ">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Buttton */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className=" bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300 "
              >
                Login
              </button>
              <p className="mt-2">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
