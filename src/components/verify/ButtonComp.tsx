"use client"

import {Button} from "@nextui-org/react"
import React from 'react'
import LoadingFile from "../../components/loading/LoadingFile"
import {useGenerateState} from "@/context"

import { Toaster, toast } from 'sonner'
import {auth,db,storage} from "../../server/firebase.cong"
import {  sendEmailVerification } from "firebase/auth";


const ButtonComp = () => {
  
  const {setIsDone} = useGenerateState()
  
  const users = auth.currentUser
  
  const handle = async () =>{
    
    await setIsDone(true)
    
    await sendEmailVerification(users)
    toast.success("i have login into your account ")
    await setIsDone(false)
  }
  
  
  return (
    <div className="w-full ml-2">
      <Button onClick={handle}>Verify</Button>
      <LoadingFile  />
    </div>
  )
}

export default ButtonComp