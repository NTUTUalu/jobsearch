'use client'

import React from "react";
import { BackgroundBeams } from "./background-beam";
import "./onboard.module.css";
import Styles from "./onboard.module.css"; // Correct import path
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { BASE_API_URL } from "../../../constants";

export default function Onboard() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toast.success("Successfully added to waiting list!");

    if (!email) {
      toast.error("enter email!");

      return;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      //we are saying the first character must be an alphabet, there will be a space, then any character from A-z
      toast.error("Invalid email!");
//we use
      return false;
    }

    // toast.success("Successfully added to waiting list!");
    try {
      const res = await fetch(`${BASE_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email
        }),
      })
      
      if (res.ok) {
        
        setEmail("");

        toast.success("Successfully added to the waiting list!");
        
    } else {
        // console.log("user registration failed.");
        toast.error("email is already added!");
    }
  } catch (error) {
    toast.error("Cannot connect to remote servers, contact Administration");
    // console.log("error during registration: ", error);
  }

  };

  return (
    <div
      className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center m-0 max-sm:"
      id="onboard"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-2xl mx-auto p-4 max-sm:flex-col max-sm:flex">
      
      <div className="hidden max-sm:flex max-sm:w-full max-sm:bg-pink-5 max-sm:justify-center max-sm:mb-4  ">
      <img src="/on.svg" alt="Description" className="w-36 h-36"/>
      </div>
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Join Us Early! Get Updates on Our Launch!
        </p>
        <form className="flex w-full justify-center items-center bg-pink-1 mt-4 max-sm:flex-col max-sm:flex max-sm:h-24 max-sm:justify-between bg-pink" autoComplete="off"
                onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="45"
            default=""
            placeholder="hi@manuarora.in"
            className="rounded-lg border text-white font-extralight border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 tracking-wider p-2 bg-neutral-950 placeholder:text-neutral-700 text-sm"
          />

          <button className={`${Styles.btn} ml-4  max-sm:w-full  max-sm:m-0 max-sm: `}  type="submit">
            <strong className={`${Styles.strong}  `}>JOIN</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className={`${Styles.circle}  `}></div>
              <div className={`${Styles.circle}  `}></div>
            </div>
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
