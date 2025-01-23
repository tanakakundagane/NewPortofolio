"use client";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useMenuStore } from "../../../store/useMenuStore";

const TopMenu = () => {
  const { isOpen, openMobileMenu } = useMenuStore();

  return (
    <section
      className="px-[40px] bg-whitesmoke py-4 z-10 max-xs::px-5"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-5">
        {/* 上 */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Link href={"/"}>
            <h1 className="font-bold text-3xl text-cadetblue">Astoro.code</h1>
          </Link>
          <div className="text-2xl z-50" onClick={openMobileMenu}>
            {/* トグル */}
            {isOpen ? <IoMdClose /> : <RiMenu3Fill />}
          </div>
        </div>
        {/* 下 */}
        <div>
          <div className="flex md:flex-row gap-2 items-center text-lg font-bold ">
            <MdEmail />
            <span className="text-darkblue text-xl pb-1">
              origindoc@email.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMenu;
