import React from "react";
import Image from "next/image";
import Styles from "../../styles/Home.module.css";
import ArrowRight from "../../public/home/arrow-right.svg"

export default function work_section() {
  return (
    <div className="w-full px-[60px] flex flex-col md:flex-row justify-between">
      {/* HEADINGS */}
      <div id="heading" className="w-1/2  md:pt-[174px]">
        <div id="title" className="font-medium text-[80px] mb-[2px]">
          Start a project ?
        </div>
        <div id="case_studies" className="flex">
          <span className="font-medium text-[30px] text-white font-josefinsans">
            Let’s work together
          </span>
        </div>
      </div>

      {/* FORM */}
      <form
        id="contact-form"
        className="w-1/2 mt-[30px] self-start flex flex-col bg-white text-black rounded-[20px] px-[33px] pt-[40px] md:space-y-[36px]"
      >
        {/* Title */}
        <div className="pb-[20px]">
          <span className="font-medium font-josefinsans text-[20px]">
            GET IN TOUCH
          </span>
        </div>

        {/* FORM ELEMENTS */}
        <div className="flex flex-col md:flex-row md:space-x-[16px]">
          {/* INPUT 1: FIRSTNAME */}
          <div className="flex flex-col">
            <span className="font-worksans font-normal text-[14px]">
              First Name
            </span>
            <input
              type="text"
              placeholder="Enter First name"
              className="p-[8px] md:w-[250px] focus:outline-none border border-[#DEDEDE]"
              required
            />
          </div>

          {/* INPUT 2: LASTNAME */}
          <div className="flex flex-col">
            <span className="font-worksans font-normal text-[14px]">
              Last Name
            </span>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="p-[8px] md:w-[250px] focus:outline-none border border-[#DEDEDE]"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-[16px]">
          {/* INPUT 3: EMAIL */}
          <div className="flex flex-col">
            <span className="font-worksans font-normal text-[14px]">Email</span>
            <input
              type="email"
              placeholder="Enter Email"
              className="p-[8px] md:w-[250px] focus:outline-none border border-[#DEDEDE]"
              required
            />
          </div>

          {/* INPUT 4: PHONE */}
          <div className="flex flex-col">
            <span className="font-worksans font-normal text-[14px]">
              Phone number
            </span>
            <input
              type="number"
              placeholder="Ex: +250785546748"
              className="p-[8px] md:w-[250px] focus:outline-none border border-[#DEDEDE]"
              required
            />
          </div>
        </div>

        <div>
          {/* INPUT 5: MESSAGE */}
          <div className="flex flex-col w-full">
            <span className="font-worksans font-normal text-[14px]">
              Message
            </span>
            <textarea className="p-[8px] focus:outline-none border border-[#DEDEDE] ">
            </textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            id="button"
            className="w-full flex flex-row items-center justify-center bg-yellowColor-0 text-black font-worksans font-medium text-[20px] mt-3 md:pt-[16px] mb-[20px] space-x-4 pb-[20px] rounded-[12px]"
          >
            <a href="#" className="">
              SUBMIT
            </a>
            <Image src={ArrowRight} width={24} height={24} alt="arrow right"/>
          </button>
        </div>
      </form>
    </div>
  );
}
