import { useState } from "react"; // import state
import Link from "next/link"; // import link
import Image from "next/image"; // import image
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width="125" height="39" />
      </Link>
      <nav>
        <section className=" flex lg:hidden">
          <div
            className="w-10 h-10 flex my-auto items-center text-xl mr-7"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <HamburgerIcon />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className=" w-10 h-10 absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <CloseIcon />
            </div>
            {/* Menu Links when Mobile Open */}
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}