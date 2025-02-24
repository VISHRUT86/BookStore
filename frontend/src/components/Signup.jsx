import React  from "react";
import { Link ,Navigate} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
     const userInfo = {
      fullname : data.fullname,
      email : data.email,
      password : data.password,
     }
    await axios.post("/signup",userInfo)
     .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successfully");
      <Navigate to ='/'/>
        window.location.reload();
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
     })
     .catch((error)=>{
      if(error.response){
        console.log(error)
      toast.error("Error: " +error.response.data.message)
      
      }
     })
 
  }
    return (
      <>
        <div className="flex h-screen items-center justify-center ">
          <div className="w-[600px]">
            <div className="modal-box  dark:bg-slate-900 dark:text-white">
              <form  onSubmit={handleSubmit(onSubmit)} method="div">
                {/* if there is a button in form, it will close the modal */}
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
                >
                  ✕
                </Link>

                <h3 className="font-bold text-lg">Signup</h3>

                {/* NAME */}
                <div className="mt-4 space-y-2 py-1">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"
                    {...register("fullname", { required: "Name is required" })}
                  />
                  {errors.fullname && (
                    <p className="text-red-500">{errors.fullname.message}</p>
                  )}
                </div>
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
                    type="text"
                    placeholder="Enter your password"
                    className="w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white"
                    {...register("password", {
                      required: "Password is required",
                    })}
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
                    Signup
                  </button>
                  <p className="mt-2">
                    Already registered?
                    <button
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() => {
                        document.getElementById("my_modal_3").showModal();
                      }}
                    >
                      Login
                    </button>
                    <Login />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };


export default Signup;
