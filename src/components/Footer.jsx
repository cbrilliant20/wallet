import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWallet } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
function Footer() {
  return (
    <>
      <footer class="bg-black py-8">
        <div class="container flex flex-col md:flex-row item-center gap-6">
          <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12 text-white">
            <ul class="flex text-white uppercase gap-6 text-xs flex-wrap items-center justify-center">
              <li class="cursor-pointer">
                <a href="#home">Home</a>
              </li>
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
          </div>
          <div class="flex flex-1 flex-wrap items-center justify-center md:justify-center gap-12 text-white ">
            <FontAwesomeIcon icon={faTwitter} class="w-8" />
            <FontAwesomeIcon icon={faFacebook} class="w-8" />
            <FontAwesomeIcon icon={faInstagram} class="w-8" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
