import { FOOTERLINKS } from "@/lib/constants";
import Link from "next/link";
import DownloadApp from "./DownloadApp";

const Footer = () => {
  return (
    <>
      <DownloadApp />
      <footer className="bg-foreground">
        <div className="container flex justify-between items-start md:flex-row flex-col mb-8 w-full pt-4 gap-4 sm:gap-16">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-white italic">
            trxvl.
          </Link>
          <div className="flex-1 flex space-x-8 sm:space-x-20 justify-end my-2">
            {FOOTERLINKS.map((item, index) => (
              <div key={index} className="flex flex-col space-y-2 mb-10">
                {item.map((link) => (
                  <p key={link} className="text-white/65 text-sm cursor-pointer hover:text-white">
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="text-white text-center text-sm">
          © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
