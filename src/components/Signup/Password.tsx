"use client"
import {motion,useScroll,useTransform} from "framer-motion"
import { MdOutlineVisibility,MdOutlineVisibilityOff } from "react-icons/md";

import {useState} from "react"

interface props{
  placeholder: string;
  type: string;
  setData: React.Dispatch<React.SetStateAction<string>>
  value: string;
  setPassLength: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Password({placeholder,type,setData,value,setPassLength}:props){
  
  const [istrue,setIstrue] = useState<condition>(false)
  
  const handlepass = (e) =>{
    if(value.length >= 7){
      setPassLength(true)
    } else{
      setPassLength(false)
    }
    let data = e.target.value
    setData(data.trim())
  }
  
  return(
    <div>
    <motion.div
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    className="bg-[#81818171] border border-foreground rounded-lg flex flex-row justify-center items-center w-[80vw] h-10">
    
      <input value={value} onChange={handlepass} style={{background: "none"}} className="text-[14px] border-none w-[69vw] h-[80%] outline-none placeholder:text-foreground placeholder:opacity-50"  type={istrue ? "text" : type} placeholder={placeholder} /> 
      
      {
      istrue ? (<MdOutlineVisibilityOff className="w-[6vw] h-[50%]" onClick={() => setIstrue(false)} />):
      (<MdOutlineVisibility className="w-[6vw] h-[50%]" onClick={() => setIstrue(true)}/>) 
        
      }
      
      </motion.div>
    </div>
    )
} 