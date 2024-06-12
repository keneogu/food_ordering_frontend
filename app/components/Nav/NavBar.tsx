import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm border-b-4 border-slate-500">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              KenzFoods
            </Link>
            <div className="flex items-center justify-around gap-8 md:gap-12">
              <Link href="/">UserMenu</Link>
              <Link href="/">email</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
