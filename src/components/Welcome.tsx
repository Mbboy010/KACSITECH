import {motion,useScroll,useTransform} from "framer-motion"
import React,{useRef} from "react"

export default function Wellcome(){
  
  const divRef = useRef<HTMLDivELement>(null)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])
  
  return(
    <div className="">
      <motion.div 
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1,opacity: 1}}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.97  }}
      ref={divRef}
        style={{scale,opacity,backgroundColor: "#84848443"}} className=" rounded-full border border-foreground ">
        <h1 className="mx-3 xl:text-2xl">Welcome to  🎉🎉</h1>
        </motion.div>
        </div>
    )
}