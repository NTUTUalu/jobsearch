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
              Dive into Delights <br />
              Of Delectable <span className="text-green-500 max-md:text-">Food</span>
            </h1>
            <p className="text-slate-500 font-medium w-4/6 mt-8 mb-7 max-md:w-5/6 max-sm:w-full max-sm:px-2 max-sm:tracking-wider">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftmanship
            </p>
            <div className="buttons flex">
              <Link href="#" className="">
                <button className="basis-1 flex  text-white tracking-wide text-base font-semibold rounded-3xl bg-green-400 py-2 px-8  ">
                  Order Now
                </button>
              </Link>
              <Link href="#" className="">
                <button className="basis-1 flex  text-slate-500 text-base font-normal py-2 px-8">
                  Watch Video
                  <Image
                    src="/play.png"
                    alt="Vercel Logo"
                    className={`${Styles.shadow} styles.darkInvert ml-2 bg-slate-100 rounded-full p-1 flex justify-self-center`}
                    width={25}
                    height={25}
                    priority
                  />
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