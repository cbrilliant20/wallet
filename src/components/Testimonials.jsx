import React from "react"
import testimonial1 from "../Assets/testimonial1.jpg"
import testimonial2 from "../Assets/testimonial2.jpg"
import testimonial3 from "../Assets/testimonial3.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

function Testimonials() {
  return (
    <>
      <section class="mt-20 py-20 lg:mt-40" id="testimonials">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-indigo-500">Testimonials</h1>
          <p class="text-gray-500 mt-4 text-center">
            Our customers love us! Read what they have to say below.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div class="relative mt-20 lg:mt-40">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Card #1 */}
            <div class="bg-gray-100 flex flex-col  lg:w-1/4 items-center justify-center py-4 shadow transform hover:scale-105 duration-500 w-1/2 ">
              {/* Image */}

              <img src={testimonial3} alt="" class="w-3/5 h-3/5 rounded-full" />

              {/* Content */}
              <div class="flex flex-col items-center justify-center gap-4 p-4 text-center">
                {/* <FontAwesomeIcon icon={faQuoteLeft} class="w-5 inline" /> */}
                <p class="text-sm">
                  <FontAwesomeIcon icon={faQuoteLeft} class="w-4 inline mx-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  velit soluta, ipsam quaerat at magnam consequatur veniam
                  consequuntur inventore repudiandae.
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    class="w-4 inline mx-2"
                  />
                </p>
                <p class="text-indigo-500 text-lg">Rachel Chester</p>
                <p class="text-gray-500 text-sm">Soccer Mom</p>
              </div>
            </div>

            {/* Card #2 */}
            <div class="bg-gray-100 flex flex-col  lg:w-1/4 items-center justify-center py-4 shadow transform hover:scale-105 duration-500 w-1/2 ">
              {/* Image */}

              <img src={testimonial1} alt="" class="w-3/5 h-3/5 rounded-full" />

              {/* Content */}
              <div class="flex flex-col items-center justify-center gap-4 p-4 text-center">
                {/* <FontAwesomeIcon icon={faQuoteLeft} class="w-5 inline" /> */}
                <p class="text-sm">
                  <FontAwesomeIcon icon={faQuoteLeft} class="w-4 inline mx-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  velit soluta, ipsam quaerat at magnam consequatur veniam
                  consequuntur inventore repudiandae quaerat at magnam
                  consequatur.
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    class="w-4 inline mx-2"
                  />
                </p>
                <p class="text-indigo-500 text-lg">Tom Jones</p>
                <p class="text-gray-500 text-sm">Scuba Diver</p>
              </div>
            </div>

            {/* Card #3 */}
            <div class="bg-gray-100 flex flex-col  lg:w-1/4 items-center justify-center py-4 shadow transform hover:scale-105 duration-500 w-1/2 ">
              {/* Image */}

              <img src={testimonial2} alt="" class="w-3/5 h-3/5 rounded-full" />

              {/* Content */}
              <div class="flex flex-col items-center justify-center gap-4 p-4 text-center">
                {/* <FontAwesomeIcon icon={faQuoteLeft} class="w-5 inline" /> */}
                <p class="text-sm">
                  <FontAwesomeIcon icon={faQuoteLeft} class="w-4 inline mx-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  velit soluta, ipsam quaerat at magnam consequatur veniam
                  consequuntur inventore repudiandae.
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    class="w-4 inline mx-2"
                  />
                </p>
                <p class="text-indigo-500 text-lg">Sally Smith</p>
                <p class="text-gray-500 text-sm">Barrista</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
