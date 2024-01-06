"use client"
import {motion} from "framer-motion"
import { useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import Resume from "./buttons/Resume";
export default function Section4({setStatusNav} : Readonly<any>) {
  const { ref, inView } = useInView({
    threshold:1
  });
  useEffect(()=>{
    inView && setStatusNav("CONTACT");
  },[inView])
  
  return (
    <section ref={ref} id="contact" className="pt-[41px] pb-[25px] px-[35px] bg-primary-200 text-white flex flex-col items-center
      md:pt-[42px] md:pb-[30px] md:px-[62px]
      xl:px-[116px] 
      ">
      <div className="flex flex-row justify-between w-full xl:gap-[693px] xl:justify-center">
        <div className="flex flex-col gap-[20px] md:gap-[25px]">
          <p className="medium20 md:medium30 xl:medium36">My Contact</p>
          <div className="flex flex-row gap-[13px] md:gap-[16px]">
            <Link href="https://web.facebook.com/pathinya.jongsupangpan/" target="_blank">
              <img src="/facebook-white.svg" alt="facebook" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] xl:w-[37px] xl:h-[37px]" />
            </Link>
            <Link href="https://www.linkedin.com/in/pathinya-jongsupangpan-113351253/" target="_blank">
              <img src="/linkedin-white.svg" alt="linkedin" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] xl:w-[37px] xl:h-[37px]" />
            </Link>
            <Link href="https://github.com/PJ-Meaw" target="_blank">
              <img src="/github-white.svg" alt="github" className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] xl:w-[37px] xl:h-[37px]" />
            </Link>
          </div>
          <Resume/>
        </div>
        <div className="flex flex-col items-end mt-[5px] md:mt-[10px]">
          <p className="medium14 md:medium18 md:medium24">Pathinya Jongsupangpan</p>
          <p className="text-[12px] leading-[12px] mt-[16px] md:medium16 xl:medium20 ">pathinya19@gmail.com</p>
          <p className="text-[12px] leading-[12px] mt-[5px] md:medium16 xl:medium20">+66 948292054</p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#D9D9D9] mt-[45px] mb-[22px] px-[22px] 
        md:mt-[55px] md:mb-[25px] md:px-[41px]
        xl:mt-[55px] xl:w-[1174px] xl:h-[2px]
        "></div>
      <p className="text-[10px] leading-[10px] font-light md:light14 xl:regular16">✍️ Made by Pathinya Jongsupangpan</p>
    </section>
  )
}
