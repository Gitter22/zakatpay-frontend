import { Button } from "@/components/ui/button";
// import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full  flex items-center justify-between mx-auto px-4">
        {/* <Logo /> */}
        <Link href="/" className="font-extrabold text-xl xs:text-2xl">
          ZakatPay
        </Link>
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button> */}
          <Button className="hidden xs:inline-flex">Join the waitlist</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
