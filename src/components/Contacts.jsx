import Image from "next/image";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import grab from "../../public/grablogo.png";
import toktok from "../../public/toktok.png";
import takoyaki from "../../public/takoyaki.png";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="cstm-flex-col h-auto min-h-screen p-5 gap-5 text-center relative overflow-hidden
                t:px-20"
    >
      <div
        className="w-full relative z-10
                  l-s:w-10/12"
      >
        <div className="cstm-grdbg-ylw-orng p-5 rounded-t-md">
          <p
            className="font-head text-xl text-center
                      m-l:text-2xl
                      t:text-4xl
                      l-s:text-6xl
                      l-l:text-7xl"
          >
            MESSAGE US
          </p>
          <p
            className="font-body italic text-sm font-medium
                      l-s:text-xl
                      l-l:text-2xl"
          >
            FOR ORDERS OR INQUIRIES
          </p>
        </div>
        <div
          className="shadow-md rounded-md p-5 cstm-flex-col gap-5 font-body bg-white
                    t:cstm-flex-row t:justify-around
                    l-s:p-10"
        >
          <div>
            <AiFillPhone
              className="rotate-90 mx-auto scale-150 mb-2
                        l-s:scale-[1.75]
                        l-l:scale-[2.5] l-l:mb-5"
            />
            <p
              className="text-sm
                        m-l:text-base
                        l-s:text-xl
                        l-l:text-2xl"
            >
              0912 345 6789
            </p>
          </div>
          <div>
            <FaFacebook
              className="mx-auto scale-150 mb-2
                        l-s:scale-[1.75]
                        l-l:scale-[2.5] l-l:mb-5"
            />
            <p
              className="text-sm
                        m-l:text-base
                        l-s:text-xl
                        l-l:text-2xl"
            >
              facebook.com/takomommy
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full relative z-10
                  l-s:w-10/12"
      >
        <div className="cstm-grdbg-ylw-orng p-5 rounded-t-md">
          <p
            className="font-head text-xl text-center
                      m-l:text-2xl
                      t:text-4xl
                      l-s:text-6xl
                      l-l:text-7xl"
          >
            PICK UPS OR DELIVERY
          </p>
          <p
            className="font-body italic text-sm font-medium
                      l-s:text-xl
                      l-l:text-2xl"
          >
            FOR BUYERS NEAR US
          </p>
        </div>
        <div
          className="shadow-md rounded-md p-5 font-body bg-white
                    l-s:p-10"
        >
          <IoLocation
            className="mx-auto scale-150 mb-2
                      l-s:scale-[1.75]
                      l-l:scale-[2.5] l-l:mb-5"
          />
          <p
            className="text-sm
                      m-l:text-base
                      l-s:text-xl
                      l-l:text-2xl"
          >
            20 Street, City / Municipality
          </p>
        </div>
      </div>
      <div
        className="w-full relative z-10
                  l-s:w-10/12"
      >
        <div className="cstm-grdbg-ylw-orng p-5 rounded-t-md">
          <p
            className="font-head text-xl text-center
                      m-l:text-2xl
                      t:text-4xl
                      l-s:text-6xl
                      l-l:text-7xl"
          >
            THIRD PARTY SERVICES
          </p>
          <p
            className="font-body italic text-sm font-medium
                      l-s:text-xl
                      l-l:text-2xl"
          >
            FOR DISTANT BUYERS
          </p>
        </div>
        <div
          className="shadow-md rounded-md p-5 cstm-flex-col gap-5 bg-white
                    t:cstm-flex-row t:justify-around
                    l-s:p-10"
        >
          <Image
            src={grab}
            alt="grab"
            className="w-24
                      t:w-36
                      l-l:w-44"
          />
          <Image
            src={toktok}
            alt="toktok"
            className="w-24
                      t:w-36
                      l-l:w-44"
          />
        </div>
      </div>
      <Image
        src={takoyaki}
        alt="takoyaki"
        className="w-full absolute scale-150 -translate-x-40 opacity-50
                  t:w-8/12 t:scale-100 t:-translate-x-72
                  l-s:-translate-x-96 l-s:scale-90
                  l-l:scale-75 l-l:-translate-x-[34rem]"
      />
    </div>
  );
};

export default Contacts;
