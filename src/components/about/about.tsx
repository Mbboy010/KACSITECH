"use client"


import Link from "next/link"

import React,{useRef,useEffect,useState} from "react"

import { doc,getDocs,collection, getDoc } from "firebase/firestore";
import {auth,db,storage} from "../../server/firebase.cong"




export default function Aboutt() {
  
  const [data,setData] = useState<objects>({})
  
  useEffect(() =>{
    
    
    
    async function dat(){
      
      
        
      const docRef = doc(db, "AdminDetails", "Contact");
      
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        
        setData(docSnap.data())
        console.log(auth.currentUser)
        
        
        
      } else {
        // docSnap.data() will be undefined in this case
        
               
            
      
               
        

      
   }
    
    }
    
    dat()
    
    
    
    
    
    




  })
  
  
  const openLink = () =>{
    window.location.href = data.Facebook
  }
  
  
  return (
    <div className="w-full h-full">
    
    
    
    <h1 className="text-2xl mb-2 ml-2">Welcome to KACSITECH</h1>
    
   <h1 className="text-[13px] mr-2 ml-2 mb-5">KACSITECH is a cutting-edge platform designed for software creators, innovators, and problem-solvers. Our website provides a comprehensive suite of tools, resources, and services to help you bring your soft.ware ideas to life.</h1>

    <h1 className="text-[13px] ml-3 mb-4 font-bold">• Features:</h1>

    <h1 className="text-[13px] mr-2 mb-2 ml-7"><span className="font-bold">1. Project Management: </span>Organize and prioritize your tasks, collaborate with team members, and track progress. </h1>
    
    <h1 className="text-[13px] mr-2 mb-2 ml-7"><span className="font-bold">2. Code Editor: </span>Write, test, and refine your code with our intuitive, feature-rich editor. </h1>
   
    <h1 className="text-[13px] mr-2 mb-2 ml-7"><span className="font-bold">3. Design and Prototyping: </span>Create visually stunning designs and interactive prototypes with our drag-and-drop interface. </h1>
   
    <h1 className="text-[13px] mr-2 mb-2 ml-7"><span className="font-bold">4. Testing and Debugging: </span>Identify and fix issues with our advanced testing and debugging tools. </h1>
   
    <h1 className="text-[13px] mr-2 mb-4 ml-7"><span className="font-bold">5. Deployment and Hosting: </span>Seamlessly deploy and host your software on our secure, scalable infrastructure.</h1>


<h1 className="text-[13px] ml-3 mb-4 font-bold">• Resources:</h1>

    <h1 className="text-[13px] mr-2 mb-2 ml-7"><span className="font-bold">1. Tutorials and Guides: </span>Access our extensive library of tutorials, guides, and best practices. </h1>
    <h1 className="text-[13px] mr-2 mb-2 ml-7"><span className="font-bold">2. Community Forum: </span>Connect with fellow developers, ask questions, and share knowledge. </h1>
    <h1 className="text-[13px] mr-2 mb-4 ml-7"><span className="font-bold">3. Blog:</span> Stay up-to-date with the latest industry trends, news, and insights. </h1>


<h1 className="text-[13px] ml-3 mb-4 font-bold">• Pricing:</h1>



    <h1 className="text-[13px] mr-2 mb-2 ml-7"><span className="font-bold">1. Free: </span>Ideal for hobbyists and small projects. </h1>
    <h1 className="text-[13px] mb-2 mr-2 ml-7"><span className="font-bold">2. Pro:</span> Perfect for professionals and growing teams ($29/month). </h1>
    <h1 className="text-[13px] mr-2 mb-4 ml-7"><span className="font-bold">3. Enterprise: </span>Custom solutions for large organizations (contact us for a quote). </h1>




<h1 className="text-[13px] ml-3 mb-4 font-bold">Get Started Today:</h1>

<h1 className="text-[13px] mr-2 mb-2 ml-3">Join the KACSITECH community and start building your dream software. Sign up now and take advantage of our free trial.</h1>

   <h1 className="text-[13px] mb-4 ml-3"><Link className=" text-[13px] underline text-blue-700 active:text-red-600 visited:text-fuchsia-800 font-bold" href="/create%new%account">Join us</Link></h1>



<h1 className="text-[13px] ml-3 mb-4 font-bold">Contact Us:</h1>

<h1 className="text-[13px] mb-2 ml-3"><span className="font-bold">Email: </span>{data.Gmail}</h1>


<h1 className="text-[13px] mb-2 ml-3"><span className="font-bold">WhatsApp: </span>{data.Whatsapp}</h1>

<h1 className="text-[13px] mb-2 ml-3"><span className="font-bold">Facebook: </span>

  <span onClick={openLink} className=" text-[13px]  text-blue-700 active:text-red-600 underline visited:text-fuchsia-800 font-bold" >KACSITECH</span>


</h1>





<h1 className="text-[13px] ml-3 mb-2 font-bold">Privacy Policy:</h1>

    <h1 className="text-[13px] mb-20 ml-3"><Link className=" text-[13px]  text-blue-700 active:text-red-600 underline visited:text-fuchsia-800 font-bold" href="/policy%terms">policy and termrs</Link></h1>


    
    </div>
  )
}