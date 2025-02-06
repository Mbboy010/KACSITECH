// import Image from '../Signup/Image';

"use client"
import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setCoc } from '../../components/reduxComponent/slicerCom/cookies'
import Image from "next/image";
export default function PolicyTerms(){
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    setTimeout(() =>{
      dispatch(setCoc(false))
    },2)
  },[])
  
  
  
  return(
   <div>
    <div   className="mt-20 ml-2 w-screen h-full flex flex-col">
    
    
    <h1 className="text-[13px] mr-2 ml-2 mb-5">Here are information of cookies,policy and terms which would guide you to good understand:</h1>
    
    <h1 className="text-[13px] mr-2 ml-3 mb-4 font-bold">1. Privacy Policy:</h1>
    
    
    <h1 className="text-[13px] mr-2 mb-2 ml-7">• Outlines how you collect, use, and protect user data.</h1>
    <h1 className="text-[13px] mr-2 mb-2 ml-7">• Covers data collection methods, data retention periods, and data security measures.</h1>
    <h1 className="text-[13px] mr-2 mb-2 ml-7">• Addresses user rights like data access, rect ification, and erasure.</h1>
    <h1 className="text-[13px] mr-2 mb-4 ml-7">• Explains how you handle cookies and other tracking technologies.</h1>
    
    
  <h1 className="text-[13px] ml-3 mr-2 mb-4 font-bold">2. Terms of Service (TOS):</h1>


 <h1 className="text-[13px] mr-2 mb-2 ml-7">• Defines the terms and conditions for using your website.</h1>
 <h1 className="text-[13px] mr-2 mb-2 ml-7">• Covers user responsibilities, intellectual property rights, and limitations of liability.</h1>
 <h1 className="text-[13px] mr-2 mb-4 ml-7">• Outlines dispute resolution procedures and governing law.</h1>
    

 <h1 className="text-[13px] mr-2 ml-3 mb-4 font-bold">3. Cookie Policy:</h1>


 <h1 className="text-[13px] mr-2 mb-2 ml-7">• Explains what cookies are and how you use them on your website.</h1>
 <h1 className="text-[13px] mr-2 mb-2 ml-7">• Describes the types of cookies used (e.g., session, persistent, first-party, third-party).</h1>
 <h1 className="text-[13px] mr-2 mb-4 ml-7">• Provides information on how users can manage cookie preferences.</h1>
 
 
  <h1 className="text-[13px] mr-2 ml-3 mb-4 font-bold">4. Refund Policy:</h1>
 
 
  <h1 className="text-[13px] mr-2 mb-2 ml-7">• Specifies your refund policy for products or services sold on your website.</h1>
  <h1 className="text-[13px] mr-2 mb-4 ml-7">• Outlines eligibility criteria, refund procedures, and timeframes.</h1>
  
  
 
  <h1 className="text-[13px] mr-2 ml-3 mb-4 font-bold">5. Disclaimer:</h1>
 
  <h1 className="text-[13px] mr-2 mb-2 ml-7">• Limits your liability for information provided on your website.</h1>
  
  <h1 className="text-[13px] mr-2 mb-20 ml-7">• Disclaims warranties and guarantees for content accuracy.</h1>


 
    
    </div>
    </div>
    )
}

