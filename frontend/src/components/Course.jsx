import axios from 'axios'
import React, { useEffect,useState } from "react";
// import list from "../list.json";
import Cards from "./Cards";
import {Link} from 'react-router-dom'


function Course() {

  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook= async()=>{
      try{
          const response = await axios.get("/book");
          console.log(response.data)
          setBook(response.data)
      }catch(err){
        console.log(err)

      }
    };
    getBook();
  },[]);

  return (
    <>
      <div className="mt-0 max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className="mt-16 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            "A book is a dream you hold in your hands, and every great story is
            just a click away. Turn pages, not just screens, and invest in
            knowledge that guarantees lifelong returns. Expand your world one
            book at a time—shop now and let your next adventure begin!"
          </p>
          <Link to='/'>
          <button className="mt-5 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12  grid grid-cols-1 md:grid-cols-4"> 
            {
             book.map((item)=>(
                <Cards key ={item.id} item = {item} />
             ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
