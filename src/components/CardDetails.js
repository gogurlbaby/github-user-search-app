import React from "react"
import CardImage from "../images/Bitmap.svg"
import { Container, Row, Col } from "react-bootstrap"
import { IoLocationSharp } from "react-icons/io5"
import { AiOutlineTwitter } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import { HiMiniBuildingOffice2 } from "react-icons/hi2"
import { GetThemeValues } from "../components/Context"
 
const CardDetails = () => {

  const {darkTheme} = GetThemeValues()

  return (
    <div className={`${darkTheme ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"} md:mt-6 mt-4 lg:py-12 lg:px-12 md:py-10 md:px-10 py-8 px-6 rounded-lg shadow-[0px 16px 30px -10px rgba(70, 96, 187, 0.20)]`}>
      <Container>
        <Row className="flex gap-[2.313rem]">
          <Col>
          <img src={CardImage} alt="card pic" className="w-full rounded-[117px]"/>
          </Col>
          <Col>
          <div className="lg:flex lg:justify-between lg:gap-[3rem]">
          <div>
            <h2 className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} text-left`}>The Octocat </h2>
            <p className="mt-2 text-[#0079FF] md:text-[16px] text-[13px] font-normal text-left">@octocat</p>
          </div>
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#697C9A]"} lg:mt-0 mt-3 md:text-[16px] text-[13px] font-normal lg:text-right text-left`}>Joined 25 Jan 2011</p>
        </div>
          </Col>
        </Row>
        <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} mt-5 md:text-[16px] text-[13px] leading-[25px] font-normal text-left`}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </p>
       <Col className={`${darkTheme ? "bg-[#141D2F]" : "bg-[#F6F8FF]"} rounded-[10px] py-4 flex justify-evenly items-center lg:mt-[2.938rem] mt-[2.563rem]`}>
         <div>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} md:text-[13px] text-[11px] font-normal`}>Repos</p>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} mt-1 md:text-[22px] text-base font-bold`}>8</p>
         </div>
         <div>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} md:text-[13px] text-[11px] font-normal`}>Followers</p>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} mt-1 md:text-[22px] text-base font-bold`}>3938</p>
         </div>
         <div>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} md:text-[13px] text-[11px] font-normal`}>Following</p>
          <p className={`${darkTheme ? "text-[#FFF]" : "text-[#2B3442]"} mt-1 md:text-[22px] text-base font-bold`}>9</p>
         </div>
       </Col>
       <Row>
         <Col className="lg:mt-[3.375rem] md:mt-[2.938rem] mt-[2.688rem] md:grid md:grid-cols-2 md:justify-between">
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <IoLocationSharp  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>San Francisco</p>
           </div>
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <AiOutlineTwitter  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>Not Available</p>
           </div>
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <BiLink  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>https://github.blog</p>
           </div>
           <div className="flex items-center gap-6 mt-[1.063rem]">
           <HiMiniBuildingOffice2  size={22} className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"}`} />
           <p className={`${darkTheme ? "text-[#FFF]" : "text-[#4B6A9B]"} text-base`}>@github</p>
           </div>
         </Col>
       </Row>
      </Container>
    </div>
  )
}

export default CardDetails