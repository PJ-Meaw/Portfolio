'use client'

export default function Skill({ text }: { text: string } ) {
  return (
    <div className="px-[11px] py-[5px] medium14 text-white border border-white bg-primary-200 rounded
      md:medium16
      xl:medium18 xl:px-[12px]
    ">
      {text}
    </div>
  )
}
