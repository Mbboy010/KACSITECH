import React,{useState} from 'react'
import Image from "next/image";

interface props{
  isCoc: boolean;
  isCheck: boolean;
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
  setCoc: React.Dispatch<React.SetStateAction<boolean>>;
  current: number;
  data: array;
}


export default function PersonDetails({isCoc,isCheck,setIsCheck,setCoc,current,data}:props){
  
  const [check,setCheck] = useState<boolean>(true)
  
  const handle = () => {
    if(check){
      setCheck(false)
    }else{
      setCheck(true)
    }
  }
  
  const handleBlack = () =>{
    
    
    
    setIsCheck(false)
      
    setTimeout(() =>{
      setCoc(false)
    },501)
    
  }
  
  return (
    
    
    <div 
    style={{zIndex: "130" , display: isCoc ? "block" : "none",opacity: isCheck ? "1" : "0",transition: "0.5s"}} 
    className="w-full min-h-full bg-[#0000006a] fixed left-0 top-0">
    <div onClick={handleBlack} style={{zIndex: "133"}} className="h-[15vh] w-full  ">
    </div>
    
     <div style={{zIndex: "136", bottom: isCheck ? "0" : "-80vh",transition: "0.8s"}} className="w-full min-h-[85vh]  bg-background fixed   left-0">
     <div className="flex justify-center items-center flex-col w-full h-full">
     <div className="w-full h-full relative flex flex-col justify-center items-center">
     
        <img className="rounded-t w-full" src={data[current == 1 ? 0 : current -1].imgee} />
    
    
     </div>
     
    <div style={{zIndex: "139"}}  className="w-full h-full absolute left-0 top-0 ">
    
    <div
    style={{height: check ? "40%" : "60%",transition: "0.5s"}} 
    onClick={handle} className="w-full "></div>
    <div 
    style={{boxShadow: "0px 0px 80px black",bottom: check ? "0%" : "-20%",transition: "0.5s"}} 
    className="w-full h-[60%] absolute bottom-0 left-0  overflow-y-scroll bg-background">
    
    
   <h1 className="text-[14px] mt-5 mr-2 mb-[4px] ml-7"><span className="font-bold">Name: </span>{data[current == 1 ? 0 : current -1].name}</h1>
   <h1 className="text-[14px] mr-2 mb-[4px] ml-7"><span className="font-bold">Know as: </span>{data[current == 1 ? 0 : current -1].know}</h1>
   <h1 className="text-[14px]  mr-2 mb-[4px] ml-7"><span className="font-bold">Carrier: </span>{data[current == 1 ? 0 : current -1].ocurp}</h1>
   <h1 className="text-[14px]  mr-2 mb-[4px] ml-7"><span className="font-bold">Country: </span>{data[current == 1 ? 0 : current -1].country}</h1>
   <h1 className="text-[14px]  mr-2 mb-[4px] ml-7"><span className="font-bold">Gmail: </span>{data[current == 1 ? 0 : current -1].gmail}</h1>
   <h1 className="text-[14px]  mr-2 mb-[4px] ml-7"><span className="font-bold">Phone number: </span>{data[current == 1 ? 0 : current -1].phone}</h1>
    
   <h1 className="text-[13px] mt-5 mr-2 font-bold mb-2 w-full text-center">more about</h1>
   <h1 className="text-[13px]  mr-2 mb-2 ml-8">{data[current == 1 ? 0 : current -1].description}</h1>


    
    
    </div>
    

    
    </div>
     </div> 
     </div> 
     </div>

     
  )
}