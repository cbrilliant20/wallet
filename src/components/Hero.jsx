import React from "react"
import wallet1 from "../Assets/wallet1.png"
import Popover from "./Popover"

function Hero() {
  // const toggleClick = { Popover }
  return (
    <>
      {/* Hero */}
      <section class="relative">
        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/*Content*/}
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-indigo-500 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              An Online Budget Manager
            </h2>
            <p class="text-gray-500 text-lg text-center lg:text-left mb-6">
              A clean and simple interface to organize your online spending.
              Open Wallet in a new tab to see all of your online purchases.
              Download for free today.
            </p>
            <div class="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                class="btn btn-indigo hover:bg-white hover:text-black"
                // onClick={toggleClick}
              >
                {/* <Popover /> */}
                Get it on Chrome
              </button>
              <button
                type="button"
                class="btn btn-white hover:bg-indigo-500 hover:text-white"
              >
                Get it on Firefox
              </button>
            </div>
          </div>
          {/* Image */}
          <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              src={wallet1}
              alt=""
              class=" lg:w-full lg:h-full transform scale-125 md:w-4/5 md:h-4/5 sm:w-3/5 sm:h-3/5 "
            />
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div class="hidden md:block overflow-hidden bg-indigo-500 rounded-l-full absolute h-60 w-2/5 top-28 right-0 lg: -bottom-28 lg: right-26 md:top-36 md:w-2/6"></div>
      </section>
    </>
  )
}

export default Hero
