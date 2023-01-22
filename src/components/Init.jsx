import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import bg from "../../public/takoyaki-tupper.png";

const Init = () => {
  return (
    <div
      className={`cstm-flex-col w-full p-5 cstm-grdbg-blk-sc-mn max-h-screen h-screen text-center gap-5 overflow-hidden relative snap-start l-s:px-20`}
    >
      <Image
        className="w-36
                  t:w-44
                  l-s:mr-auto l-s:w-52"
        src={logo}
        alt="Logo"
      />
      <div className="my-auto">
        <p
          className="text-red-mn font-head text-2xl
                  m-l:text-3xl
                  t:text-5xl
                  l-s:text-7xl
                  l-l:text-8xl"
        >
          A TASTE THAT YOU WILL ALWAYS COME BACK TO
        </p>
        <p
          className="text-wht text-xs font-body
                  m-l:text-sm
                  t:text-lg
                  l-s:text-xl
                  l-l:text-2xl"
        >
          takoyaki that you will always remember
        </p>
      </div>

      <p
        className="text-red-mn text-xs font-medium font-body
                  m-l:text-sm
                  t:text-lg
                  l-s:text-xl
                  l-l:text-2xl"
      >
        AVAILABLE EVERY SATURDAY AND SUNDAY
      </p>
      <Image
        className="absolute w-full z-0 rotate-45 opacity-80 scale-[1.7] translate-x-40 translate-y-40
                  t:scale-110
                  l-s:scale-75 l-s:translate-x-96
                  l-l:scale-75 l-l:translate-x-[29rem] l-l:translate-y-64"
        src={bg}
        alt="Logo"
        priority={true}
      />
    </div>
  );
};

export default Init;
