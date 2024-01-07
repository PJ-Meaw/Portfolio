'use client'
import {motion} from "framer-motion"
import { links } from '@/lib/data'
import Link from 'next/link'

type TypestatusNav = "HOME" | "ABOUT" | "PROJECT" | "CONTACT";
type IstatusNav = {
  statusNav : TypestatusNav
}
export default function Navbar({statusNav} : Readonly<IstatusNav>) {
  return (
    <motion.nav className={`fixed top-[16px] left-1/2 w-[320px] h-[56px] bg-white bg-opacity-80 shadow-thin rounded-full backdrop-blur
      flex flex-row justify-center items-center gap-[34px]
      md:h-[76px] md:w-[500px] md:top-[34px] md:gap-[54px]
      xl:w-[650px] 
      `}
      initial={{y:-100, x:"-50%", opacity:0}}
      animate={{y:0, x:"-50%", opacity:1}}
      // transition={{delay:0.175}}
    >
    {links.map((link) => {
      return <motion.div key={link.hash} className={`medium14 md:medium18 xl:medium20 cursor-pointer relative z-10 ${statusNav == link.name && "text-primary-200"}`}
      initial={{y:-100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{type: "spring", stiffness: 100}}
      >
        <Link href={link.hash}>{link.name}</Link>
        {
          statusNav == link.name && <div className="absolute bg-primary-100  w-3/4 h-[3px] translate-x-[5px] md:translate-x-[7px] xl:translate-x-2 rounded-[20px] -z-10">
          </div>
        }
      </motion.div>
    })}
    </motion.nav>
  )
}
