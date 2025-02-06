"use client"
import {Button} from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image";
import {motion,useScroll,useTransform} from "framer-motion"
import React,{useRef} from "react"


export default function Ads(){
  
 const divRef = useRef<HTMLDivELement>(null)
  
const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.50,1],[1,0.50])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return(
    
    <div className="flex justify-center items-center w-screen mb-20 min-h-72 md:min-h-[650px] xl:min-h-[650px]">
     <motion.div ref={divRef}
     whileHover={{scale: 1.05}}
     whileTap={{scale: 0.95  }}
     style={{ boxShadow: "0px 0px 13px #84848434",scale,opacity}} className="relative w-[90vw] md:w-[75vw] rounded-2xl h-[250px] flex flex-col md:min-h-[400px] xl:min-h-[500px] justify-center items-center ">
     <Image className="w-full  absolute h-full" src={require("../../public/Untitled54_20240904213502.png")}/>
     <motion.div 
     ref={divRef}
     style={{ zIndex: "6"}} className="backdrop-blur-3xl rounded-2xl overflow-hidden w-[85vw] md:w-[70vw] h-[220px] xl:h-[440px] md:h-[340px] justify-center items-center flex bg-background"
     whileHover={{scale: 1.05}}
     whileTap={{scale: 0.95,rotate: "1.5deg" }}
     >
     
      <div style={{width: "40%"}} className=" ml-3 h-48 md:h-[90%]">
      <Image className="w-full rounded-lg h-full" src={require("../../public/new.jpg")} alt="add"/>
      </div>
      <div style={{width: "60%"}} className="mr-3 h-48 md:h-full md:w-full md:flex md:flex-col md:justify-center md:items-center">
  <div className="mt-5 ml-4 md:flex md:justify-center md:items-center md:flex-col">
  <h2 style={{fontSize: "20px"}} className="font-black ">Do you want to become profs in I.T</h2>
    <p className="text-[10px]">Click the button to watch all steps you should follows.</p>
    </div>
    <div className="w-full md:flex md:justify-center h-full md:h-0 flex  mt-5 relative ">
     <Link href="https://youtu.be/WR1ydijTx5E?si=wUt5Z6qhzQXRM9NM"> <Button className="absolute text-white right-0 md:relative  bg-blue-600">Watch</Button></Link>
      <div>
      </div>
      </div>
      </div>
     
     </motion.div>
     </motion.div>
    </div>
    
    )
}