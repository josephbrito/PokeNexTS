import React, { PropsWithChildren, ReactChild, ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
