import React from "react"
import wallet2 from "../Assets/wallet2.png"
import wallet3 from "../Assets/wallet3.png"
import wallet4 from "../Assets/wallet4.png"

function Features() {
  return (
    <>
      <section class="bg-gray-100 py-20 mt-20 lg:mt-60">
        {/* Heading */}
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-indigo-500">Features</h1>
          <p class="text-gray-500 mt-4 text-center">
            Our aim is to make it quick and easy for you to track your online
            spending. Your purchases sync between all of your devices so you can
            access them on the go.
          </p>
        </div>
        {/* Feature #1 */}
        <div class="relative mt-20 lg:mt-24">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                src={wallet2}
                alt=""
                class="w-full h-full  md:w-full md:h-full sm:w-3/5 sm:h-3/5"
              />
            </div>
            {/* Content */}
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl text-indigo-500 ">View in one click</h1>
              <p class="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Organize your spending however you like. Our drag-and-drop
                interface gives you complete control over how you manage your
                budget.
              </p>
              <button
                type="button"
                class="btn btn-indigo hover:bg-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div class="hidden lg:block overflow-hidden bg-indigo-500 rounded-r-full absolute h-60 w-2/5  lg: -bottom-24 lg: left-26"></div>
        </div>

        {/* Feature #2 */}
        <div class="relative mt-20 lg:mt-52">
          <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image */}
            <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                src={wallet3}
                alt=""
                class="w-full h-full  md:w-full md:h-full sm:w-3/5 sm:h-3/5"
              />
            </div>
            {/* Content */}
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl text-indigo-500 ">
                Intelligent recomendations
              </h1>
              <p class="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Our powerful recommendation tool will suggest ways to meet your
                savings goals.
              </p>
              <button
                type="button"
                class="btn btn-indigo hover:bg-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div class="hidden lg:block overflow-hidden bg-indigo-500 rounded-l-full absolute h-60 w-2/5 top-30 right-0 lg: -bottom-24 lg: right-26 "></div>
        </div>

        {/* Feature #3 */}
        <div class="relative mt-20 lg:mt-52">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                src={wallet4}
                alt=""
                class="w-full h-full  md:w-full md:h-full sm:w-3/5 sm:h-3/5"
              />
            </div>
            {/* Content */}
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl text-indigo-500 ">Share your progress</h1>
              <p class="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Easily share your progress with others. Create a shareable link
                you can send at the click of a button
              </p>
              <button
                type="button"
                class="btn btn-indigo hover:bg-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div class="hidden lg:block overflow-hidden bg-indigo-500 rounded-r-full absolute h-60 w-2/5  lg: -bottom-24 lg: left-26 "></div>
        </div>
      </section>
    </>
  )
}

export default Features
