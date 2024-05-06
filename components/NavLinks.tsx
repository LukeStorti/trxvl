"use client";
import { NAVLINKS } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="hidden sm:flex space-x-8">
        {NAVLINKS.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className={
              item.path === pathName
                ? "underline underline-offset-4 font-medium decoration-2"
                : "font-medium"
            }
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Button asChild className="hidden sm:block">
        <Link href="/register">Sign Up</Link>
      </Button>
    </>
  );
};

export default NavLinks;
