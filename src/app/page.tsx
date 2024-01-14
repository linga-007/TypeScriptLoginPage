// import Image from "next/image" affsge;
'use client';
import axios from "axios";
import { useEffect } from "react";
// import { useEffect } from "react";

export default function Home() {
  const handelRequest = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // This useEffect will run after the initial render
    handelRequest();
  }, []); 


  return (
    <main>
      <div className="w-screen h-screen bg-zinc-50 flex justify-center items-center">
        <div className="h-[484px] w-[627px] t-[270px] b-[407px] bg-white box-shadow: 0px 1px 12px 0px rgba(213, 213, 213, 0.25) rounded-lg flex items-center flex-col">
          <h2 className="flex items-center text-4xl text-[#49656D] pt-10">
            efful
          </h2>

          <h1 className="text-black t-[131px] l-[267px] text-Inter text-3xl font-medium flex pt-5 pb-8 justify-center items-center">
            Log In
          </h1>
          <div className=" w-[425px] pt-8 ">
            <h2 className="flex justify-start text-Inter items-start text-[#333333] width-[200px]">
              Email
            </h2>
            <input
              placeholder="  admin@gmail.com"
              className=" block w-[416px] bg-transparent h-[36px] border-2 border-[#8A8A8A] rounded-md text-black"
            ></input>
          </div>
          <div className=" w-[425px] pt-8 pb-1 ">
            <h2 className="flex justify-start text-Inter items-start text-[#333333] width-[200px]">
              Password
            </h2>
            <input
              placeholder="  *********"
              className=" block w-[416px] bg-transparent h-[36px] border-2 border-[#8A8A8A] rounded-md text-black"
            ></input>
          </div>
          <div className=" w-[425px] pt-8 pb-1 ">
            <button  className=" block w-[416px] bg-[#49656D] h-[40px] rounded-md">
              Log In
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
