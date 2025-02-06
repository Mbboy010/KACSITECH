"use client"

import Link from "next/link"
import Content from "./Content"
import {useState} from "react"
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation'
import type { RootState } from '../../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'


interface props{
  data: objects;
}


export default function Activities({data}:props){
  
  const isVerified = useSelector((state: RootState) => state.isVerified.value)
  
  const router = useRouter()
  
  
  const handleClick = () =>{
    if(isVerified){
      return toast.success("you're already verified")
    }
    
    router.push('/profile/verify')
    
  }
  
  return(
    <div className="w-full h-full flex flex-col">
    <div className="w-full flex flex-row justify-center gap-10 items-center">
    
    <div className="flex  flex-col justify-center items-center">
      <h1 className="text-[13px] text-gray-400 font-bold">Join on</h1>
      <h1 className="text-[10px] text-gray-400 font-serif font-bold">{data.JoinDate}</h1>
      </div>
      
    <div className="flex  flex-col justify-center items-center">
       <div onClick={handleClick} className="flex  flex-col justify-center items-center">
      
      <h1 className="text-[13px]  font-bold">verified</h1>{
      isVerified ?
      
     ( <h1 className="text-[10px] font-serif text-green-600 font-bold">yes</h1>)
      :
     ( <h1 className="text-[10px] font-serif text-red-600 font-bold">not</h1>)
     
      }
      </div>
      </div>
      
    <div className="flex  flex-col justify-center items-center">
    
    <Link href="/profile/edit_profile">
    
      <h1 className="text-[13px] font-bold">Edit profile</h1>
    </Link>
    
      </div>
      
      
    </div>
      <div className="w-full h-2 border-b-2 border-fuchsia-700 mt-2"></div>
      
   <Content data={data}  />
        </div>

    )
}