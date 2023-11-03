import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import ArrowRight from "../../public/home/arrow-right.svg"
export default function About_section() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen relative">
        {/* Title */}
        <span className="mt-[40px] text-black font-josefinsans font-normal text-[20px] w-full text-center">
          WHO WE ARE
        </span>
        {/* Content */}
        <div className="flex flex-col justify-center items-center">
          <p className="mt-[30px] mb-[25px] text-black font-worksans text-center font-medium text-[40px]">
            Experience the impact of Eaglesoft: crafting stunning <br />
            websites for organizations, startups, and shopping <br />
            agencies. Let us transform your digital presence into a <br />
            captivating online journey.
          </p>

          {/* Button */}
          <button
            id="button"
            className="flex flex-row items-center justify-between bg-yellowColor-0 text-black font-worksans font-medium text-[20px] mt-3 space-x-4 p-[20px]"
          >
            <a
              href="#"
              className=""
            >
              BOOK A CALL WITH US
            </a>
            <Image src={ArrowRight} width={24} height={24} alt="arrow right"/>
          </button>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className={styles["background-about-left-image"]}></div>
      <div className={styles["background-about-right-image"]}></div>
    </>
  );
}
