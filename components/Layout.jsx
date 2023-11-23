import React from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
import { urbanist } from "../fonts/fonts";

const Layout = ({ children }) => {
  return (
    <section className={`${urbanist.className} max-w-screen h-auto overflow-x-hidden mt-[14px] px-[16px] md:px-[42px] `}>
      <NavBar />
      <section className="h-full w-full justify-center items-center">
      <Heading />
      <main>{children}</main>
      </section>
    </section>
  );
};

export default Layout;
