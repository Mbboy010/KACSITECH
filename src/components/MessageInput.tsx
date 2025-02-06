"use client"
import React,{useState,useEffect} from "react"
import {motion} from "framer-motion"
import { MdAttachFile } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import {Textarea} from "@nextui-org/react";
import { doc, setDoc,collection, addDoc , getDocs } from "firebase/firestore";
import {auth,db,storage} from "../server/firebase.cong"
import { Toaster, toast } from 'sonner'

import type { RootState } from '../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'

export default function MessageInput(){
  
  const [value,setValue] = useState<string>("")
  const [data, setData] = useState<array>([])
  const user =  auth.currentUser
  
  const isAuth = useSelector((state: RootState) => state.isAuth.value)
  
  
  const now =  new Date()
  const d =  now.toLocaleDateString("En-US", {
            dateStyle: "medium"
          })
          
  const tim =  now.getHours() +":"+ now.getMinutes() +":"+ now.getSeconds()
        
  
  let fullData = {
     
     bodyMess: value,
     user: "client",
     date: d,
     time: tim,
     dataFill: false
      
    }
    
  
    
  useEffect(() =>{
    
    if(user){
    
    try {
      
   
      
   async function dat(){
      let docSnap = await getDocs(collection(db, "message"+user.uid))
            .then(async (querySnapshot)=>{              
                const newData = await querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
               await setData(newData);
               
                     
      
               
            })

      
   }
    dat()
    } catch (error) {
      
      
      
    }
     
    }else{
     
    }
  
     
   })
  
  const handleForm =async (e: React.FormEvent) =>{
    e.preventDefault()
    
    if(isAuth){
      
      
    try {
      
    if(value == ""){
     return toast.warning("message input empty")
      }
    
    
    const docRef = await addDoc(collection(db, "message"+user.uid),{
        ...fullData,
        messNum: data.length + 1
      });
    
    await setValue("")
    
    await toast.success("message send")
    
    } catch (error) {
   await toast.error("something when wrong try again")
    }
    
    }
    
  }
  
  
  return(
     <div style={{ zIndex: "124"}} className="h-[80px] bg-background border-t border-foreground fixed bottom-0 left-0  w-full flex justify-center items-center">
           
    <motion.div 
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    className="bg-[#81818171] border  backdrop-blur-3xl border-foreground rounded-lg flex flex-row justify-center items-center w-[65vw] h-10">
      <textarea  
      onChange={(e) => setValue(e.target.value)} style={{background: "none"}} className=" border-none w-[80%] flex justify-center h-[80%] outline-none resize-none  placeholder:text-foreground placeholder:opacity-50 text-[14px]"  type="text"
      placeholder="Message" 
      value={value}
      rows="1"
      />
      </motion.div>
       <motion.div 
       whileHover={{scale: 1.02}}
       whileTap={{scale: 0.98  }}
       onClick={handleForm}
       className="w-[15vw] ml-2 flex justify-center items-center rounded-lg h-10 bg-blue-500">
       <IoMdSend className="text-2xl" />
       </motion.div>
       </div> 
    
    )
  
}