import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWallet, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [menuOpen, setmMenuOpen] = useState(false)

  const handleClick = () => {
    setmMenuOpen(!menuOpen)
  }

  return (
    <>
      {/* Header */}
      <header id="home">
        <nav class="container flex items-center py-4 mt-4 sm:mt-12 text-indigo-500 uppercase text-base">
          <FontAwesomeIcon icon={faWallet} class="w-6 " />
          <h3 class="mx-2 text-base">wallet</h3>
          <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 ">
            <li class="cursor-pointer">
              <a href="#features">Features</a>
            </li>
            <li class="cursor-pointer">
              <a href="#testimonials">Testimonials</a>
            </li>

            <li class="cursor-pointer">
              <a href="#pricing">Pricing</a>
            </li>
            <li class="cursor-pointer">
              <a href="#FAQ">FAQ</a>
            </li>
            <li class="cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div class="flex sm:hidden flex-1 justify-end items-center">
            <FontAwesomeIcon
              icon={faBars}
              class="w-6 fixed z-20"
              type="button"
              onClick={handleClick}
            />
          </div>
          {menuOpen && (
            <div class="flex flex-col items-center justify-center bg-indigo-500 bg-opacity-90 fixed top-0 right-0 h-full w-full z-30  text-white">
              <ul class=" flex flex-col justify-center items-center sm:hidden gap-12 text-2xl  ">
                <li class="cursor-pointer">
                  <a href="#features" onClick={handleClick}>
                    Features
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a href="#testimonials" onClick={handleClick}>
                    Testimonials
                  </a>
                </li>

                <li class="cursor-pointer">
                  <a href="#pricing" onClick={handleClick}>
                    Pricing
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a href="#FAQ" onClick={handleClick}>
                    FAQ
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a href="#contact" onClick={handleClick}>
                    Contact
                  </a>
                </li>
              </ul>
              <FontAwesomeIcon
                icon={faTimes}
                class="w-6 mt-12"
                onClick={handleClick}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header
