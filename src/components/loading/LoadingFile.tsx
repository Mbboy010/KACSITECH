"use client"
import {Spinner} from "@nextui-org/react";



import {useGenerateState} from "@/context"

export default function LoadingFile(){
  

  const {isDone} = useGenerateState()
  
  return(
    <div style={{zIndex: "9", display: isDone ? "block" : "none"}} className="w-screen fixed h-screen bg-[#0000005d] top-0 left-0 backdrop-blur-[2px]">
    <div className="w-full h-full flex justify-center flex-col items-center">
    <Spinner/>
    <h1 className="mt-3">please wait...</h1>
    </div>
    </div>
    )}  
    