import Link from "next/link";

export default function Resume() {
  return (
    <Link href="/Resume.pdf" target="_blank">
      <button className="w-[110px] h-[37px] flex justify-center items-center gap-[5px] rounded-[14px] border border-white xl:hover:shadow-thin-more xl:hover:-translate-y-1.5 xl:hover:scale-105 ease-in-out duration-700
        md:w-[125px] md:h-[42px] md:border-[2px] 
        xl:w-[145px] xl:h-[50px] 
        ">
        <svg className="stroke-[1.5px] stroke-slate-400 w-[16px] h-[16px] md:w-[21px] md:h-[21px] md:stroke-2  xl:w-[24px] xl:h-[24px]" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9.16667V13.1667C12 13.5203 11.8595 13.8594 11.6095 14.1095C11.3594 14.3595 11.0203 14.5 10.6667 14.5H3.33333C2.97971 14.5 2.64057 14.3595 2.39052 14.1095C2.14048 13.8594 2 13.5203 2 13.1667V5.83333C2 5.47971 2.14048 5.14057 2.39052 4.89052C2.64057 4.64048 2.97971 4.5 3.33333 4.5H7.33333M10 2.5H14M14 2.5V6.5M14 2.5L6.66667 9.83333" stroke="white"/>
        </svg>
        <p className="medium16 md:medium18 xl:medium20">Resume</p>
        
      </button>
    </Link>
    
  )
}
