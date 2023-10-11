import React from "react"
import MoonIcon from "../images/moon.svg"
import SunIcon from "../images/sun.svg"

const Navigation = () => {
    // const toggleTheme = () => {
    //     if ("Dark" || "Light" === 0) {
    //         return "Dark"
    //     } else {
    //         return "Light"
    //     }
    // }
    // console.log("theme", toggleTheme)
  return (
    <nav>
      <div className="flex justify-between items-center lg:pt-[9rem] lg:px-[22.188rem] md:pt-[8.75rem] md:px-[6.063rem] pt-[1.938rem] px-[1.5rem]">
        <h1 className="text-[26px] font-bold text-[#222731]">devfinder</h1>
        <div className="flex items-center">
          <h4 className="text-[#697C9A] text-[13px] font-bold tracking-[2.5px] uppercase text-right">
           Dark
          </h4>
          {/* <h4 className="text-[#697C9A] text-[13px] font-bold tracking-[2.5px] uppercase text-right">
           Light
          </h4> */}
          <img src={MoonIcon} alt="" className="w-5 h-5 ml-5" />
          {/* <img src={SunIcon} alt="" className="w-5 h-5 ml-5" /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navigation