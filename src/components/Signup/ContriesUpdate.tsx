import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {motion,useScroll,useTransform} from "framer-motion"
import {CountriesData} from "./CountriesData"

interface props {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  country: string;
}
export default function Contries({setCountry,country}:props) {
  
  const newCoun =(e)=>{
     setCountry(e)
  }
  
  
 return (
   <div>
     <motion.div
     
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    
     className="bg-[#81818171] border border-foreground rounded-lg flex flex-row justify-center items-center w-[80vw] h-10">
   <Select
   
     style={{background: "none"}} 
     className=" w-[100%] rounded-lg"
     placeholder={country}
     
   >
      {CountriesData.map((coun) => (
        <SelectItem
        startContent={<Avatar alt={coun.key} className="w-6 h-6" src={coun.avatar} />}
        onClick={() => newCoun(coun.key)} key={coun.key}>
          
          {coun.labalData}
        </SelectItem>
      ))}
   </Select>
    </motion.div>
    </div>
 );
}
