'use client'
import Resume from "./buttons/Resume"
import Skill from "./buttons/Skill"
import { skills } from "@/lib/data"
import {motion} from "framer-motion"
import { useEffect } from "react"
import { useInView } from 'react-intersection-observer';
export default function Section2({setStatusNav} : Readonly<any>) {
  const { ref, inView} = useInView({
    threshold: 0.5
  });
  useEffect(()=>{
    inView && setStatusNav("ABOUT");
  },[inView])
  return (
    <motion.section 
      ref={ref} 
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }} 
      id="about" 
      className="bg-primary-100 py-[52px] flex flex-col gap-[64px] items-center text-white xl:gap-[88px] xl:py-[75px] xl:pb-[125px] 
      scroll-mt-[70px] md:scroll-mt-[100px] xl:scroll-mt-[120px]"
    >
      <div className="flex flex-col items-center gap-[26px] ">
        <p className="medium24 md:medium30 xl:medium36 ">ABOUT ME</p>
        <p className="light14 w-[210px] text-center
          md:light16 md:w-[380px]
          xl:light18 xl:w-[714px]
          ">This section, you will know information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <div className="flex flex-col px-[50px] gap-[34px]
        md:px-[100px] xl:flex-row 
        xl:gap-[104px] xl:px-0 xl
        ">
        <div className="flex flex-col gap-[18px] 
          xl:w-[600px] xl:gap-[30px]
          ">
          <p className="medium20 md:medium24 xl:medium30">Get to know me</p>
          <p className="regular14 md:regular16 xl:regular18">My name is Pathinya Jongsupangpan. currently, I am senior computer engineering student at KMUTT and will graduate in mid-2024. I also interned at FutureSkill in Front-end Web Developer 2022 and CODEDIVA in Full-stack Developer 2023.
            <br/><br/>I always excited when got new work or try out new technology. So I created hitherto several Web Application. Now, I collect all project Web Application right here. Let’s check it out !
            <br/><br/>You can see more detail about my experience in Resume
          </p>
          <Resume/>
        </div>
        <div className="flex flex-col gap-[10px] md:gap-[20px] xl:w-[600px]">
          <p className="medium20 md:medium24 xl:medium30">Skills</p>
          {
            skills.map((skill)=>{
              return (
                <>
                  <p key={skill.alias} className="topic-skill">{skill.alias}</p>
                  <div className="flex flex-row flex-wrap w-full gap-[10px] gap-y-[8px]">
                  {
                    skill.detail.map((each)=>{
                      return <Skill key={each.name} text={each.name}/>
                    })
                  }
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </motion.section>
  )
}
