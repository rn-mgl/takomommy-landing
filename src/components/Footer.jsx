import Image from "next/image";
import React from "react";
import footer from "../../public/footer.png";

const Footer = () => {
  return <Image id="footer" src={footer} alt="footer" />;
};

export default Footer;
