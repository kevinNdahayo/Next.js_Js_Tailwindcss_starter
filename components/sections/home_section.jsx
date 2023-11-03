import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Hero from "../../public/home/hero_img.svg"
import ArrowRight from "../../public/home/arrow-right.svg"
export default function Home_section() {
  return (
    <>
      {/* CONTENT AND ILLUSTRATION*/}
      <div
        id="content_illustration"
        className="mt-[170px] mx-[60px] flex flex-col-reverse md:flex-row justify-between w-full"
      >
        {/* CONTENT */}
        <div id="content">
          <div id="title" className={styles.titleContent}>
            Let&apos;s build
            <span className="mx-2 text-white">
              Digital <br />
              products
            </span>
            together <br />
            for life
          </div>

          <div
            id="paragraph"
            className="text-black font-josefinsans font-normal mt-[12px] text-[20px]"
          >
            Elevate your online presence with Eaglesoft. We <br /> create
            stunning websites for organizations, <br /> startups, and shopping
            agencies, turning visions <br /> into impactful realities.
          </div>

          <button
            id="button"
            className="flex flex-row items-center justify-between px-4 py-2 bg-white text-black font-worksans font-medium text-[20px] mt-3 space-x-2"
          >
            <a href="#" className="text-black hover:cursor-pointer">ABOUT US</a>
            <Image src={ArrowRight} width={24} height={24} alt="Arrow right"/>
          </button>

        </div>
        {/* ILLUSTRATION */}
        <div id="illustration">
          <Image
            src={Hero}
            width={595.89}
            height={456}
            className="hidden md:block"
            alt="hero image"
          />
        </div>
      </div>

      {/* BACKGROUND-IMAGE */}
      <div className={styles["background-image"]}></div>
    </>
  );
}
