"use client"
// import Image from './Signup/Image';
import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/react"
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
import {motion,useScroll,useTransform} from "framer-motion"
import "./animation.css"
import React,{useState,useEffect,useRef} from "react"
import PersonDetails from "./personDetails"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { doc,getDocs,collection } from "firebase/firestore";
import {auth,db,storage} from "../server/firebase.cong"

export default function CarouselF(){
  
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(1)
  const [count, setCount] = useState<number>(0)
  const [chan, setChan] = useState<number>()
  const [data,setData] = useState<array>([])
  const [istrue,setIstrue] = useState<boolean>(false)
  
  const [isCheck,setIsCheck] = useState<boolean>(false)
  const [isCoc,setCoc] = useState<boolean>(false)
  
  const handleBlack = () =>{
    setTimeout(() =>{
      setIsCheck(true)
    },1)
      setCoc(true)
  }
  
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    setChan(current - 1)
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api,istrue])
  
  useEffect(() =>{
    
    
    
    async function dat(){
      
      
        
      let docSnap = await getDocs(collection(db, "AdminUsers"))
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
    
    
    
    
    // setData(datat)
//     setIstrue(true)
  })
  
  const divRef = useRef<HTMLDivELement>(null)
  
  
  
  const {scrollYProgress} = useScroll({
    target: divRef,
    offset: ["end end","start end"]
  })
  
  const scale = useTransform(scrollYProgress,[0.40,1],[1,0.40])
  const opacity = useTransform(scrollYProgress,[1,1],[1,1])
  
  return(
    <div >
   <div className="w-screen my-6">
      <Carousel setApi={setApi} className="w-screen " >
      <div >
      <div>
        <CarouselContent >
          {Array.from({ length: istrue ? data.length : 1}).map((_, index) => (
            <CarouselItem key={index}>
            <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95  }}
            ref={divRef} style={{scale,opacity}} className="flex gap-5 justify-center items-center">
      <MdArrowBackIos style={{color: current == 1 ? "#bfbabaa7" : ""}} className="text-2xl "/>

              <motion.Card 
              style={{boxShadow: "0 0 10px #7d608075"}} className=" rounded-3xl overflow-hidden w-64 h-72  my-3">
                <CardContent className=" w-full h-full m-0 p-0 ">
              <div className="relative flex-col flex justify-center items-center w-full h-full">
                <div style={{backgroundColor: "#b002c264", zIndex: ""}} className="p-20 absolute bottom-0 left-0 rounded-tr-full "/>
                <div className="w-full
              h-full absolute backdrop-blur " />
              
              { 
                
                istrue ?
                
                <div className=" flex flex-col justify-center items-center relative w-full h-full ">
                <div style={{zIndex: "20"}} className="w-full justify-center items-center flex">
                 <img className="rounded-full border border-fuchsia-500" width={"100"} src={data[current == 1 ? 0 : current -1].imgee} />
                </div>
                <div style={{zIndex: "10"}} className="w-full my-5 flex flex-col justify-center items-center ">
                <div className="w-full flex justify-center items-center">
                <h1 style={{fontSize: "19px"}} className="font-bold text-center w-full">{data[current == 1 ? 0 : current -1].name}</h1>
                </div>
                <div className="w-full flex justify-center items-center">
                <p className="font-mono w-full text-center font-light">{data[current == 1 ? 0 : current -1].ocurp}</p>
                </div>

                </div>
                <div className="w-full justify-center items-center flex">
                <h1><Button onClick={handleBlack} className="text-white font-bold bg-blue-600">view full</Button></h1>
                </div>
                </div>
                  
                  
                  :
                  
               <div className=" flex flex-col justify-center items-center relative w-full h-full ">
                <div style={{zIndex: "20"}} className="w-full justify-center items-center h-[30%] flex">
                 <div className="rounded-full h-full      w-[35%] bg-[#edebebcc] cousss "  />
                </div>
                <div style={{zIndex: "10"}} className="w-full my-5 flex flex-col justify-center h-[20%] relative gap-2 items-center ">
              <div className="w-full h-[50%]  relative justify-center items-center flex">
              <h1 className="bg-[#edebebcc] cousss rounded text-green-600 h-[70%] w-[60%]"> </h1>
                </div>
                <div className="w-full h-[40%] relative justify-center items-center flex">
             <p className="bg-[#edebebcc] rounded cousss text-green-600 h-[60%] w-[80%]"> </p>
                </div>
                </div>
                <div className="w-full h-[10%]  relative justify-center items-center flex">
                <p className="bg-[#edebebcc] cousss rounded text-green-600 h-full w-[40%]"></p>
                </div>
                </div>
                  
                  
                  }
                </div>
                
                </CardContent>
              </motion.Card>
      <MdArrowForwardIos style={{color: current == count ? "#bfbabaa7" : ""}}  className="text-2xl "/>
              
              
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        </div>
        <div className="">
        </div>
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
      <div className="flex gap-10 justify-center items-center">
      </div>
    </div>
    
    
    
    
    
    
    {
        
      istrue && <PersonDetails data={data} current={current} isCheck={isCheck} setIsCheck={setIsCheck} isCoc={isCoc} setCoc={setCoc}/>  
   
    }

  
    
    
    
    
    </div>
    )
}

const datat = [
  {
    imgee: require("../../public/Untitled33_20240812175017.jpg"),
    name: "Musa hakilu", 
    ocurp: "software engineer/developer",
    description: "KACSITECH is a cutting-edge ive suite of tools, resources, and services to  Our website provides a comprehensive suite of  software ideas to life",
    country: "nigeria",
    gmail: "mmggjh@gmail.com",
    phone: "080809i99",
    know: "mb"
  },
  { 
    imgee: require("../../public/Untitled33_20240812175017.jpg"),
    name: "Ibrahim tijjani", 
    ocurp: "software engineer/developer",
    description: "mutdhdjjrirjhrhrjjrjrjrjjrjrjrjjr",
    country: "nigeria",
    gmail: "mmggjh@gmail.com",
    phone: "080809i99",
    know: "aski"
  }
  
  ]