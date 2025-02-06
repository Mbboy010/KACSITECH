'use client'
import React,{useEffect,useState} from "react"
import Post from "./Post"
import Pag from "./Pag"
import Image from "next/image";
import {Spinner} from "@nextui-org/react";
import {motion,useScroll,useTransform} from "framer-motion"

import {Pagination} from "@nextui-org/react";
import {Button} from "@nextui-org/react"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PaginationControls = () => {
  
  const [currentPage,setCurrentPage] = useState<number>(1)
  const [postPer,setPostPer] = useState<number>(9)
  
  const [state,setState] = useState<array>([])
  
    const [condition,setCondition] = useState<boolean>(true)

  
  useEffect(() =>{
    setState(data)
    setTimeout(() =>{
      setCondition(false)
    },1000)
  })
  
  const lastIndex = currentPage * postPer;
  const fisrtIndex = lastIndex - postPer;
  
  const currentPost = state.slice(fisrtIndex,lastIndex);
  
  const pagination = (pagi) => setCurrentPage(pagi)
  
  let pagNumber = []
  for(let i = 1; i < Math.ceil((state.length + 9)/postPer); i++){
    pagNumber.push(i);
  }
  
  
  
  
  const back = () =>{
    
    if(currentPage != 1){
      setCurrentPage(currentPage - 1)
      setCondition(true)
    setTimeout(() =>{
      setCondition(false)
    },1000)
    }
  }
  const next = () =>{
    
    if(currentPage != pagNumber.length){
      setCurrentPage(currentPage + 1)
      setCondition(true)
    setTimeout(() =>{
      setCondition(false)
    },1000)
    }
  }
  
  
  return (
    <div className='w-full relative h-full'>
    
    <div className="w-full h-20"></div>
    
    <div className="w-full relative bg-red-600">
 
    <div className=" rounded-3xl h-[5%] w-[50%] flex flex-col justify-center items-center ">
    
    <h1 className="font-bold mx-2 ">Total members: {state.length}</h1>
    
    </div>
    
    <div className="">
    
    
    <div className="w-full h-full ">
    
     <div className=" h-[6%] w-full flex justify-center items-center  mb-4    ">
     
         <div className="bg-[rgba(135,135,135,0.249)] h-full rounded-lg  w-[95%] flex items-center">
         <h1 className="font-bold ml-2">
         NAMES
         </h1>
         
         </div>
        </div>
    
    { condition ? 
    
      <div className="flex h-full w-[95%] justify-center items-center">
          <Spinner/>
      </div>
      :
      <div>
      bbhj
      </div>
      })
    }
    </div>
     
     
    </div>
      

      
      
    </div>
      
    </div>
  )
}


const data = [
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  ]


export default PaginationControls