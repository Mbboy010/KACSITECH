"use client"

import {useState} from "react"
import LoadingFile from "../../components/loading/LoadingFile"
import { Toaster, toast } from 'sonner'
import Password from "../Signup/Password"
import Email from "../../components/Signup/Email"
import LoginButton from "../Signup/LoginButton"
import InputSection from "../Signup/InputSection"
import {useGenerateState} from "@/context"
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../server/firebase.cong"
import { useRouter } from 'next/navigation'


export default function LoginContent(){
  
  const [password,setPassword] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const [passLength,setPassLength] = useState<boolean>(false)
  const {setIsDone} = useGenerateState()

  const router = useRouter()
  
  const handleForm = async (e: React.FormEvent) => {
     e.preventDefault()
     
     if(email== ""  && password == ""){
       return toast.warning("check email and password input is empty")
     }
     if (email == ""){
      return toast.warning("check email input is empty")
     } 
     if (password == ""){
       
       return toast.warning("check password input is empty")
       
     } 
     if (!passLength){
      return toast.warning("password is less than 8")
     } 
     
 setIsDone(true)
     

  try {
    
     await signInWithEmailAndPassword(auth, email, password)
     await router.push('/profile')
     await setIsDone(false)
  } catch(error) {
    
    var errorCode = await error.code;
    var errorMessage = await error.message;
    
    
    
    if ( errorCode == 'auth/invalid-credential') {
       toast.error("check your email or password ain't matching ");
           setIsDone(false)
        } else{
            toast.error("something is wrong please try again later")
              setIsDone(false)
            }
    // ..
  };
       
       
     
     
     
  }
  
return(
    <div style={{zIndex: "20"}}   className="flex flex-col w-full h-full gap-3 justify-center items-center ">
    <form onSubmit={handleForm}  className="flex justify-center items-center gap-3 flex-col " >
    <div className="flex w-full justify-center items-center mb-6">
    <h1 className="text-2xl font-bold">Login account</h1>
    </div>
    
 <Email value={email} placeholder="Email" type="email" setData={setEmail} />
    
    <Password value={password} setPassLength={setPassLength} placeholder="Password" type="password" setData={setPassword} />
    <div className="w-[80vw] flex items-center mt-3">
    <input  type="checkbox" /> <span className="text-[13px] ml-3 font-bold">Save your password</span>
    </div>
    <div className="w-screen">
  <LoginButton textS="create new account" link="/create%new%account" text="Login" />
    </div>
    </form>
     <LoadingFile  />
    </div>
    )
}