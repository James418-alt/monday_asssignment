"use client";
import React from "react";
import { MdLock } from "react-icons/md";

const page = () => {
  const formAction = async (formData: FormData) => {
    // "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const url = "/api/user";

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    }).then(() => {
      console.log("User created");
    });
  };
  return (
    <div className="bg-gray-200 h-[100vh] flex justify-center items-center">
      <form
        action={formAction}
        className="bg-white border p-10 border-gray-500 flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-mono text-[20px] font-bold">
            Registeration Form
          </h1>
          <div className="w-[30%] bg-green-300 h-[4px]"></div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-sans font-light text-[13px]">Name</span>
          <input
            className="border border-gray-400 p-2 rounded-sm outline-none focus:shadow-md focus:border-blue-600 hover:border-black text-[12px] font-medium"
            type="text"
            name="name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-sans font-light text-[12px]">Email</span>
          <input
            className="border border-gray-400 p-2 rounded-sm outline-none focus:shadow-md focus:border-blue-600 hover:border-black text-[12px] font-medium"
            type="text"
            name="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-sans font-light text-[12px]">Password</span>
          <input
            className="border border-gray-400 p-2 rounded-sm outline-none focus:shadow-md focus:border-blue-600 hover:border-black text-[12px] font-medium"
            type="text"
            name="password"
          />
        </div>

        <button className="bg-blue-600 p-2 rounded-[60px] text-white font-sans text-[]14px flex justify-center items-center gap-2 outline-none">
          <div>
            <MdLock />
          </div>
          <div>Register</div>
        </button>
      </form>
    </div>
  );
};

export default page;
