import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"

function Pricing() {
  return (
    <>
      <section class="mt-20 py-20 lg:mt-20 bg-gray-100" id="pricing">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-indigo-500">Pricing</h1>
          <p class="text-gray-500 mt-4 text-center">
            We have an option for everyone! See our best offers below.
          </p>
        </div>

        <div class="relative mt-20 lg:mt-40">
          <div class="container flex lg:flex-row items-center flex-col  justify-center gap-4 ">
            {/* Card #1 */}
            <div class=" flex flex-col  lg:w-1/3 items-center justify-center shadow w-full ">
              {/* Top Half */}
              <div class="flex flex-col items-center justify-between py-4 gap-4 h-fit">
                <p class="text-gray-400">Free</p>
                <p class="text-7xl text-indigo-500">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    class="inline w-3 mx-1 align-top"
                  />
                  0
                </p>
                <p class="text-gray-400">Monthly</p>
                <button class="btn btn-indigo hover:bg-white hover:text-black">
                  Get Started
                </button>
              </div>
              {/* Bottom Half */}
              <div class="flex flex-col items-left justify-center w-full h-full gap-4 bg-gray-200  p-4 text-left text-sm">
                <p>Lorem ipsum dolor sit amet amet dolor dolor..</p>
                <p>Lorem ipsum dolor sit amet dolor.</p>
                <p class="text-gray-400">Lorem ipsum dolor sit dolor.</p>
                <p class="text-gray-400">Lorem ipsum dolor sit.</p>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  error!
                </p>
              </div>
            </div>

            {/* Card #2 */}
            <div class=" flex flex-col  lg:w-1/3 items-center justify-center shadow w-full ">
              {/* Top Half */}
              <div class="flex flex-col items-center justify-between py-4 gap-4 h-fit">
                <p class="text-gray-400">Basic</p>
                <p class="text-7xl text-indigo-500 ">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    class="inline w-3 mx-1 align-top"
                  />
                  15
                </p>
                <p class="text-gray-400">Monthly</p>
                <button class="btn btn-indigo hover:bg-white hover:text-black">
                  Get Started
                </button>
              </div>
              {/* Bottom Half */}
              <div class="flex flex-col items-left justify-center w-full h-full gap-4 bg-gray-100 bg-gray-200 p-4 text-left text-sm">
                <p>Lorem ipsum dolor sit amet amet dolor dolor..</p>
                <p>Lorem ipsum dolor sit amet dolor.</p>
                <p>+ Lorem ipsum dolor sit dolor.</p>
                <p>+ Lorem ipsum dolor sit.</p>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  error!
                </p>
              </div>
            </div>

            {/* Card #3 */}
            <div class=" flex flex-col  lg:w-1/3 items-center justify-center shadow w-full ">
              {/* Top Half */}
              <div class="flex flex-col items-center justify-between py-4 gap-4 h-fit">
                <p class="text-gray-400">Advanced</p>
                <p class="text-7xl text-indigo-500">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    class="inline w-3 mx-1 align-top"
                  />
                  25
                </p>
                <p class="text-gray-400">Monthly</p>
                <button class="btn btn-indigo hover:bg-white hover:text-black">
                  Get Started
                </button>
              </div>
              {/* Bottom Half */}
              <div class="flex flex-col items-left justify-center w-full h-full gap-4 bg-gray-100 bg-gray-200 p-4 text-left text-sm">
                <p>Lorem ipsum dolor sit amet amet dolor dolor..</p>
                <p>Lorem ipsum dolor sit amet dolor.</p>
                <p>Lorem ipsum dolor sit dolor.</p>
                <p>Lorem ipsum dolor sit.</p>
                <p>
                  + Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                  + Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Modi, error!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
