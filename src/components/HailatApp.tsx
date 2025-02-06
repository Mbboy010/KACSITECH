"use client"
import Image from "next/image";

import {motion,useScroll,useTransform} from "framer-motion"
import Welcome from "./Welcome"
import React,{useRef} from "react"

export default function HailatApp(){
  return(
    <div>
     <div style={{height: "500px"}} className="relative flex-col flex justify-center items-center w-screen">
     
     <Welcome/>
     <div >
     <Kargi/>
     </div>
     <Join/>
    
     </div>
    </div>
    )
}


function Join(){
  
  const divRef = useRef<HTMLDivELement>(null)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return(
 <motion.div 
     
     className="w-full flex justify-center items-center">
       <motion.h1 
       initial={{scale: 0, opacity: 0}}
       animate={{scale: 1,opacity: 1}}
       whileHover={{scale: 1.02}}
      whileTap={{scale: 0.98  }}
      ref={divRef} style={{scale,opacity}}
       
       className="font-mono text-center text-1xl xl:text-2xl">join us to be our member... <br/> you can communication with us and all members just 👇</motion.h1>
     </motion.div>
    )
}
function Kargi(){
  
  const divRef = useRef<HTMLDivELement>(null)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  return(
<div className="rounded-2xl min-w-[90vw] min-h-[280px]  relative flex ">
    <motion.div
    initial={{scale: 0, opacity: 0}}
    animate={{scale: 1,opacity: 1}}
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
     ref={divRef} style={{scale,opacity}}
    className="flex mt-5 text-4xl md:text-5xl xl:text-7xl xl:my-6 md:my-5 capitalize font-black items-center justify-center w-full">
    <motion.h1
    className="w-full text-center"><span className="text-fuchsia-700">Kargi</span> Association <br/> for Computer Science <br/> and <br/>  Information Tech...</motion.h1>
    </motion.div>
     </div>
    )
}