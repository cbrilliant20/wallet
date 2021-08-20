import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import Testimonial from "../Assets/Testimonial.js"

function Testimonials() {
  return (
    <>
      <section class="mt-10 py-10 lg:mt-30" id="testimonials">
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
            {Testimonial.map((item, index) => {
              return (
                <div
                  key={index}
                  class="bg-gray-100 flex flex-col w-3/4 md:w-1/2 lg:w-1/4 items-center justify-center py-4 shadow w-4/5 transform hover:scale-105 duration-500"
                >
                  {/* Image */}

                  <img src={item.img} alt="" class="w-3/5 h-3/5 rounded-full" />

                  {/* Content */}
                  <div class="flex flex-col items-center justify-center gap-4 p-4 text-center">
                    <p class="text-sm">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        class="w-4 inline mx-2"
                      />
                      {item.quote}
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        class="w-4 inline mx-2"
                      />
                    </p>
                    <p class="text-indigo-500 text-lg">{item.name}</p>
                    <p class="text-gray-500 text-sm">{item.occupation}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
