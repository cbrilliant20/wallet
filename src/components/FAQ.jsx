import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function FAQ() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  // const accordian = document.getElementsByClassName("accordian")
  // const Foo = () => {
  //   for (1 = 0; i < accordian.length; i++) {
  //     accordian[i].addEventListeener('click', function () {
  //       this.
  //     })
  //   }
  // }

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
            <>
              <div class="flex items-center  border-b border-gray-500 py-4">
                <span class="flex-1 active:bg-gray-500">
                  Lorem ipsum dolor sit?
                </span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  class={
                    isActive
                      ? "w-5 text-indigo-500 ml-2 transform rotate-180"
                      : "w-5 text-indigo-500 ml-2 "
                  }
                  onClick={handleClick}
                  className="chevron"
                ></FontAwesomeIcon>
              </div>
              {isActive && (
                <>
                  <p class=" py-4" className="accordian">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam labore, quibusdam est impedit dolor nesciunt
                    laudantium dolore quos similique tenetur?
                  </p>
                </>
              )}
            </>
            <>
              <div class="flex items-center  border-b border-gray-500 py-4">
                <span class="flex-1 active:bg-gray-500">
                  Lorem ipsum dolor sit?
                </span>

                <FontAwesomeIcon
                  icon={faChevronDown}
                  class={
                    isActive
                      ? "w-5 text-indigo-500 ml-2 transform rotate-180"
                      : "w-5 text-indigo-500 ml-2 "
                  }
                  onClick={handleClick}
                  className="chevron"
                ></FontAwesomeIcon>
              </div>
              {isActive && (
                <>
                  <p class="py-4 " className="accordian">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam labore, quibusdam est impedit dolor nesciunt
                    laudantium dolore quos similique tenetur?
                  </p>
                </>
              )}
            </>

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
