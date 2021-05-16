import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex justify-between">
        <div className="py-3 px-3 my-6 cursor-pointer">
          <Link href="/">
            <Image
              src="/img/dev_anders.png"
              alt="My logo"
              width={151}
              height={23}
              className="rounded-lg"
            />
          </Link>
        </div>
        {/*<nav className="flex mt-9 gap-x-5">
          <Link
            href="#posts"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center px-3 my-10 rounded font-bold text-gray-700 text-xl hover:text-yellow-200 hover:bg-gray-300"
          >
            TECHNOLOGIES
          </Link>
          <Link
            href="#about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center px-3 my-10 rounded font-bold text-gray-700 text-xl hover:text-yellow-200 hover:bg-gray-300"
          >
            ABOUT ME!
          </Link>
          <Link
            href="#projects"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center px-3 my-10 rounded font-bold text-gray-700 text-xl hover:text-yellow-200 hover:bg-gray-300"
          >
            PROJECTS
          </Link>
        </nav>*/}
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/anders-holt-knudsen-0924b9175/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/anders2410"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/anders.h.knudsen.3/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
