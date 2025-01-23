import Image from "next/image";
import React from "react";
import { AiFillBulb } from "react-icons/ai";

const Skills = () => {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="skils"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
          <p className="flex font-bold">
            <span className="pr-1">
              <AiFillBulb className="w-4 h-4" />
            </span>
            使用言語
          </p>
        </div>

        {/* グリットレイアウト */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-xs:grid-cols-1 mt-10">
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/skills/html.png"}
              width={100}
              height={100}
              alt="html"
              className="mb-2"
            />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/skills/css.png"}
              width={100}
              height={100}
              alt="css"
              className="mb-2"
            />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/skills/js.png"}
              width={100}
              height={100}
              alt="js"
              className="mb-2"
            />
            <span>Javascript</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/skills/react.png"}
              width={100}
              height={100}
              alt="react"
              className="mb-2"
            />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/skills/tailwindcss.png"}
              width={100}
              height={100}
              alt="tailwindcss"
              className="mb-2"
            />
            <span>tailwindcss</span>
          </div>
          {/* <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/mongo.png"}
              width={100}
              height={100}
              alt="mongo"
              className="mb-2"
            />
            <span>mongoDB</span>
          </div> */}
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/skills/git.png"}
              width={100}
              height={100}
              alt="git"
              className="mb-2"
            />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/skills/nextjs.png"}
              width={100}
              height={100}
              alt="next.js"
              className="mb-2"
            />
            <span>Next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;