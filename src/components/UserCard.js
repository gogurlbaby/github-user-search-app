import React, { useContext } from "react"
import CardImage from "../images/Bitmap.svg"
import { IoLocationSharp } from "react-icons/io5"
import { AiOutlineTwitter } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import { HiMiniBuildingOffice2 } from "react-icons/hi2"
import { GetThemeValues } from "../context/Context"
import { format, parseISO } from "date-fns"
import { GitHubContext } from "../context/UserContext"
 
const UserCard = () => {

  const { darkTheme } = GetThemeValues()

  const { user } = useContext(GitHubContext)

  return (
    <div className={`${darkTheme ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"} md:mt-6 mt-4 lg:py-12 lg:px-12 md:py-10 md:px-10 py-8 px-6 rounded-lg shadow-[0px 16px 30px -10px rgba(70, 96, 187, 0.20)]`}>
        <div className="flex gap-[2.313rem]">
          <div>
          {
            user.avatar_url ? <img src={user?.avatar_url} alt="card pic" className="w-full rounded-[117px]"/> 
            :
            <img src={CardImage} alt="card pic" className="w-full rounded-[117px]"/>
          }
          </div>
          <div>
          <div className="lg:flex lg:justify-between lg:gap-[3rem]">
          <div>
            <h2 className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} text-left`}>
              {user.name === null ? "The Octocat" : user?.name}
            </h2>
            <p className="mt-2 text-[#0079FF] md:text-[16px] text-[13px] font-normal text-left">
              @{user?.login}
            </p>
          </div>
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#697C9A]"} lg:mt-0 mt-3 md:text-[16px] text-[13px] font-normal lg:text-right text-left`}>
            Joined {format(parseISO(user?.created_at), "d,MMM yyyy")}
           </p>
        </div>
          </div>
        </div>
        <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} mt-5 md:text-[16px] text-[13px] leading-[25px] font-normal text-left`}>
        {user.bio === null ? "This profile has no bio" : user?.bio}
        </p>
       <div className={`${darkTheme ? "bg-[#141D2F]" : "bg-[#F6F8FF]"} rounded-[10px] py-4 flex justify-evenly items-center lg:mt-[2.938rem] mt-[2.563rem]`}>
         <div>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} md:text-[13px] text-[11px] font-normal`}>Repos</p>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} mt-1 md:text-[22px] text-base font-bold`}>
            {user?.public_repos}
          </p>
         </div>
         <div>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} md:text-[13px] text-[11px] font-normal`}>Followers</p>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} mt-1 md:text-[22px] text-base font-bold`}>
          {user?.followers}
          </p>
         </div>
         <div>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} md:text-[13px] text-[11px] font-normal`}>Following</p>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} mt-1 md:text-[22px] text-base font-bold`}>
          {user?.following}
          </p>
         </div>
       </div>
       <div>
         <div className="lg:mt-[3.375rem] md:mt-[2.938rem] mt-[2.688rem] md:grid md:grid-divs-2 md:justify-between">
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <IoLocationSharp  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>
           {user.location === null ? "Not Available" : user?.location}
           </p>
           </div>
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <AiOutlineTwitter  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>
           {user.twitter_username === null ? "Not Available" : user?.twitter_username}
           </p>
           </div>
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <BiLink  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>
           {user.html_url === null ? "Not Available" : user?.html_url}
           </p>
           </div>
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <HiMiniBuildingOffice2  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>
            {user?.login}
           </p>
           </div>
         </div>
       </div>
    </div>
  )
}

export default UserCard