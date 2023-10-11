import React from "react"
import Button from "react-bootstrap/Button"
import { FiSearch } from "react-icons/fi"

const SearchBar = () => {
  return (
    <div className="bg-[#FEFEFE] shadow-[0px 16px 30px -10px rgba(70, 96, 187, 0.20)] rounded-[15px] lg:px-[22.188rem] md:px-[6.063rem] py-2 px-[1.5rem]">
      <FiSearch size={30} className="text-[#0079FF] relative top-9"/>
      <input 
       type="text"
       placeholder="Search GitHub username…"
       className="py-2 px-8 rounded-sm outline-none bg-[#FFF] focus:bg-transparent focus:ring-2 focus:ring-[#0079FF]"
      />
      <Button className="ml-10 rounded-[10px] bg-[#0079FF] text-[#FFF] text-base font-bold lg:px-6 py-3 px-4">Search</Button>
      </div>
  )
}

export default SearchBar