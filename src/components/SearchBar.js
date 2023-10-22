import React from "react"
import Button from "react-bootstrap/Button"
import { FiSearch } from "react-icons/fi"
import { GetThemeValues } from "./Context"

const SearchBar = () => {

  const {darkTheme} = GetThemeValues()
  
  return (
    <div className={`${darkTheme ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"} py-2 mt-[2.188rem] flex rounded-lg  shadow-[0px 16px 30px -10px rgba(70, 96, 187, 0.20)]`}>
      <div className="flex w-full">
        <FiSearch size={30} className="text-[#0079FF] relative top-3 left-2 mx-2"/>
        <input 
         type="text"
         placeholder="Search GitHub username…"
         className={`${darkTheme ? "bg-[#1E2A47]" : "bg-[#FFF]"} px-4 w-full rounded-sm outline-none focus:bg-transparent  focus:ring-[#0079FF]`}
        />
      </div> 
      <Button type="submit" className="mr-4 bg-[#0079FF] text-[#FFF] text-base font-bold py-3 px-4 lg:px-6 rounded-[10px]">Search</Button>
    </div>
  )
}

export default SearchBar