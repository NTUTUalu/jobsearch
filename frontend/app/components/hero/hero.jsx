'use client'
import Link from "next/link";
import Image from "next/image";
import Styles from "./hero.module.css";

export default function MoodSetter() {
  return (
    <>
      <div className="relative h-screen max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
          preload="none"
        >
          <source src='/bgHero.mp4' type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
         
         
        </video>
        <div className={`${Styles.gradient} absolute top-0 left-0 w-full h-full bg-black opacity-60 `}></div>
        

        <div className="px-20  max-md:px-10 max-sm:px-1 max-sm:p wrapper flex w-full h-screen max-md:h-fit max-sm:flex-col  max-sm:h-4/6 max-sm:justify-center max-sm:bg-black max-sm:bg-opacity-20">
          <div className="left flex flex-col w-1/2 mt-24 max-md:mt-12 max-sm:w-full max-sm:mt-0 max-sm:items-center
          max-sm:justify-evenly  max-sm:h-5/6">
            <h1 className="text-5xl text-slate-300 font-bold w-5/6 leading-tight max-md:text-3xl max-md:w-5/6 max-sm:text-center max-sm:w-full max-sm:text-2xl max-sm:mt-4 ">
              Tired of  <span className="text-amber-500  max-md:text-" >job  <br />
              search </span><span className="text-slate-300 max-md:text-">frustrations?</span>
            </h1>
            <p className="text-slate-400 font-normal w-6/6 mt-8 mb-7 max-md:w-5/6 max-sm:w-full max-sm:px-2 max-sm:text-base max-sm:tracking-wider ">
              Are you a graduate or student in Lesotho searching for job placements? Join the waitlist for Lesotho's first-ever job search platform! We're here to help you find the perfect opportunity to kickstart your career journey. Don't miss out – sign up now!
            </p>
            <div className={` flex`}>
              <Link href="/#onboard" className="">
                <button className={`${Styles.button} basis-1 flex text-white tracking-wide text-base font-semibold rounded-3xl py-2 px-8`}>
                  Join Waitlist
                </button>
              </Link>
            </div>
          </div>
          <div className="right w-1/2 max-sm:w-full max-sm:justify-center  max-sm:hidden">
            
          </div>
        </div>
      </div>
    </>
  );
}
