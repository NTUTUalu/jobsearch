import Link from "next/link";
import Image from "next/image";

import Styles from "./hero.module.css";

export default function MoodSetter() {
  return (
    <>
      <div className="px-20 max-md:px-10  max-sm:px-1 max-sm:p ">
        <div className="wrapper flex w-full h-screen max-md:h-fit  max-sm:flex-col">
          <div className="left flex flex-col  w-1/2 mt-24 max-md:mt-12  max-sm:w-full max-sm:mt-0 max-sm:items-center">
            <h1 className="text-5xl font-bold w-5/6 leading-tight max-md:text-3xl max-md:w-5/6 max-sm:text-center max-sm:w-full  max-sm:text-2xl max-sm:mt-4 ">
            Tired of job  <br />
            search  <span className="text-red-500 max-md:text-">frustrations?</span>
            </h1>
            <p className="text-slate-500 font-medium w-6/6 mt-8 mb-7 max-md:w-5/6 max-sm:w-full max-sm:px-2 max-sm:tracking-wider">
            Are you a graduate or student in Lesotho searching for job placements? Join the waitlist for Lesotho's first-ever job search platform! We're here to help you find the perfect opportunity to kickstart your career journey. Don't miss out – sign up now!



            </p>
            <div className="buttons flex">
              <Link href="#" className="">
                <button className="basis-1 flex  text-white tracking-wide text-base font-semibold rounded-3xl bg-green-400 py-2 px-8  ">
                  Join Waitlist
                </button>
              </Link>
              
            </div>
          </div>
          <div className="right w-1/2 max-sm:order-first max-sm:w-full max-sm:flex max-sm:justify-center">
            <Image
              src="/mood.png"
              alt="Vercel Logo"
              className={` styles.darkInvert ml-2  mt-5 p-1 flex justify-self-center max-sm:w-5/6  max-sm:m-0 `}
              width={510}
              height={25}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}