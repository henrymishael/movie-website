import Image from "next/image";
import Link from "next/link";
import React from "react";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <div className=' w-full  flex flex-col sm:flex-row items-center justify-between p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0 backdrop-blur-2xl transition-colors'>
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src='https://i.ibb.co/ZW0SbjJ/logo-dark.png'
          alt='Logo'
          width={120}
          height={100}
          priority={true}
          className='cursor-pointer w-40 h-auto'
        />
      </Link>
      {/* Others */}
      <div className='text-white flex space-x-2  sm:space-y-0 xsm:space-y-4 items-center'>
        {/* Genre */}
        <GenreDropDown />
        {/* Search */}
        <SearchInput />
        {/* Theme */}
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
