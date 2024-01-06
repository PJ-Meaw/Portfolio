"use client"
import { projects } from "@/lib/data"
// import {motion} from "framer-motion"
import { useEffect } from "react"
import { useInView, InView } from 'react-intersection-observer';
import Github from "./buttons/Github";
import Demo from "./buttons/Demo";
export default function Section3({setStatusNav} : Readonly<any>) {
  
  return (
    <InView as="div" id="project" className="py-[58px] flex flex-col items-center gap-[54px]
      md:gap-[100px] md:py-[65px] md:px-[30px]
      xl:gap-[90] xl:py-[96px] xl:px-[30px]
      scroll-mt-[70px] md:scroll-mt-[100px] xl:scroll-mt-[120px]
      "
      threshold={[
        0.33,
        0.4,
        0.6,
        ]}
      onChange={(inView, entry) => {
        inView && setStatusNav("PROJECT");
        console.log("Inview PROJECT is " , inView)
      }}
      >
      <div className="flex flex-col gap-[26px] items-center">
        <p className="medium24 md:medium30 xl:medium36 ">PROJECT</p>
        <p className="light14 w-[210px] text-center
          md:light16 md:w-[380px]
          xl:light18 xl:w-[714px]
          ">This section, you will find some of my projects that I created until starting as developer to now.</p>
      </div>
      <div className="flex flex-col gap-[60px] md:gap-[88px]">
        {
          projects?.map((project,index)=>{
            return (
            <div key={project.name} className="flex flex-col gap-[30px] items-center 
              md:gap-[45px]
              xl:odd:flex-row xl:even:flex-row-reverse
              ">
              <img src={project.image} alt="" className="w-[406px] h-[229px] md:w-[707px] md:h-[398px] xl:w-[742px] xl:h-[418px] " />
              <div className={`flex flex-col gap-[14px] items-center w-full
                ${index%2 == 0 ? "md:items-start md:pl-[100px]": "md:items-end md:pr-[100px]"} md:gap-[24px]
                xl:gap-[36px] xl:px-0 xl:w-[584px]
              `}>
                <p className="medium20 md:medium30">{project.name}</p>
                <div className={`w-full flex flex-col gap-[12px] items-center px-[35px] 
                  ${index%2 == 0 ? "md:items-start ": "md:items-end"} md:px-0 md:gap-[18px]
                `}>
                  <p className="regular16 text-center md:regular18 xl:regular20">{project.about}</p>
                  <div className="flex flex-col gap-[5px] ">
                  {
                    project.describes.map((describe)=>{
                      return <li key={describe} className={`w-full regular14 md:regular16 xl:regular18  
                        ${index%2 == 0 ? "md:text-start md:pr-[40px]": "md:text-end md:pl-[40px]"} xl:px-0`}
                      >{describe}</li>
                    })
                  }
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[11px]">
                  < Github redirect={project.github}/> 
                  { project.demo && <Demo redirect={project.demo} />}
                </div>
              </div>
            </div>
          )})
        }
      </div>
    </InView>
  )
}
