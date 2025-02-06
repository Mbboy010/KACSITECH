"use client"
import Image from "next/image";
import Link from "next/link"
import { FaSquareInstagram ,FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import {motion} from "framer-motion"
import type { RootState } from '../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'

import { Toaster, toast } from 'sonner'

import { useRouter } from 'next/navigation'

import React,{useRef,useEffect,useState} from "react"

import { doc,getDocs,collection, getDoc } from "firebase/firestore";
import {auth,db,storage} from "../server/firebase.cong"


export default function Footer(){
  
 const isAuth = useSelector((state: RootState) => state.isAuth.value)
 
 const router = useRouter()
 const [data,setData] = useState<objects>({})
 
 const handleClick = () =>{
   if(!isAuth){
     return router.push('/login%account')
   }
   
   toast.success("you're already login")
   
 }
 
 useEffect(() =>{
  async function dat(){
      
      
        
      const docRef = doc(db, "AdminDetails", "Social");
      
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
  
  return(
    <div style={{zIndex: "60"}}>
    <footer style={{backgroundColor: "#0A131A"}} className="p-4 border-t border-blue-900">
      <div>
      <div className="items-center  w-full flex justify-center flex-row">
           <Image src={require("../../public/20240902_190848.png")}
           width={56}
           /> 
            <h1 style={{marginTop: "10px"}} className="text-2xl  ml-1 text-white">TECH</h1>
          </div>
          
          
       <div className="w-full flex justify-center items-center gap-5 my-4">
       
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <Link className="text-white hover:text-gray-300" href="/">Home</Link>
       </motion.div>
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <h1 style={{color: isAuth ? "#817f7f" : "white"}} className="text-white hover:text-gray-300" onClick={handleClick}>login</h1>
       </motion.div>
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <Link className="text-white hover:text-gray-300" href="/policy%terms">policy</Link>
       </motion.div>
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <Link className="text-white hover:text-gray-300" href="/about">About</Link>
       </motion.div>
      
       </div>
       
       
       <div className="w-full flex justify-center items-center">
       <h1 className="text-1xl font-black font-mono text-white">follow us on</h1>
       </div>
       
       <div className="w-full flex justify-center items-center gap-3 my-4">
       
       
       
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <a className="text-white hover:text-gray-300" href={data.Linkdin}><FaLinkedin className="text-white text-2xl hover:text-gray-300" href="#"/></a>
       </motion.div>
       
     <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <a className="text-white hover:text-gray-300" href={data.Instagram}><FaSquareInstagram className="text-white text-2xl hover:text-gray-300" /></a>
       </motion.div>
      
      <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <a className="text-white hover:text-gray-300" href={data.Whatsapp}><IoLogoWhatsapp className="text-white text-2xl hover:text-gray-300" /></a>
       </motion.div>
       
       <motion.div
       whileHover={{scale: 1.10}}
       whileTap={{scale: 0.90  }}
       >
       <a className="text-white hover:text-gray-300" href={data.Facebook}><FaFacebook className="text-white text-2xl hover:text-gray-300" href="#"/></a>
       </motion.div>
       
       </div>
       
       
      </div>
</footer>
  <footer style={{backgroundColor: "#0A131A"}} className="p-4">
  <aside>
    <p className="text-center text-white">Copyright © {new Date().getFullYear()} - All right reserved by <br/>
    KACSI TECH</p>
  </aside>
</footer>
    </div>
    )
}