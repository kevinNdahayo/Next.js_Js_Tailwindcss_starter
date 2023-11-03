import React from "react";
import Image from "next/image";
import Styles from "../../styles/Home.module.css";
import ArrowRight from "../../public/work/arrow-right.svg"
import NextIcon from "../../public/work/next_icon.svg"


export default function work_section() {
  return (
    <div className="w-full px-[60px] flex flex-col md:flex-row justify-between items-center">
      {/* HEADINGS */}
      <div id="heading">
        <div id="title" className="font-medium text-[80px] mb-[40px]">
          Our Latest <br /> Work
        </div>
        <div id="case_studies" className="flex flex-row md:space-x-[15px]">
          <span className="font-medium text-[16px] font-worksans text-[#FFC51F]">
            OUR CASE STUDIES
          </span>
          <Image src={ArrowRight} width={24} height={24} alt="arrow right icon"/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 relative">
        {/* CARDS 1 */}
        <div id="cards" className={Styles.backgroundCardImage1}>
          {/* TITLE */}
          <span
            id="title"
            className="font-medium font-worksans text-[18px] text-white"
          >
            Street Bridge - New UI/UX
          </span>
          {/* BUTTON */}
          <div
            id="case_studies"
            className="flex flex-row md:space-x-[15px] mt-[12px]"
          >
            <span className="font-medium text-[16px] font-worksans text-[#FFC51F]">
              CASE STUDY
            </span>
            <Image src={ArrowRight} width={24} height={24} alt="arrow right icon"/>
          </div>
        </div>

        {/* CARDS 2 */}
        <div id="cards" className={Styles.backgroundCardImage2}>
          {/* TITLE */}
          <span
            id="title"
            className="font-medium font-worksans text-[18px] text-white"
          >
            Street Bridge - Website
          </span>
          {/* BUTTON */}
          <div
            id="case_studies"
            className="flex flex-row md:space-x-[15px] mt-[12px]"
          >
            <span className="font-medium text-[16px] font-worksans text-[#FFC51F]">
              CASE STUDY
            </span>
            <Image src={ArrowRight} width={24} height={24} alt="right arrow icon"/>
          </div>
        </div>

        {/* NEXT ICON */}
        <Image
          src={NextIcon}
          className={Styles.nextIcon}
          width={50}
          height={50}
          alt="next_icon"
        />
      </div>
    </div>
  );
}
