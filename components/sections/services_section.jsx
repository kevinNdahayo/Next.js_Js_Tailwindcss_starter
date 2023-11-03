import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import WebApp from "../../public/services/web_app_icon.svg"
import FrontEnd from "../../public/services/front_end_icon.svg"
import BackEnd from "../../public/services/back_end_icon.svg"
import CMS from "../../public/services/CMS.svg"
import UX from "../../public/services/UX.svg"
import WebHosting from "../../public/services/web_hosting.svg"


export default function services_section() {
  return (
    <div className="relative w-full">
      <div id="title_heading flex flex-col justify-center">
        {/* TITLE */}
        <div id="title" className="text-center  mt-[32px] mb-[22px]">
          <span className="font-josefinsans font-normal text-[20px]">
            OUR BEST SERVICES
          </span>
        </div>

        {/* HEADING */}
        <div id="heading" className="text-center mb-[22px]">
          <span className="font-worksans font-medium text-[40px]">
            We provide end-to-end solutions
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div
        id="content"
        className="flex flex-col md:flex-row w-full justify-between px-[60px]"
      >
        <div id="image_1" className="flex flex-col md:space-y-[40px]">
          {/* ICON 1 */}
          <div
            id="web_application"
            className="flex flex-col md:flex-row md:space-x-6"
          >
            <Image src={WebApp} width={40} height={34.38} alt="web_app_icon" />
            <div id="content" className="flex flex-col">
              <span className="font-worksans font-normal text-[20px]">
                Web Application Development
              </span>
              <p className="font-worksans font-normal text-[16px]">
                Crafting custom web apps and browser-based SAAS
              </p>
            </div>
          </div>

          {/* ICON 2 */}
          <div
            id="front-end"
            className="flex flex-col md:flex-row md:space-x-6"
          >
            <Image
              src={FrontEnd}
              width={40}
              height={34.38}
              alt="front_end icon"
            />
            <div id="content" className="flex flex-col">
              <span className="font-worksans font-normal text-[20px]">
                Front-End Development
              </span>
              <p className="font-worksans font-normal text-[16px]">
                Product agency that relates people relations <br /> by building
                UI Intefaces
              </p>
            </div>
          </div>

          {/* ICON 3 */}
          <div id="back-end" className="flex flex-col md:flex-row md:space-x-6">
            <Image src={BackEnd} width={40} height={34.38} alt="back_end icon"/>
            <div id="content" className="flex flex-col">
              <span className="font-worksans font-normal text-[20px]">
                Back-end Development
              </span>
              <p className="font-worksans font-normal text-[16px]">
                Powering apps with scripting and seamless database <br />
                integration
              </p>
            </div>
          </div>
        </div>

        <div id="image_2" className="flex flex-col md:space-y-[40px]">
          {/* ICON 4 */}
          <div id="CMS" className="flex flex-col md:flex-row md:space-x-6">
            <Image src={CMS} width={26} height={40} alt="CMS icon"/>
            <div id="content" className="flex flex-col">
              <span className="font-worksans font-normal text-[20px]">
                Content Management Solutions
              </span>
              <p className="font-worksans font-normal text-[16px]">
                Crafting tailored CMS for streamlined content <br /> management.
              </p>
            </div>
          </div>

          {/* ICON 5 */}
          <div id="UI/UX" className="flex flex-col md:flex-row md:space-x-6">
            <Image src={UX} width={40} height={33.48} alt="UX_ICON"/>
            <div id="content" className="flex flex-col">
              <span className="font-worksans font-normal text-[20px]">
                UI/UX Design
              </span>
              <p className="font-worksans font-normal text-[16px]">
                Enhancing UX/UI for intuitive, visually appealing <br />
                experiences.
              </p>
            </div>
          </div>

          {/* ICON 6 */}
          <div id="web_hosting" className="flex flex-col md:flex-row md:space-x-6">
            <Image src={WebHosting} width={40} height={37} alt="web_hosting"/>
            <div id="content" className="flex flex-col">
              <span className="font-worksans font-normal text-[20px]">
              Web Hosting and Deployment
              </span>
              <p className="font-worksans font-normal text-[16px]">
              Enabling hosting and deploying for online <br /> accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className={styles["background-services-image"]}></div>
    </div>
  );
}
