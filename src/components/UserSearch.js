import React, { useContext } from "react"
import { FiSearch } from "react-icons/fi"
import { GetThemeValues } from "../context/Context"
import { GitHubContext } from "../context/UserContext"

const UserSearch = () => {

  const { darkTheme } = GetThemeValues()

  const { searchTerm, setSearchTerm, error, getGitHubUser } = useContext(GitHubContext)

  const handleSubmit = () => {
    if (!searchTerm) {
      alert("Enter Username")
    } else {
      getGitHubUser()
    }
  }
  
  return (
    <div className={`${darkTheme ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"} py-2 mt-[2.188rem] flex rounded-lg  shadow-[0px 16px 30px -10px rgba(70, 96, 187, 0.20)]`}>
      <div className="flex w-full">
        <FiSearch size={30} className="text-[#0079FF] relative top-3 left-2 mx-2"/>
        <input 
         type="text"
         placeholder="Search GitHub username…"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         className={`${darkTheme ? "bg-[#1E2A47] text-white" : "bg-[#FFF]"} px-4 w-full rounded-md outline-none focus:bg-transparent focus:ring-[#0079FF]`}
        />
        <span className="text-red-600 text-sm">{error && error}</span>
      </div> 
      <button 
       type="submit" 
       onClick={handleSubmit}
       className="mr-4 bg-[#0079FF] text-[#FFF] text-base font-bold py-3 px-4 lg:px-6 rounded-[10px]">
        Search
      </button>
    </div>
  )
}

export default UserSearch