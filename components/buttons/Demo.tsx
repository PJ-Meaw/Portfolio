import Link from 'next/link'
import React from 'react'

export default function Demo({redirect} : Readonly<{redirect : string}>) {
  return (
    <Link href={redirect} target="_blank">
      <button className="flex flex-row items-center gap-[6px] border border-white bg-primary-300 px-[11px] py-[8px] shadow-thin rounded xl:hover:-translate-y-1.5 xl:hover:scale-110 ease-in-out duration-500
        md:px-[16px] md:py-[9px]
        xl:py-[10px] xl:border-2
      ">
        <svg className="w-[19px] h-[19px] 
          md:w-[24px] md:h-[24px]
          xl:w-[30px] xl:h-[30px]
        " width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 24.9028C19.7132 24.9028 24.75 19.866 24.75 13.6528C24.75 7.43963 19.7132 2.40283 13.5 2.40283C7.2868 2.40283 2.25 7.43963 2.25 13.6528C2.25 19.866 7.2868 24.9028 13.5 24.9028Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.25 9.15283L18 13.6528L11.25 18.1528V9.15283Z" stroke="white" stroke-width="2" />
        </svg>
        <p className="text-white medium16 md:medium18 xl:medium20">Demo</p>
      </button>
    </Link>
    
  )
}
