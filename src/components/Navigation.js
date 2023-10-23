import React from "react"
import { BsMoonFill, BsSunFill } from "react-icons/bs"
import { GetThemeValues } from "../context/Context"

const Navigation = () => {

  const { darkTheme, themeHandler } = GetThemeValues()
  
  return (
    <nav>
      <div className="flex justify-between items-center ">
        <h1 className={`${darkTheme ? "text-[#FFF]" : "text-[#222731]"} text-[26px] font-bold`}>devfinder</h1>
        <div className="flex items-center gap-5">
          {
            darkTheme ? <span className="text-[#FFF] text-[13px] font-bold tracking-[2.5px] uppercase text-right">
            Light
           </span> 
           :
           <span className="text-[#697C9A] text-[13px] font-bold tracking-[2.5px] uppercase text-right">
           Dark
          </span>
          }
          {darkTheme ? <BsSunFill size={30} onClick={themeHandler} className="w-5 h-5 text-[#FFF]" /> 
          :
          <BsMoonFill size={30} onClick={themeHandler} className="w-5 h-5 text-[#697C9A]" />
         }
        </div>
      </div>
    </nav>
  )
}

export default Navigation