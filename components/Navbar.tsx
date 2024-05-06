import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto px-5 lg:px-10 py-5 flex items-center justify-between text-white">
        <Link href="/" className="text-2xl font-semibold tracking-tight italic">
          trxvl.
        </Link>
        <div className="flex items-center space-x-4">
          <NavLinks />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
