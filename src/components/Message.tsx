"use client"
import React,{useState} from "react"
import {motion} from "framer-motion"
import Link from "next/link"
import { RiMailSendLine } from "react-icons/ri";

import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { setHandms } from '../components/reduxComponent/slicerCom/HandleMs'



export default function Message(){
  
  const handms = useSelector((state: RootState) => state.handms.value)
  const isAuth = useSelector((state: RootState) => state.isAuth.value)
  const isVerified = useSelector((state: RootState) => state.isVerified.value)
  
  const dispatch = useDispatch()
  
  const router = useRouter()
  
  const [handChat,setHandChat] = useState<boolean>(false)
  
  const handleChat = () =>{
    
    if(!isAuth){
      return router.push('/login%account')
    }
    if(!isVerified){
      return toast.warning("you're not verify your account")
    }
    
    
    dispatch(setHandms(true))
  }
  
  return(
    <div>
    <motion.div 
       onClick={handleChat}
       whileHover={{scale: 1.01}}
       whileTap={{scale: 0.95  }}
       >
     <Link href="" className="font-bold items-center gap-[4px] flex text-[15px]" ><RiMailSendLine className="text-[22px] font-bold" />Send massage</Link>
       </motion.div>

       
       </div>

    )
  
}