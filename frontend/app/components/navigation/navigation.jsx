"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <>
      <div className="flex bg- justify-center items-center py-6 px-20 w-full max-md:px-5 max-sm:px-">
        <Link href="/">
          <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert max-md:w-24"
            width={120}
            height={25}
            priority
          />
        </Link>
      </div>
    </>
  );
}
