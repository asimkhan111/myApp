import Cards from "./Cards";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Premium() {
  const [app,setApp] = useState([])
  useEffect(() =>{
  const getApp =async() =>{
    try {
     const res =  await axios.get("http://localhost:3000/app")
     console.log(res.data)
     setApp(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  getApp();
  },[])
  return (
    <>
      <div className="max-w-screen2xl container mx-auto md:px-20 px-4">
        <div className="mt-18 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are happy to see you here :)
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            voluptatum repudiandae hic fugiat cumque modi, tempore temporibus!
            Assumenda quasi ratione, quam rerum reprehenderit beatae pariatur
            ipsam! Impedit similique sapiente dolor.
          </p>
          <Link to="/">
          <button className=" mt-6 bg-yellow-500 text-black px-2 py-1 rounded-full hover:bg-yellow-500 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt=12 grid grid-cols-1 md:grid-cols-3">
          {
          app.map((item) =>(
            <Cards key ={item.id} item={item} />
          ))
          }
        </div>
      </div>
    </>
  );
}

export default Premium;
