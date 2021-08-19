import React from "react"

function Contact() {
  return (
    <>
      <section class="bg-indigo-500 text-white py-20" id="contact">
        <div class="container">
          <div class="sm:w-3/4 lg:w-2/4 mx-auto">
            <p class="font-light uppercase text-center mb-8">
              20,000+ already joined
            </p>
            <h1 class="text-3xl text-center">
              Stay up-to-date with the latest changes
            </h1>
            <div class="flex flex-col sm:flex-row gap-6 mt-8">
              <input
                type="text"
                placeholder="Enter your email address"
                class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
              />
              <button
                type="button"
                class="btn bg-red-500 hover:bg-white hover:text-black"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
