import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import webdevIcon from "../public/Heading/web_dev.svg";
import designIcon from "../public/Heading/design.svg";
import opensourceIcon from "../public/Heading/open_source.svg";
import researchIcon from "../public/Heading/research.svg";
import allIcon from "../public/Heading/all.svg";

export default function Heading() {
  const router = useRouter();
  return (
    <div>
      {/* title */}
      <span className="text-[60px] font-[900] text-[#09090B]">
        Recent Projects
      </span>
      {/* body_content */}
      <div className="flex flex-col pb-[75px] md:mb-0 md:flex-row justify-between">
        {/* Content */}
        <p className="leading-[32px] font-[500] text-[#71717A] text-[24px] max-w-[660px]">
          Explore my portfolio to see what I have been working on lately. From
          web design and web development to the intricacies of open sourcing and
          beyond, each project represents a unique chapter in my journey.
        </p>

        {/* Links & navigation */}
        <div className="flex flex-col space-y-[7px]">
          {/* First 2 navigation links */}
          <div className="flex flex-row space-x-[7px]">
            <Link
              href={"/"}
              className={`flex space-x-[6px] px-[21px] py-[11px] rounded-[9999px] ${
                router.pathname === "/webdev"
                  ? "bg-black text-white"
                  : "border-1 border-[#09090B] text-white bg-[#09090B]"
              }`}
            >
              <Image
                src={webdevIcon}
                width={20}
                height={20}
                alt="Web_dev_icon"
              />
              <span>Web dev</span>
            </Link>
            <Link
              href={"/design"}
              className={`flex space-x-[6px] px-[21px] py-[11px] rounded-[9999px] ${
                router.pathname === "/design"
                  ? "bg-black text-white"
                  : "border-2 border-[#09090B] bg-white text-[#09090B]"
              }`}
            >
              <Image
                src={designIcon}
                width={20}
                height={20}
                alt="design_icon"
              />
              <span>Design</span>
            </Link>
          </div>
          {/* Last 3 navigation links */}
          <div className="flex flex-row space-x-[7px]">
            <Link
              href={"/opensource"}
              className={`flex space-x-[6px] px-[21px] py-[11px] rounded-[9999px] ${
                router.pathname === "/webdev"
                  ? "bg-black text-white"
                  : "border-2 border-[#09090B] bg-white text-[#09090B]"
              }`}
            >
              <Image
                src={opensourceIcon}
                width={20}
                height={20}
                alt="opensource_icon"
              />
              <span>Open sourcing</span>
            </Link>
            <Link
              href={"/research"}
              className={`flex space-x-[6px] px-[21px] py-[11px] rounded-[9999px] ${
                router.pathname === "/research"
                  ? "bg-black text-white"
                  : "border-2 border-[#09090B] bg-white text-[#09090B]"
              }`}
            >
              <Image
                src={researchIcon}
                width={20}
                height={20}
                alt="research_icon"
              />
              <span>Research</span>
            </Link>
            <Link
              href={"/all"}
              className={`flex space-x-[6px] px-[21px] py-[11px] rounded-[9999px] ${
                router.pathname === "/all"
                  ? "bg-black text-white"
                  : "border-2 border-[#09090B] bg-white text-[#09090B]"
              }`}
            >
              <Image src={allIcon} width={20} height={20} alt="all_icon" />
              <span>all</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
