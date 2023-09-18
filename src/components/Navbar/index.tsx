"use client";

import { INavbarItem } from "@/models/general";
import Link from "next/link";
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { IconClose, IconMenu } from "./icons";

const items: INavbarItem[] = [
  {
    id: "about",
    name: "About Me",
    link: "/about",
  },
  {
    id: "experience",
    name: "Experience",
    link: "/experience",
  },
  {
    id: "blog",
    name: "Blog",
    link: "/blog",
  },
  {
    id: "contact",
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && <Backdrop onClick={() => setIsMenuOpen(false)} />}
      <div
        className={`fixed z-10 bg-primary-navy text-primary-teal
     flex items-start md:items-center justify-start md:justify-center 
     text-lg font-medium 
     drop-shadow-md shadow-md shadow-secondary-navi 
     transition-all ease-in-out
     ${
       isMenuOpen ? "md:h-12 md:w-full right-0 w-3/5 h-[100vh]" : "w-full h-12"
     }`}
      >
        <div className="flex flex-col md:flex-row mt-20 md:mt-0">
          {items.map((item: INavbarItem) => (
            <Link
              className={`mx-4 hover:text-secondary-teal mb-4 md:mb-0 ${
                isMenuOpen ? "flex" : "hidden"
              } md:flex`}
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden fixed mt-4 right-4"
        >
          {isMenuOpen ? (
            <IconClose className="fill-primary-teal" />
          ) : (
            <IconMenu className="fill-primary-teal" />
          )}
        </button>
      </div>
    </>
  );
}
