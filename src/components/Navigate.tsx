"use client"
import { IoIosMenu } from "react-icons/io";
import  SwitchMode from "../app/SwitchMode"
import Image from "next/image";
import Link from "next/link"
import { CgProfile } from "react-icons/cg";
import Aside from "./Aside"
import { Toaster, toast } from 'sonner'
import {motion} from "framer-motion"
import React,{useState,useEffect} from "react"


import type { RootState } from '../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../components/reduxComponent/slicerCom/handAside'

import {useGenerateState} from "@/context"


export default function Navigate(){
  const [opa,setOpa] = useState<string>("0")
  const [wit,setWit] = useState<string>("0vw")
  const [lef,setLef] = useState<string>("-77vw")
  
  const {isDone} = useGenerateState()
  
const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    
    if(count){
    setOpa("1")
    setWit("100vw")
    setLef("0")
    } 
  })
  
  const handleAside = () =>{
    
    
    if(isDone){
      toast.warning("please wait loading to finish")
    } else {
    dispatch(increment(true))
    }
    
  }
  
  return(
        <div style={{height: "63px",backgroundColor: "#3a3a3a4a", zIndex: "90"}} className="w-screen fixed backdrop-blur  flex justify-between items-center ">
        <Aside setOpa={setOpa} setWit={setWit} lef={lef} setLef={setLef} opa={opa} wit={wit} handleAside={handleAside}  />
      <div className="flex flex-row justify-center items-center w-full">
          <motion.div 
          
          className="md:ml-7 ml-2 items-center  w-full flex flex-row">
          <motion.div
          whileHover={{scale: 0.97}}
          whileTap={{scale: 0.97  }}
          >
          <Link href="/" className="flex justify-center items-center">
           <Image src={require("../../public/20240902_190848.png")}
           width={56}
           /> 
            <h1 style={{marginTop: "10px"}} className="text-2xl  ml-1">TECH</h1>
           </Link>
          </motion.div>

          </motion.div>
          <div className="md:mr-7 mr-2 md:gap-3 lg:gap-3 xl:gap-3 flex justify-center items-center gap-2">
                    <div className="hidden md:flex">
          <ul className="flex md:gap-3 lg:gap-3 xl:gap-3 flex-row gap-2">
            <motion.div
            whileHover={{scale: 1.10}}
            whileTap={{scale: 0.80  }}
            >
            <Link href="#">Home</Link>
            </motion.div>
            <motion.div
            whileHover={{scale: 1.10}}
            whileTap={{scale: 0.90  }}
            >
            <Link href="#">Contact</Link>
            </motion.div>
            <motion.div
            whileHover={{scale: 1.10}}
            whileTap={{scale: 0.80  }}
            >
            <Link href="#">About</Link>
            </motion.div>
          </ul>
          </div>
          <motion.div
          whileHover={{scale: 1.10}}
          whileTap={{scale: 0.80  }}
          >
          <SwitchMode/>
          </motion.div>
          <motion.div
          whileHover={{scale: 1.10}}
          whileTap={{scale: 0.80  }}
          onClick={handleAside} 
          >
            <IoIosMenu className="block text-3xl md:hidden cursor-pointer" />
          </motion.div>
          <motion.div
          whileHover={{scale: 1.10 }}
          whileTap={{scale: 0.80  }}
          >
            <CgProfile className="hidden cursor-pointer text-3xl md:block" />
          </motion.div>

          </div>
        </div>
        </div>
    )
}