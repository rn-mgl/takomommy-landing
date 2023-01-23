import React from "react";
import Image from "next/image";
import pan from "../../public/pan.png";

const Prices = async () => {
  const prices = await fetchPrices();

  return (
    <div
      id="prices"
      className="cstm-flex-col h-auto min-h-screen cstm-grdbg-blk-sc-mn p-5 text-center gap-5 relative overflow-hidden
                t:px-20"
    >
      <p
        className="font-head text-red-mn text-3xl relative z-10
                  m-m:text-4xl
                  t:text-6xl
                  l-s:text-7xl
                  l-l:text-8xl"
      >
        PRICES PER BOX AND FLAVORS
      </p>
      <div
        className="cstm-flex-col gap-5 w-full relative z-10
                  t:grid t:grid-cols-2
                  l-s:w-10/12"
      >
        {prices.map(({ quantity, flavors }) => {
          return (
            <div
              key={quantity}
              className="w-full
                        m-l:w-10/12
                        t:w-full"
            >
              <div
                className="bg-wht rounded-t-md p-5 font-head text-2xl
                          t:text-3xl
                          l-l:text-4xl"
              >
                {quantity}
              </div>
              <div
                className="rounded-b-md cstm-grdbg-red-mn-sc p-5 font-body text-wht font-medium cstm-flex-col gap-5
                          l-s:text-lg
                          l-l:text-2xl"
              >
                <div className="cstm-flex-row w-full">
                  <p className="mr-auto">HAM & CHEESE</p>
                  <p>{flavors.ham}</p>
                </div>
                <div className="cstm-flex-row w-full">
                  <p className="mr-auto">SPAM & CHEESE</p>
                  <p>{flavors.spam}</p>
                </div>
                <div className="cstm-flex-row w-full">
                  <p className="mr-auto">CRAB & CORN</p>
                  <p>{flavors.crab}</p>
                </div>
                <div className="cstm-flex-row w-full">
                  <p className="mr-auto">OCTOBITS</p>
                  <p>{flavors.octo}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={pan}
        alt="pan"
        className="absolute w-full scale-[2] translate-x-32 -rotate-12
                  t:scale-110 t:translate-x-72 t:translate-y-36
                  l-s:scale-125
                  l-l:scale-110 l-l:translate-x-[27rem] l-l:translate-y-44"
      />
    </div>
  );
};

export default Prices;

const fetchPrices = async () => {
  const { prices } = await import("../../data/prices");

  return prices;
};
