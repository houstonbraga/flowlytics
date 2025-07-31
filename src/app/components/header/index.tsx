"use client";

import GridContainer from "../GridContainer";
import Image from "next/image";
import ItemLink from "./components/itemLink";
import { listLinks } from "@/app/data/data";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-950 w-full h-18 flex items-center border-b border-b-gray-800">
      <GridContainer className="flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Image src="/assets/logo.svg" alt="logo" width={140} height={40} />
          <nav className="hidden md:flex items-center gap-8">
            {listLinks.map(({ title, url, dropdown }, index) => (
              <ItemLink
                key={index}
                title={title}
                url={url}
                hasDropDown={dropdown}
              />
            ))}
          </nav>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:block">
          <Link
            href="/"
            className="font-bold text-brand hover:opacity-80 transition-opacity"
          >
            Dashboard
          </Link>
        </div>

        {/* Menu Mobile Button */}
        <button
          onClick={toggleMenu}
          className="cursor-pointer md:hidden p-2 text-neutral-300 hover:opacity-50 transition-opacity"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </GridContainer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-18 bg-gray-950 z-40">
          <div className="flex flex-col p-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              {listLinks.map(({ title, url, dropdown }, index) => (
                <ItemLink
                  key={index}
                  title={title}
                  url={url}
                  hasDropDown={dropdown}
                  onLinkClick={closeMenu}
                />
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-800">
              <Link
                href="/"
                className="font-bold text-brand hover:opacity-80 transition-opacity"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
