"use client"

import { MdClose } from "react-icons/md";
import {motion} from "framer-motion"

import { useSelector, useDispatch } from 'react-redux'
import { setHandms } from '../components/reduxComponent/slicerCom/HandleMs'



export default function MessageNab(){
  const handms = useSelector((state: RootState) => state.handms.value)
  const dispatch = useDispatch()
  
  
  const show = () =>{
    dispatch(setHandms(false))
  }
  
  return(
    <div className="h-[63px] z-50 w-full flex justify-between items-center">
        <motion.div
          whileHover={{scale: 0.97}}
          whileTap={{scale: 0.97  }}
          className="ml-2"
          >
            <h1 style={{marginTop: "10px"}} className="text-2xl  ml-1">MESSAGE</h1>

          </motion.div>
          
        <motion.div
          whileHover={{scale: 1.10}}
          whileTap={{scale: 0.80  }}
          className="mr-2"
          onClick={show} 
          >
            <MdClose  className="block text-3xl md:hidden cursor-pointer" />
          </motion.div>
    
    </div>
  )
}