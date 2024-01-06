'use client'
import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2"
import Section3 from "@/components/Section3"
import Section4 from "@/components/Section4"

import { TypestatusNav } from "@/lib/type"

export default function Home() {
  const [statusNav, setStatusNav] = useState<TypestatusNav>("HOME");
  return (
    <main>
        <Navbar statusNav={statusNav}/>
        <Section1 setStatusNav={setStatusNav}/>
        <Section2 setStatusNav={setStatusNav}/>
        <Section3 setStatusNav={setStatusNav}/>
        <Section4 setStatusNav={setStatusNav}/>
    </main>
  )
}
