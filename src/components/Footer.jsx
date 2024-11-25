import React from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      name="footer"
      className="w-full h-[96px] px-6 sm:px-24 flex md:flex justify-between items-center bg-[#002651] text-[#FEFEFE]"
    >
      <div className="flex gap-6">
        <button
          className="hover:scale-125 duration-200"
          onClick={() => openLink("https://wa.me/+6287741094197")}
        >
          <FaWhatsapp size="30px" />
        </button>
        <button
          className="hover:scale-125 duration-200"
          onClick={() =>
            openLink("https://www.linkedin.com/in/ray-mantiri-a026111b3/")
          }
        >
          <FaLinkedinIn size="30px" />
        </button>
        <button
          className="hover:scale-125 duration-200"
          onClick={() => openLink("mailto:rayhansmantiri@gmail.com")}
        >
          <FaRegEnvelope size="30px" />
        </button>
      </div>
      <h3 className="text-xs md:text-lg">2024 © Ray Hans Sebastian Mantiri</h3>
    </div>
  );
};

export default Footer;
