import React from 'react';
import Link from "next/link";
import Logo from  "@/public/logo.svg";
import Image from "next/image";

const Header = () => {
    return (
      <div className="header flex justify-between items-center bg-gray-600 py-3 px-5 rounded">
          {/*Logo*/}
          <div className="logo w-32">
              <Link href="/">
                  <Image src={Logo} alt="logo"/>
              </Link>
          </div>
            {/* Navigation */}
          <nav>
              <ul className="flex gap-10">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
              </ul>
          </nav>
      </div>
    );
};

export default Header;