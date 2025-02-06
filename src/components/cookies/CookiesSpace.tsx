"use client"
import {useState,useEffect} from "react"
import {Button} from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image";
import type { RootState } from '../../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'
import { setCoc } from '../../components/reduxComponent/slicerCom/cookies'



export default function CookiesSpace(){
  
  
  const [isCheck,setIsCheck] = useState<boolean>(false)
  
  
  const isCoc = useSelector((state: RootState) => state.isCoc.value)
  const dispatch = useDispatch()
  
  function getCookie(name) {

    const cDecoded = decodeURIComponent(document.cookie);

    const cArray = cDecoded.split("; ");

    let result

    cArray.forEach(element => {

        if (element.indexOf(name) == 0) {

            result = element.substring(name.length + 1)

        }

    })

    return result;

}
  
  
  useEffect(() =>{
    
    
    if(getCookie("value") == "true"){
      
      setIsCheck(false)
      
    } else{
      
    setTimeout(() =>{
    setIsCheck(true)
    },1)
    
    }

    
    
    
      dispatch(setCoc(true))
  },[])
  
  
  
  
  const handleBlack = () =>{
    
   document.cookie = `value=true; expires=sun, 1 January  2100`
    
   setIsCheck(false)
      
    setTimeout(() =>{
      dispatch(setCoc(false))
    },501)
  }
  
  const handle = () =>{
    
   setIsCheck(false)
      
    setTimeout(() =>{
      dispatch(setCoc(false))
    },501)
    
  }
  
  return(
    <div 
    style={{zIndex: "130" , display: isCoc ? "block" : "none",opacity: isCheck ? "1" : "0",transition: "0.5s"}} 
    className="w-full min-h-full bg-[#0000006a] fixed left-0 top-0"
    
    >
    
    
    <div onClick={handle} style={{zIndex: "133"}} className="min-h-full absolute top-0 left-0  min-w-full "></div>
    
    
     <div style={{zIndex: "136", bottom: isCheck ? "0" : "-50vh",transition: "0.5s"}} className="w-full min-h-[50vh] bg-background fixed   left-0">
     <div className="flex justify-center items-center flex-col w-full h-full">
     <div className="w-[80%] flex flex-col justify-center items-center">
    <h1 className="text-[19px] mt-10 font-mono">
    We Care About Your Privacy
    </h1>  
    <h1 className="text-[11px] text-center mt-3 font-mono">
     We use cookies, to ensure that we give you the best experience on our website, to enable essential services and functionality on our site and to collect data on how visitors interact with our site and services. By clicking Accept, you agree to our use of all the cookies for advertising, analytics and support. For more information, please read our <Link className="underline" href="/policy%terms">Policy.</Link>
    </h1>
    <div className="flex gap-3 mt-3">
    <Button onClick={handleBlack} className="bg-red-600 text-white font-bold">Decline</Button>
    <Button onClick={handleBlack} className="bg-green-600 text-white font-bold">Accept</Button>
    </div>
     </div>
     </div> 
     </div> 
     </div>
    )
}