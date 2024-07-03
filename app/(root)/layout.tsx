import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

//this layout works for all the routes inside the root component

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
