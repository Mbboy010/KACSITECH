"use client"
import { BiCodeAlt } from "react-icons/bi";
import { BsCaretRightFill } from "react-icons/bs";
import {motion,useScroll,useTransform} from "framer-motion"
import React,{useRef} from "react"
import { AiFillAppstore } from "react-icons/ai";


interface props{
  title: string;
  body: string;
}
export default function Acc({title,body}:props ){
  
  
  const divRef = useRef<HTMLDivELement>(null)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  
  return(
    <div>
      <motion.div ref={divRef} style={{
        boxShadow: "0px 0px 13px #84848434",
        scale,
        opacity
        
      }} className="w-[90vw] md:w-[75vw] flex border  flex-col   rounded-2xl shadow-gray-100"
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95,rotate: "2.5deg" }}
      >
      
        <div className="flex mt-3 ml-5 flex-row items-center gap-5 ">
        <div className="w-10 rounded-full h-10 bg-blue-500 flex justify-center items-center">
        <AiFillAppstore className=" drop-shadow-lg shadow-white text-2xl font-black" />
        </div>
        <h1 className="text-1xl capitalize font-black">{title}</h1>
        </div>
        <div className="mx-5 my-5">
        <p>{body}</p>
        </div>
      </motion.div>
    </div>
    )
}