"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import Link from "next/link";

const DownloadApp = () => {
  const [active, setActive] = useState<"mobile" | "email">("mobile");
  return (
    <section className="w-full mt-8 bg-background-image-app p-0 mx-0 min-h-[520px]">
      <div className="container flex flex-col-reverse sm:flex-row justify-around items-center ">
        <div className="relative w-[342px] h-full ml-12">
          <Image
            src="/images/iPhone.png"
            alt="image of iPhone"
            width={342}
            height={500}
            className="rounded-md object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start  flex-1 h-[90%] w-full space-y-4">
          <h4 className="text-white text-4xl font-semibold tracking-tight text-center">
            Your all-in-one travel app.
          </h4>
          <p className="text-white text-md w-5/6">
            Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get
            real-time flight updates, travel info, exclusive deals and 30% more Trip Coins only on
            the app!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <Button
                  className={
                    active === "mobile"
                      ? "backdrop-blur bg-white/25 hover:bg-white/25"
                      : "bg-transparent hover:bg-white/25"
                  }
                  onClick={() => setActive("mobile")}
                >
                  Mobile
                </Button>
                <Button
                  className={
                    active === "email"
                      ? "backdrop-blur bg-white/25 hover:bg-white/25"
                      : "bg-transparent hover:bg-white/25"
                  }
                  onClick={() => setActive("email")}
                >
                  Email
                </Button>
              </div>
              <p className="text-white text-md">
                Enter your {active === "mobile" ? "phone number " : "email address "} to receive a
                link to download the app
              </p>
              <div className="flex justify-between bg-white rounded-md p-1 w-full">
                <Input
                  placeholder={active === "mobile" ? "+91 Mobile Number" : "email@address.com"}
                  className="outline-none border-none"
                />
                <Button>Send</Button>
              </div>
            </div>
            <div className="hidden  sm:flex">
              <div className="flex flex-col items-center">
                <Separator orientation="vertical" className="text-white" />
                <p className="text-white">or</p>
                <Separator orientation="vertical" className="text-white" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 mt-4 z-10">
              <Link href="https://play.google.com/store/apps?hl=en&gl=US" className="relative">
                <Image
                  src="/images/google.png"
                  alt="google play store"
                  width={200}
                  height={100}
                  priority={false}
                />
              </Link>
              <Link href="https://www.apple.com/app-store/" className="relative">
                <Image
                  src="/images/apple.png"
                  alt="google play store"
                  width={200}
                  height={100}
                  priority={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
