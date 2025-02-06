"use client"
import {Button} from "@nextui-org/react"
import Link from "next/link"
import { FaUserFriends,FaComments } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineUpdate,MdOutlineReportGmailerrorred } from "react-icons/md";
import {motion,useScroll,useTransform} from "framer-motion"
import React,{useRef} from "react"
import { RiMailSendLine } from "react-icons/ri";

export default function Member() {
  
  const divRef = useRef<HTMLDivELement>(null)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.50,1],[1,0.50])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  
  
  return(
    <div className="w-screen mt-10">
     <div className="w-full gap-3 flex flex-col justify-center items-center">
     
     <motion.div ref={divRef} style={{scale,opacity}} className="flex gap-5">
       <Link
       
       href="/members">
         <Button
         style={{width: "32vw"}} className="hover:bg-blue-600  hover:text-white font-black"><FaUserFriends/>members</Button>
       </Link>
       <Link
       
        
       href="/report">
         <Button 
         style={{width: "32vw"}} className="hover:bg-blue-600  hover:text-white font-black"><MdOutlineReportGmailerrorred/>report</Button>
       </Link>
     </motion.div>
     
     </div>
    </div>
    )
}

