import { FAQ } from "../Assets/FAQ"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Accordian = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (index) => {
    if (isActive === index) {
      return setIsActive(null)
    }
    setIsActive(index)
  }

  return (
    <div>
      {FAQ.map((item, index) => {
        return (
          <div key={index}>
            <div
              class="flex items-center py-4 cursor-pointer"
              onClick={() => handleClick(index)}
              key={index}
            >
              <span class="flex-1 active:bg-gray-500" key={index}>
                {item.question}
              </span>

              <FontAwesomeIcon
                icon={faChevronDown}
                class={
                  isActive === index
                    ? "w-5 text-indigo-500 ml-2 transform rotate-180"
                    : "w-5 text-indigo-500 ml-2 "
                }
              ></FontAwesomeIcon>
            </div>
            {isActive === index && (
              <div class="text-indigo-500 mb-5 w-3/4 transform duration-500">
                <p key={index}>{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordian
