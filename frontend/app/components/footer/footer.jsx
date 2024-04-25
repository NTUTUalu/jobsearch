import Image from "next/image";
import Link from "next/link";

export default function OnboardingFooter() {
  return (
    <>
          <div className="bottom bg-neutral-950 flex justify-center items-center bg-blue- h-16 border-t-2 border-neutral-900">
            <h3 className="flex w-fit h-fit text-xs bg-pink- text-neutral-700">
              Copyright{" "}
              <Image
                src="/copyright2.png"
                alt="Poultry plus logo"
                className="h-4 flex place-self-center
                      mx-1 opacity-60"
                width={15}
                height={15}
                priority
              />{" "}
              2023 All right reserved | Lesotho Inc.
            </h3>
          </div>
    </>
  );
}