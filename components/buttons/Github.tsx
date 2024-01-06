import Link from 'next/link'
import React from 'react'

export default function Github({redirect} : Readonly<{redirect : string}>) {
  return (
    <Link href={redirect} target="_blank">
      <button className="flex flex-row items-center gap-[6px] border border-primary-200 px-[9px] py-[7px] shadow-thin rounded img-swap xl:hover:-translate-y-1.5 ease-in-out duration-500
        md:px-[20px] 
        xl:px-[26px]
      ">
        <div className="w-[20px] h-[20px] bg-cover img-github
          md:w-[28px] md:h-[28px]
          xl:w-[32px] xl:h-[32px]
        "></div>
        <p className="text-primary-200 medium14 md:medium16 xl:medium18">Github</p>
      </button>
    </Link>
    
  )
}
