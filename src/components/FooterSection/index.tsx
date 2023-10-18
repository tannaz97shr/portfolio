import Link from "next/link";
import { IconGithub, IconLinkedin, IconTwitter } from "./icons";

function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center
      w-full mt-5 p-4
    bg-primary-teal lg:bg-gradient-to-r from-primary-teal to-secondary-teal"
    >
      <div className="text-primary-navy mb-4 md:mb-0">
        Email:{" "}
        <Link
          className="drop-shadow-xl font-semibold"
          href="mailto:tia.shr97@gmail.com"
        >
          tia.shr97@gmail.com
        </Link>
      </div>
      <div className="flex">
        <Link
          className="mx-4"
          target="_blank"
          href={"https://www.linkedin.com/in/tannaz-shirzadi/"}
        >
          <IconLinkedin />
        </Link>
        <Link
          className="mx-4"
          target="_blank"
          href={"https://github.com/tannaz97shr"}
        >
          <IconGithub />
        </Link>
        <Link
          className="mx-4"
          target="_blank"
          href={"https://twitter.com/Tia_shr"}
        >
          <IconTwitter />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
