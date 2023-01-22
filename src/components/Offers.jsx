import Image from "next/image";
import React from "react";
import flavors from "../../public/flavors.png";
import sizes from "../../public/sizes.png";
import events from "../../public/events.png";

const Offers = () => {
  return (
    <div className="cstm-flex-col min-h-screen h-auto relative snap-start w-full p-5 gap-10 l-s:px-20">
      <div
        className="w-full cstm-flex-col text-center
                  t:cstm-flex-row t:gap-5 t:text-left
                  l-s:gap-20"
      >
        <div className="t:w-3/6">
          <div
            className="w-full font-head  cstm-cheat-bg-ylw bg-bottom bg-75 
                      m-l:bg-85
                      t:bg-100"
          >
            <p
              className="drop-shadow-text text-5xl
                      m-m:text-6xl
                      m-l:text-7xl
                      l-s:text-8xl
                      l-l:text-9xl"
            >
              VARIOUS
              <br />
              FLAVORS
            </p>
          </div>
          <p
            className="w-full font-body 
                      l-s:text-lg
                      l-l:text-xl"
          >
            flavors to try <br /> flavors you will love <br /> flavors you will always look for
          </p>
        </div>

        <Image className="w-full t:w-3/6" src={flavors} alt="flavors" />
      </div>
      <div
        className="w-full cstm-flex-col text-center
                  t:cstm-flex-row t:gap-5 t:text-right
                  l-s:gap-20"
      >
        <div className="t:w-3/6 t:order-2">
          <div
            className="w-full font-head  cstm-cheat-bg-ylw bg-bottom bg-75 
                        m-l:bg-85
                        t:bg-100"
          >
            <p
              className="drop-shadow-text text-5xl
                      m-m:text-6xl
                      m-l:text-7xl
                      l-s:text-8xl
                      l-l:text-9xl"
            >
              SEVERAL
              <br />
              SIZES
            </p>
          </div>
          <p
            className="w-full font-body 
                      l-s:text-lg
                      l-l:text-xl"
          >
            different sizes and quantity <br /> for your family, your friends <br /> or take it all,
            we {`won't`} judge
          </p>
        </div>

        <Image className="w-full t:w-3/6 t:order-1" src={sizes} alt="flavors" />
      </div>
      <div
        className="w-full cstm-flex-col text-center
                  t:cstm-flex-row t:gap-5 t:text-left
                  l-s:gap-20"
      >
        <div className="t:w-3/6">
          <div
            className="w-full font-head  cstm-cheat-bg-ylw bg-bottom bg-75 
                      m-l:bg-85
                      t:bg-100"
          >
            <p
              className="drop-shadow-text text-5xl
                      m-m:text-6xl
                      m-l:text-7xl
                      l-s:text-8xl
                      l-l:text-9xl"
            >
              ANY
              <br />
              EVENTS
            </p>
          </div>
          <p
            className="w-full font-body 
                      l-s:text-lg
                      l-l:text-xl"
          >
            no food for certain occasions? <br /> we got you covered!
          </p>
        </div>

        <Image className="w-full t:w-3/6" src={events} alt="flavors" />
      </div>
    </div>
  );
};

export default Offers;
