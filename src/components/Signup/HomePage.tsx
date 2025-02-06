"use client"


import Image from "next/image";
import Link from "next/link"
import {Button} from "@nextui-org/react"

import HailatApp from "../../components/HailatApp"
import Accounting from "../../components/Accounting"
import CarouselF from "../../components/CarouselF"
import JoinUs from "../../components/JoinUs"
import Member from "../../components/Member"
import Bottom from "../../components/Bottom"
import Ads from "../../components/Ads"


import React from 'react'

export default function HomePage() {
  return (
    <div className="w-full h-full">


     <div className="mt-20">
     <div className="relative ">
     <Image className="absolute  lg:min-w-[60%] xl:min-w-[30%] md:min-w-[60%] border-r-8 opacity-40 bottom-0 right-0" src={require("../../../public/20240903_072703.png")} />
      <HailatApp />

      <JoinUs />
     </div>
      
      <Accounting />
      <Ads/>
      <Member />
      <Bottom />
      
      
      
      <CarouselF />

     </div>
    
    </div>
  )
}