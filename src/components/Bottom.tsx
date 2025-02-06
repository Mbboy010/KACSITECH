"use client"

import "./animation.css"

import {motion,useScroll,useTransform} from "framer-motion"
import React,{useRef,useEffect,useState} from "react"

import { doc,getDocs,collection, getDoc } from "firebase/firestore";
import {auth,db,storage} from "../server/firebase.cong"

export default function Bottom(){
  
  
  const divRef = useRef<HTMLDivELement>(null)
  
  interface objects{
    numbers: string;
  }
  
  const [data,setData] = useState<objects>({})
  
  const [istrue,setIstrue] = useState<boolean>(false)
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  useEffect(() =>{
    
    
    
    async function dat(){
      
      
        
      const docRef = doc(db, "AdminDetails", "ProjectNumbers");
      
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        
        setData(docSnap.data())
        console.log(auth.currentUser)
        
        let e = await Object.values(data)
    
         if(e.length >= 1){
              setIstrue(true)
              }
        
      } else {
        // docSnap.data() will be undefined in this case
        
               
            
      
               
        

      
   }
    
    }
    
    dat()
    
    
    
    
    
    

    // setData(dat)
//     
    let e = Object.values(data)
    
    if(e.length >= 1){
        setIstrue(true)
      }

  })
  
  const scale = useTransform(scrollYProgress,[0.20,1],[1,0.20])
  const opacity = useTransform(scrollYProgress,[1,1],[1,1])
  
  
  return(
      <div className="w-screen h-96   relative" >
       <div className="w-full h-full relative">
       <div style={{zIndex: 60}} className="flex w-full h-full justify-center items-center">
            <motion.div ref={divRef} style={{scale,opacity}}
     className="newanimate min-w-16 min-h-16 opacity-50 rounded-full bg-pink-600 relative "></motion.div>
     <motion.div ref={divRef} style={{scale,opacity}}
     className="newanimat relative min-w-16 min-h-16 opacity-50 rounded-full bg-blue-600"></motion.div>
       </div>
       <div className="absolute top-0 left-0 flex justify-center items-center backdrop-blur-xl w-full h-full">
       
    <motion.div
    whileHover={{scale: 1.05}}
     whileTap={{scale: 0.97  }}
    ref={divRef} style={{scale,opacity}}
    className="flex h-full w-full flex-col gap-5 justify-center items-center">
       
      <h1 className="text-center text-3xl xl:text-4xl  font-bold">We have  [ <span className="">{istrue ? data.numbers : <span className="dots">...</span>}</span> ] <span className="text-green-600">successful</span><br/> works that have been collected <br/> from different countries</h1>
      <h1 className=" mt-3 xl:text-2xl text-center ">we are to work for you through efficiency accuracy, skills and also transparency</h1>
       
       </motion.div>
       </div>
       </div>
      </div>
    )
}

const dat = {
  numbers: "444"
}