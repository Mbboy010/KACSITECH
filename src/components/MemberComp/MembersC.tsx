"use client"
import React,{useEffect,useState} from "react"
import Post from "./Post"
import Pag from "./Pag"
import {Pagination} from "@nextui-org/react";
import {Button} from "@nextui-org/react"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {motion,useScroll,useTransform} from "framer-motion"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import Image from "next/image";
import { doc,getDocs,collection } from "firebase/firestore";
import {auth,db,storage} from "../../server/firebase.cong"
import {Spinner} from "@nextui-org/react";

export default function MembersC() {
  
  
  const [currentPage,setCurrentPage] = useState<number>(1)
  const [postPer,setPostPer] = useState<number>(9)
  
  
  const [istrue,setIstrue] = useState<boolean>(false)
  
  const user = auth.currentUser
  
  const [state,setState] = useState<array>([])
  
    const [condition,setCondition] = useState<boolean>(true)

  
  useEffect(() =>{
    
    
    async function dat(){
      
      
        
      let docSnap = await getDocs(collection(db, "Users"))
            .then(async (querySnapshot)=>{              
                const newData = await querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
               await setState(newData);
               
                     if (state.length >= 1) {
                       await setCondition(false)
                         }
      
               
            })

      
   }
    
    
    
    dat()
    
    
    
    
    
    
  })
  
  const lastIndex = currentPage * postPer;
  const fisrtIndex = lastIndex - postPer;
  
  const currentPost = state.slice(fisrtIndex,lastIndex);
  const pagination = (pagi) => setCurrentPage(pagi)
  
  
  let pagNumber = []
  for(let i = 1; i < Math.ceil((state.length + 9)/postPer); i++){
    pagNumber.push(i);
  }
  
  const back = () =>{
    
    if(currentPage != 1){
      setCurrentPage(currentPage - 1)
      setCondition(true)
    setTimeout(() =>{
      setCondition(false)
    },1000)
    }
  }
  const next = () =>{
    
    if(currentPage != pagNumber.length){
      setCurrentPage(currentPage + 1)
      setCondition(true)
    setTimeout(() =>{
      setCondition(false)
    },1000)
    }
  }
  
  
  
  return(
    <div className="">
    
    
    <div className="mt-20 w-screen relative min-h-full flex flex-col items-center">
    
    
    
    <div className=" rounded-3xl min-h-[7vh] w-full flex flex-row items-center mb-2">
    
    <h1 className="font-bold text-center m-3 ">Total members: {state.length}</h1>
    

    
    
      </div>
    
    
    
    
    
        
    <div className="w-full  mb-2 relative min-h-[73vh]">
   
      <Post state={currentPost} condition={condition}/>
    
    </div>
    
      
    <div className=" min-h-[7vh] w-full flex flex-row justify-center items-center mb-2">
    

    
     <div className="mr-2">
     
     
     <div className="flex justify-center items-center w-full ">
    
    
    <motion.div 
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.79  }}
    className="mr-3">
    <MdKeyboardArrowLeft style={{color: currentPage == 1 ? "#87878770" : ""}} className="text-4xl font-bold" onClick={back} />
    </motion.div> 
    
      <span className="text-[14px] font-bold">{currentPage}/{pagNumber.length}</span>
      
    <motion.div 
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.79  }}
    className="ml-3">
    <MdKeyboardArrowRight style={{color: currentPage == pagNumber.length ? "#87878770" : ""}} className="text-4xl  font-bold" onClick={next} />
    </motion.div>
    
    
    
    </div>
    
    
      </div>
    
    </div>
    
    
    </div>
    
    
    </div>
    )
}

const data = [
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  {
    img: "../../../public/Untitled54_20240904213502.png",
    name: "musa hakilu",
    email: "musa@gmail.com"
  },
  ]

