import { CgProfile } from "react-icons/cg";
import { MdModeEdit } from "react-icons/md";
import  {useState} from "react"
import { MdClose } from "react-icons/md";
import ImageCrop from "./ImageCrop"
import Image from "next/image";
import {motion,useScroll,useTransform} from "framer-motion"

interface props{
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  imageUrl: string;
}

export default function Images({setImageUrl,imageUrl}:props){
  
  const [istrue,setIstrue] = useState<boolean>(false)
  
  
  const imageUpdate=(url)=>{
    setImageUrl(url)
  }
  
  const handToch =  () =>{
    setIstrue(true)
  }
  const show =  () =>{
    setIstrue(false)
  }
  
  
  return(
    <div style={{zIndex: "402",display: "none"}} className="w-screen relative">
    <div className="w-full flex justify-center items-center relative relative h-[40vw]">
    <motion.div 
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    onClick={handToch} className="w-[27%]  border-foreground border-dashed border-2 justify-center items-center relative rounded-full h-[68%]">
    <div className="w-full flex justify-center items-center w-full">
    {
     imageUrl == "" ?
    (<CgProfile className="w-full h-full"/>)
    :
    (<img 
    src={imageUrl}
    className="w-full h-full rounded-full"
    />)
    }</div>
    <div className="absolute h-full top-0 left-0 w-full " >
    <div className="w-[20%] top-[-2%] rounded-full left-[74%] h=[20%] bg-foreground absolute" >
    
    <MdModeEdit className="h-full w-full text-[background]" />
    
    </div>
    </div>
    </motion.div>
    </div>
    <div style={{display: istrue ? "block" : "none", zIndex: "400"}} className="fixed w-screen hidden h-screen bg-red-600 left-0 flex flex-col justify-center items-center top-0">
    <div className="h-full flex justify-center items-center relative w-full">
     <div style={{zIndex: "180"}} className="h-[85vh] relative rounded-xl border-2 border-foreground border-solid w-[90vw] bg-background">
      <motion.div
      style={{zIndex: "190"}}
          whileHover={{scale: 1.10}}
          whileTap={{scale: 0.80  }}
          className="mr-3 mt-3  absolute right-0 top-0"
          onClick={show} 
          >
            <MdClose  className="block text-3xl  cursor-pointer" />
          </motion.div>
          
      <div className="w-full h-full ">
      <ImageCrop show={show} imageUpdate={imageUpdate} />
      </div>
          
     </div>
    </div>
    </div>
    </div>
    )
  
}