import React from "react";
import { BackgroundBeams } from "./background-beam";
import "./onboard.module.css";
import Styles from "./onboard.module.css"; // Correct import path
import toast, { Toaster } from "react-hot-toast";

export default function Onboard() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("You have registered successfully!");
  };

  return (
    <div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
      id="onboard"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Join Us Early! Get Updates on Our Launch!
        </p>
        <div className="flex w-full justify-center items-center bg-pink-1 mt-4">
          <input
            type="text"
            maxLength="45"
            placeholder="hi@manuarora.in"
            className="rounded-lg border text-white font-light border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10  p-2 bg-neutral-950 placeholder:text-neutral-700"
          />

          <button className={`${Styles.btn} ml-4  `} onClick={handleSubmit}>
            <strong className={`${Styles.strong}  `}>JOIN</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className={`${Styles.circle}  `}></div>
              <div className={`${Styles.circle}  `}></div>
            </div>
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
