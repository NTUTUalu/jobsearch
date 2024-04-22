import Image from "next/image";
import Link from "next/link";

export default function OnboardingFooter() {
  return (
    <>
          <div className="bottom flex justify-center items-center bg-blue- h-16 border-t-2">
            <h3 className="flex w-fit h-fit text-xs bg-pink- text-slate-400">
              Copyright{" "}
              <Image
                src="/copyright.png"
                alt="Poultry plus logo"
                className="h-4 flex place-self-center
                      mx-1 opacity-60"
                width={15}
                height={15}
                priority
              />{" "}
              2023 All right reserved | African 2-2 Inc.
            </h3>
          </div>
    </>
  );
}