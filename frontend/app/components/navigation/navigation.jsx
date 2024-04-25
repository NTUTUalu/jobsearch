"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <>
      <div className="flex bg-neutral-950  opacity-30 justify-center items-center py-2 px-20 w-full max-md:px-5 max-sm:px-">
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Vercel Logo"
            className="dark:invert bg-pink-2 max-md:w-24"
            width={140}
            height={35}
            priority
          />
        </Link>
      </div>
    </>
  );
}
