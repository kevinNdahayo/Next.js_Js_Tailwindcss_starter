import React from "react";
import Image from "next/image";
import ArrowHead from "../public/project/Arrow_ahead.svg";
import Link from "next/link";

function projectCard() {
  return (
    <div className="text-[#09090B] bg-white flex flex-col justify-between md:flex-row">
        <div>
      {/* title */}
      <span className="text-[36px] font-[700] leading-[40px] uppercase">Street Bridge Foundation</span>
      {/* description */}
      <p>
        Youth empowered Charity NGO that helps street kids and their families
      </p>
      {/* tech_stacks */}
      <div className="flex flex-col md:flex-row">
        {/* tags */}
        <div>
          <span>Typescript</span>
          <span>Next</span>
          <span>Tailwind</span>
          <span>Postgres</span>
        </div>
      </div>
      </div>
      {/* Links to navigation*/}
      <div className="flex flex-row justify-end items-end">
        <div className="flex flex-row">
        {/* Live demo */}
        <Link href={""}>Live demo</Link>
        {/* source code */}
        <Link href={""}>Source code</Link>
        {/* details */}
        <span>details</span>
        </div>
        <div>
            <Image src={ArrowHead} width={64} height={64} alt="Arrow_ahead"/>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
