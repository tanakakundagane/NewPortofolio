import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../animation.css";

const Hero = () => {
  return (
    <section className=" w-fu1 lg:h-screen h-fit bg-whitesmoke relative px-[40px] py-10 max-xs:px-[20px]">
      <div className=" max-w-7xl flex items-center justify-between h-full mx-auto max-md:flex-col max-md:gap-10 max-md:text-center">
        {/* 左 */}
        <div className="flex flex-col gap-5 z-40 max-md:order-2">
          <div className="text-4xl lg:text-6xl">
            <h1 className="font-medium">Leave Your Website</h1>
            <span className="font-bold text-cadetblue">Development</span>
            <h2>to Astoro.code</h2>
            <p className="mt-5 text-xl font-bold">
              ホームページ制作ならAstoro.codeにお任せください！デザインから機能開発まで、すべての要件に対応します。
            </p>

            <div className="flex gap-4 max-md:justify-center mt-5">
              <Link href={"#projects"}>
                <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4 text-lg md:text-3xl font-medium">
                  開発実績
                </button>
              </Link>
              <Link href={"#contact"}>
                <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4 text-lg md:text-3xl font-medium">
                  コンタクト
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 右 */}
        <Image
          src={"/images/hero.png"}
          width={800}
          height={800}
          alt="heroImage"
          className="z-10 rounded-full w-
        "
        />
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;
