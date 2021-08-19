import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

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
            <div class="flex items-center  border-b border-gray-500 py-4">
              <span class="flex-1 ">Lorem ipsum dolor sit?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                class="w-5 text-indigo-500"
              />
            </div>

            <div class="flex items-center  border-b border-gray-500 py-4">
              <span class="flex-1 ">
                Lorem ipsum dolor sit amet consectetur?
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                class="w-5 text-indigo-500"
              />
            </div>

            <div class="flex items-center  border-b border-gray-500 py-4">
              <span class="flex-1 ">Lorem ipsum dolor sit amet?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                class="w-5 text-indigo-500"
              />
            </div>

            <div class="flex items-center  border-b border-gray-500 py-4">
              <span class="flex-1 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                class="w-5 text-indigo-500"
              />
            </div>
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
