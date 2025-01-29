"use client";
import React, { useRef } from "react";
import {
  AiFillBulb,
  AiFillInstagram,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { FaXTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_kxrnvsf",
          "template_sjvyk5a",
          form.current,
          "Y8FdO2cpa-YnaH104"
        )
        .then(
          () => {
            form.current?.reset();
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section
      className="w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクション タイトル*/}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-bold py-3 px-5 rounded-full flex items-center gap-2 mb-10 ">
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>

        {/* 左 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="font-bold">
              日々新しいプロジェクトを作成しています。
              <br />
              ご相談お問い合わせはこちらからお気軽にご相談ください。
              <br />
              メッセージには可能な限り早く返信させていただきます。
            </p>
            <p className="mt-12 font-bold">連絡先はこちら</p>
            <h4 className="text-lg font-medium text-darkblue">
              s20970059@nucba.ac.jp
            </h4>

            {/* sns */}
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5 className="font-bold">SNS</h5>
                <div className="flex gap-5">
                  <a href="" className="text-3xl text-darkblue">
                    <AiFillInstagram />
                  </a>
                  <a href="" className="text-3xl text-darkblue">
                  <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 右 */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="お名前"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="メールアドレス"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="タイトル"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />

              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-darkblue text-white font-medium py-3 px-6 rounded hover:shadow-lg hover:bg-darkblue/70"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
