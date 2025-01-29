"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { useMenuStore } from "../../../store/useMenuStore";
import { sideMenuLinks } from "../../../constants/sideMenuLinks";
import { FaXTwitter } from "react-icons/fa6";

interface SideMenuLink {
  label: string;
  route: string;
  sectionId: string;
}

const SideMenu = () => {
  const { isOpen, closeMobileMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState<SideMenuLink>(sideMenuLinks[0]);
  const handleLinkClick = (link: SideMenuLink) => {
    closeMobileMenu();
    setActiveLink(link);
  };
  const handleScroll = () => {
    const sections = sideMenuLinks.map((link) =>
      document.getElementById(link.sectionId)
    );
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        if (section.offsetTop <= scrollPosition + 150) {
          setActiveLink(sideMenuLinks[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <>
    {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={closeMobileMenu} // クリックでメニューを閉じる
        />
      )}
    <section
      className={` fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[20px] lg:px-16 max-lg:max-w-[146px] bg-white
      ${isOpen ? "max-lg:block" : "max-md:hidden"}`}
    >
      <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
        {/* 上 */}
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src={'/images/Astro.png'}
            width={100}
            height={100}
            alt="ORIGIN.Doc Image"
          />
          <p className="font-bold text-darkblue">Asutoro.code</p>
        </div>

        {/* 中 サイトメニュー*/}
        <div>
          {sideMenuLinks.map((link) => {
            const isActive = activeLink === link;
            return (
              <a
                key={link.label}
                href={link.route}
                className={` relative flex justify-center rounded-lg p-3 font-bold ${
                  isActive ? "bg-cadetblue text-white" : ""
                }`}
                onClick={() => handleLinkClick(link)}
              >
                <p>{link.label}</p>
              </a>
            );
          })}
        </div>

        {/* 下 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-3 ">
            <a
              href=""
              target="_blank"
              className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
            >
              <AiFillInstagram />
            </a>
            <a
              href=""
              target="_blank"
              className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
            >
              <FaXTwitter />
            </a>
            
          </div>
          <p className="max-lg:hidden">© Asutoro.code</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default SideMenu;
