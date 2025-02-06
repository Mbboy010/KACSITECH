"use client"
import { sendPasswordResetEmail,RecaptchaVerifier } from "firebase/auth";

import {useState,useEffect} from "react"
import { Toaster, toast } from 'sonner'
import {Button} from "@nextui-org/react"
import Link from "next/link"
import LoadingFile from "../../components/loading/LoadingFile"
import {useGenerateState} from "@/context"
import Style from "../../components/style/style"
import Email from "../../components/Signup/Email"
import {auth,db,storage} from "../../server/firebase.cong"

export default function Forgotpass(){
  
  const {setIsDone} = useGenerateState()
  const [email,setEmail] = useState<string>("")
  
  const [condition,setCondition] = useState(false)
  
  
  const handleForm = async (e: React.FormEvent) => {
     e.preventDefault()
     
  const userAuth = await auth.currentUser
     
     if(email == ""){
      return toast.warning("check email input is empty")
     }
     
      window.appVerifie = new RecaptchaVerifier(auth,
      "recaptcha-container",
      {
        size: "invisible"
       }
        );
        
      const appVerifier = await window.appVerifie;


     
     try{
       
       
       
    await sendPasswordResetEmail(userAuth,email,appVerifier)
    
    toast.success("successfully")
    setCondition(true)
    setIsDone(false)
       
     } catch(e){
       
       toast.error(e.message);
       setIsDone(false)
     }

    
  }
  
return(
    <div className="flex flex-col w-full h-full gap-3 justify-center items-center ">
    <form style={{zIndex: "20"}}  onSubmit={handleForm}  className="flex justify-center items-center gap-3 flex-col " >
    
     <div className="flex w-[80vw]  my-2">
    <h1 className="text-[16px] font-bold">Enter your valid email to reset your password</h1>
    </div>
    
    
 <Email value={email} placeholder="Email" type="email" setData={setEmail} />
 
   <div id="recaptcha-container"></div>
 
  <Button className="mb-12 mt-5" type="submit">Send</Button>
    
    
    
    <div style={{display: condition ? "block" : "none "}} className="w-full h-full fixed left-0 flex flex-col justify-center items-center top-0 backdrop-blur-[13px] ">
    <div className="flex flex-col justify-center items-center w-full h-full">
    <div className="w-[80%] flex flex-col ">
        <h1 className="text-[16px] mb-4 font-bold">Check your email {email} we are already send you rest password</h1>
        
        <Button><Link href="/">Home</Link></Button>
      <LoadingFile  />
      

    </div>
    </div>
    </div>
    </form>
    <Style />
    </div>
    )
}