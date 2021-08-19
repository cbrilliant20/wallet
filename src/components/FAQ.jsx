import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Accordian from "./Accordian"

function FAQ() {
  return (
    <>
      <section class="py-20" id="FAQ">
        <div class="container">
          <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 class="text-3xl text-center text-indigo-500">
              Frequently Asked Questions
            </h1>
            <p class="text-gray-500 mt-4 text-center">
              Here are some of our Frequently Asked Questions. If you ever have
              any other questions feel free to email us!
            </p>
          </div>

          {/* FAQ Items */}
          <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <Accordian />
            <button
              type="button"
              class="flex self-center btn btn-indigo hover:bg-white hover:text-black mt-12"
            >
              More Info
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
