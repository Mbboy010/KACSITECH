"use client"

import MessageNab from "./MessageNab"
import MessageInput from "./MessageInput"
import MessageCont from "./MessageCont"

import { useSelector, useDispatch } from 'react-redux'
import { setHandms } from '../components/reduxComponent/slicerCom/HandleMs'

export default function MessageH(){
  
  const handms = useSelector((state: RootState) => state.handms.value)
  const dispatch = useDispatch()
  
  return(
     <div style={{display: handms ? "block" : "none", zIndex: "120"}} className="w-screen h-screen flex justify-center items-center  backdrop-blur-[10px] fixed top-0 left-0">
        
       <div className="w-full relative h-full">
       <div style={{ zIndex: "124"}}  className="h-[63px] fixed top-0 left-0  bg-background w-full">
       <MessageNab />
       </div> 
      <div className="w-full h-full">
      <MessageCont />
      
      <MessageInput/>
      
      </div>
       </div>
         
       </div> 
    )
}