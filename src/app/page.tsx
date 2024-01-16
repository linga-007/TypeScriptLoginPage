// import Image from "next/image" affsge;
"use client";
import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
// import { useEffect } from "react";

export default function Home() {
  const handelRequest = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg  flex items-center justify-center shadow-md flex-col w-[627px] h-[484px] ">
        <h2 className="text-4xl text-[#49656D] mb-2.5">efful</h2>

        <h2 className="text-black mb-14 text-Inter text-3xl font-medium">
          Log In
        </h2>
        <form>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-[416px] border text-black rounded-md border-[#8A8A8A]"
              placeholder="admin@gmail.com"
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter ">
              Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-[416px] text-black border rounded-md border-[#8A8A8A]"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-[416px] bg-[#49656D] text-white py-2 rounded-md hover:bg-[#49656D]"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
