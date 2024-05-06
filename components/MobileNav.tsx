import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NAVLINKS } from "@/lib/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="block sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 px-2 mx-4">
          {NAVLINKS.map((item) => (
            <DropdownMenuItem key={item.title}>
              <Link href={item.path} className="w-full">
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
