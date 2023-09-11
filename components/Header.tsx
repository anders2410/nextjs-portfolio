import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex justify-between">
        <div className="py-3 px-3 my-6 cursor-pointer">
          <Link href="/" passHref>
            <Image
              src="/img/dev_anders.png"
              alt="My logo"
              width={151}
              height={23}
              className="rounded-lg"
            />
          </Link>
        </div>
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
