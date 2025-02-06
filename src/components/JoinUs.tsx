"use client"
import { IoIosArrowRoundForward } from "react-icons/io";
import {Button} from "@nextui-org/react"
import Link from "next/link"
import {motion,useScroll,useTransform} from "framer-motion"
import React,{useRef} from "react"

export default function JoinUs(){
  
  const divRef = useRef<HTMLDivELement>(null)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  return(
    <div className="flex justify-center items-center w-screen mb-20">
    <motion.div
    initial={{scale: 0, opacity: 0}}
      animate={{scale: 1,opacity: 1}}
    style={{scale,opacity,width: "90vw"}} className="flex justify-center h-full flex-col items-center"
    ref={divRef}
    >
    <motion.div
    whileHover={{scale: 0.97}}
    whileTap={{scale: 0.97  }}
    className="w-full md:w-[75%] lg:w-[75%] xl:w-[75%]">
    <Link className="w-full" href="/create%new%account">
     <Button className="w-full rounded-full font-black bg-blue-600 h-12 text-1xl text-white" >Join Us <IoIosArrowRoundForward className="text-2xl"/>
     </Button>
     </Link>
    </motion.div>
    <motion.div 
    whileHover={{scale: 0.97}}
    whileTap={{scale: 0.97  }}
    className="w-full md:w-[75%] lg:w-[75%] xl:w-[75%]">
     <Link className="w-full" href="/about">
     <Button className="w-full rounded-full font-black  h-12 text-1xl mt-2 " color="primary" variant="faded">
        About us
      </Button> 
      </Link>
    </motion.div>
    </motion.div>
    </div>
    )
}