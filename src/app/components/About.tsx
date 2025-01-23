import React from 'react'
import { AiFillBulb } from 'react-icons/ai'

const About = () => {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className=" max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-bold py-3 px-5 rounded-full flex items-center gap-2 font">
            <span className="">
              <AiFillBulb className="w-4 h-4" />
            </span>
            自己紹介
          </p>
        </div>
        {/* メイン文 */}
        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9 font-bold">
          はじめまして！私は、Reactを活用してモダンで使いやすいホームページを作成するフルスタック開発者です。<br/>現在、副業としてホームページ制作を行っており、ユーザーエクスペリエンスを重視したデザインと機能性を追求しています。Reactをはじめとした最新の技術を駆使し、モバイルフレンドリーなウェブサイトを構築します。<br/>また、要件定義からデプロイまで一貫してサポートし、SEO対策やパフォーマンス最適化にも対応可能です。企業様や個人のニーズに合わせたオリジナルサイトを提供いたしますので、ぜひお気軽にご相談ください！
          </p>
        </div>

      </div>
    </section>

  )
}

export default About