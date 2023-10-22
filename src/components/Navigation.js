import React from "react"
import { BsMoonFill, /*BsSunFill*/ } from "react-icons/bs"

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
      <div className="flex justify-between items-center ">
        <h1 className="text-[26px] font-bold text-[#222731]">devfinder</h1>
        <div className="flex items-center gap-5">
          <h4 className="text-[#697C9A] text-[13px] font-bold tracking-[2.5px] uppercase text-right">
           Dark
          </h4>
          {/* <h4 className="text-[#697C9A] text-[13px] font-bold tracking-[2.5px] uppercase text-right">
           Light
          </h4> */}
          <BsMoonFill size={30} className="w-5 h-5 text-[#697C9A]" />
          {/* <BsSunFill size={30} className="w-5 h-5 text-[#FFF]" /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navigation