'use client'
import {motion} from "framer-motion"
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

export default function Section1({setStatusNav} : Readonly<any>) {
  const { ref, inView} = useInView({
    threshold:0.75
  });
  useEffect(()=>{
    inView && setStatusNav("HOME")
  },[inView])
  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      id="home" 
      className="pt-[134px] flex flex-col items-center md:pt-[240px] xl-[252px]
    ">
      <motion.p 
        className="w-[246px] text-[40px] leading-[56px] text-center font-bold
          md:w-full
          xl:text-[48px] xl:leading-[56px]"
        initial={{ opacity: 0 , y : 50}}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration:0.75}}
      >
        I AM SOFTWARE DEVELOPER
      </motion.p>
      <motion.p className="w-[193px] light16 text-center mt-[29px]
        md:w-full md:mt-[38px]
        xl:mt-[20px] xl:light18"
        initial={{ opacity: 0 , y : 50}}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration:0.5}}
      >
        Always Interesting when learning/do what I have never learned
      </motion.p>
      <motion.img src="/profile.png" className="w-[130px] h-[130px] rounded-[130px] mt-[48px]
        md:w-[160px] md:h-[160px] md:mt-[69px]
        xl:w-[200px] xl:h-[200px] xl:mt-[56px]
        " alt="profile" 
        initial={{ opacity: 0 , scale:0}}
        whileInView={{ opacity: 1, scale:1 }}
        transition={{duration:0.5}}
        />
      <img src="/computer.png" className="w-[380px] h-[212px] mt-[129px]
        md:w-[511px] md:h-[285px] md:mt-[142px]
        xl:w-[610px] xl:h-[341px] xl:mt-[107px]
        " alt="computer" />
      <div className="w-full h-[10px] bg-primary-100
        md:h-[11px] xl:h-[20px]
        "></div>
    </motion.section>
  )
}
