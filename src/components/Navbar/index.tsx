import { INavbarItem } from "@/models/general";
import Link from "next/link";

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
  return (
    <header className="bg-primary-navy text-primary-teal h-12 flex items-center justify-center text-lg font-medium drop-shadow-md shadow-md shadow-secondary-teal">
      {items.map((item: INavbarItem) => (
        <Link
          className="mx-4 hover:text-secondary-teal"
          key={item.id}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </header>
  );
}
