"use client"
import {useState,useEffect} from "react"
import Activities from "./activities"
import Content from "../../components/profile/Content"
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import {auth,db,storage} from "../../server/firebase.cong"
import {Spinner} from "@nextui-org/react";


export default function ProfileConponent(){
  
  
  
  const [data, setData] = useState<objects>({})
  const [condition,setCondition] = useState<boolean>(false)
  
  useEffect(() => {
    
    
    setInterval(() =>{
    if(auth.currentUser){
      setCondition(true)
    }else{
      setCondition(false)
    }
      
    },1)
    
    async function dat(){
      
      const user = await auth.currentUser
      
      
      if(user){
        
      const docRef = doc(db, "Users", user.uid);
      
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        
        setData(docSnap.data())
        
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      
      
      }
    }
    
    dat()
    
  })
  
  
  return(
    <div className="w-full h-full ">
    <div className="h-20 w-full"></div>
    
    {
    condition ?
    <div className="w-full h-full">
     <div className="w-full flex flex-col justify-center items-center  h-[40vw]">
         <div className="flex flex-col justify-center items-center  w-full overflow-hidden h-[68%] ">
          <h1 className="text-[14px]">Wellcome back</h1>
          <h1 className="text-[16px]">{data.FirstName} {data.LastName}</h1>
         
        </div>
        
        </div>
        
        <Activities data={data}/>
        
        </div>
        :
        
        <div className="flex flex-col justify-center items-center w-full">
        
          <Spinner/>
              
              
        </div>
    
    }
    
    </div>
    )
}

