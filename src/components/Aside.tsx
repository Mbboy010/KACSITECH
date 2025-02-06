"use client"
import {useState, useRef,useEffect} from "react"
import {motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineReportGmailerrorred,MdOutlineRoundaboutRight,MdOutlineUpdate ,MdOutlinePolicy} from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { FaUserFriends,FaComments } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {useGenerateState} from "@/context"
import { useRouter } from 'next/navigation'


import type { RootState } from '../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../components/reduxComponent/slicerCom/handAside'
import Message from "./Message"
import { LiaUserFriendsSolid } from "react-icons/lia";
import {signOut } from "firebase/auth";
import LoadingFile from "../components/loading/LoadingFile"
import { Toaster, toast } from 'sonner'
import { setIsAuth } from '../components/reduxComponent/slicerCom/isAuth'
import { doc, getDoc } from "firebase/firestore";

import {auth,db} from "../server/firebase.cong"


interface props{
    handleAside: () => void;
    opa: string;
    wit: string;
    
  }

export default function Aside({handleAside,opa,wit,setOpa,setWit,setLef,lef}:props){
  
  const cref = useRef<HTMLDivElement>(null)
  const uref = useRef<HTMLDivElement>(null)
  
  const {isDone,setIsDone} = useGenerateState()
  
  
  const isAuth = useSelector((state: RootState) => state.isAuth.value)
  
  
  const router = useRouter()
  
  
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
  const [data, setData] = useState<objects>({})
  
  useEffect(() =>{
    if(!count){
    setTimeout(() =>{
    setWit("0vw")
    },1)
    
    setOpa("0")
    setLef("-77vw")
    }
    
    async function dat(){
    const user = await auth.currentUser
      
      
      if(user){
        
      const docRef = doc(db, "Users", user.uid);
      
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        
        setData(docSnap.data())
        
      } else {
         console.log("No such document");
      }
      }
    }
    
    dat()
    
    
    
  })
  
  
  
  const show = () =>{
    dispatch(increment(false))
  }
  
  const logOt = () =>{
    
  
  
    setIsDone(true)
      
      signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful.")
        router.push('/login%account')
        setIsDone(false)
      }).catch((error) => {
        // An error happened.
        toast.error("sometime is wrong, try again later")
        setIsDone(false)
      });
  
  }
  
  
   
  return(
    <div ref={uref} style={{zIndex: "100",transition: "0.1s" ,width: wit}} className="fixed overflow-hidden left-0 top-0 h-[100vh]">
    
    <div  ref={cref} style={{zIndex: "100",transition: "0.5s",opacity: opa}} onClick={show} className="relative block h-full w-full bg-[#00000092]">
    
    </div>
    <div style={{zIndex: "150",left: lef,transition: "0.5s"}} className="w-[77vw] top-0 h-screen absolute bg-background">
    
    <div className="h-[63px] w-full flex justify-between items-center">
        <motion.div
          whileHover={{scale: 0.97}}
          whileTap={{scale: 0.97  }}
          className="ml-2"
          >
          <Link className="flex justify-center items-center" href="">
           <Image src={require("../../public/20240902_190848.png")}
           width={56}
           /> 
            <h1 style={{marginTop: "10px"}} className="text-2xl  ml-1">TECH</h1>
           </Link>
          </motion.div>
          
        <motion.div
          whileHover={{scale: 1.10}}
          whileTap={{scale: 0.80  }}
          className="mr-2"
          onClick={show} 
          >
            <MdClose  className="block text-3xl md:hidden cursor-pointer" />
          </motion.div>
    
    </div>
    
    <div className="w-full flex justify-center items-center relative h-[40vw]">
    <div className="w-full justify-center items-center flex h-[53%]"> {
      isAuth ? 
      
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-[13px]">Wellcome back</h1>
      <h1 className="text-[15px]">{data.FirstName} {data.LastName}</h1>
      </div>
      
      : 
      <h1 className="text-[14px]">You're not login account</h1>
    }
    </div>
    </div> 
    
    <div className="w-full border-b-2 border-[foreground] flex justify-center items-center mb-1 h-[5vh] ">
    
     <div className="w-full flex justify-center items-center ">
     
     {
       
       isAuth ? 
       <div className="w-full flex justify-center items-center gap-3 my-4">
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <Link className="text-[14px]  font-bold " href="/profile">View profile</Link>
       </motion.div>
       
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       onClick={logOt}
       >
       <Link className="text-[14px] text-red-500 font-bold " href="#">LogOut</Link>
       </motion.div>
          </div>

       : 
       
       
              <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <Link className="text-[14px] font-bold " href="/login%account">Login</Link>
       </motion.div>
       
       }
      
       </div>
      </div>
      
      
     
     
    <div className="w-full h-full relative">
     <div className="flex ml-5 gap-5 flex-col">
     
     <motion.div
      className="mt-5"
       whileHover={{scale: 1.01}}
       whileTap={{scale: 0.95  }}
       >
     <Link className="font-bold items-center gap-[4px] flex text-[15px]" href="/"><RiHome2Line className="text-[22px] font-bold" />Home</Link>
       </motion.div>

       
       
       <Message className="hidden" />
       
       
       <motion.div
       whileHover={{scale: 1.01}}
       whileTap={{scale: 0.95  }}
       >
     <Link className="font-bold items-center gap-[4px] flex text-[15px]" href="/members"><FaUserFriends className="text-[22px] font-bold" />Members</Link>
       </motion.div>
       
   
   
     <motion.div
       whileHover={{scale: 1.01}}
       whileTap={{scale: 0.95  }}
       >
     <Link className="font-bold items-center gap-[4px] flex text-[15px]" href="/policy%terms"><MdOutlinePolicy className="text-[22px] font-bold" />Policy and terms</Link>
       </motion.div>
       

       
     <motion.div
       whileHover={{scale: 1.01}}
       whileTap={{scale: 0.95  }}
       >
     <Link className="font-bold items-center gap-[4px] flex text-[15px]" href="/report"><MdOutlineReportGmailerrorred className="text-[22px] font-bold" />Report</Link>
       </motion.div>
       
     </div>
    </div>
    
    
    
    
    
    
    </div>
         <LoadingFile  />
    </div>
    )
}