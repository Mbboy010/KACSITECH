"use client"
import { useState,useEffect  } from "react"
import Acc from "./Acc"
import AccUi from "./AccUi"
import { BiCodeAlt } from "react-icons/bi";

import { doc,getDocs,collection } from "firebase/firestore";
import {auth,db,storage} from "../server/firebase.cong"
import {Spinner} from "@nextui-org/react";



export default function Accounting() {
  
  const [data, setData] = useState<array>([])
  const [istrue,setIstrue] = useState<boolean>(false)
  
  const user = auth.currentUser
   
   useEffect(() =>{
     
   async function dat(){
      
      
        
      let docSnap = await getDocs(collection(db, "Post"))
            .then(async (querySnapshot)=>{              
                const newData = await querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
               await setData(newData);
               
                     if (data.length >= 1) {
                       await setIstrue(true)
                         }
      
               
            })

      
   }
    
    
    
    dat()
    
  
     
   })
  
  

  return (
      <div className="flex gap-5 mb-10 flex-col items-center w-full">
      {
        
        istrue ? <div className="flex gap-5 flex-col items-center w-full">
        {
        data?.map((e,i) => (<div key={i}>
        <Acc title={e.Title} body={e.Post} />
        </div>)
        )
        }
        </div>
        
        :
        
        <div className="flex gap-5 flex-col items-center w-full">
        <AccUi/>
        <AccUi/>
        <AccUi/> 
        </div>
        

        
        
      }
      </div>
  );
}