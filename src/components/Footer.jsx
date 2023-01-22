import Image from "next/image";
import React from "react";
import footer from "../../public/footer.png";

const Footer = () => {
  return <Image className="snap-start" src={footer} alt="footer" />;
};

export default Footer;
