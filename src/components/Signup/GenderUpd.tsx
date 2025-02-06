import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {gender} from "./data";
import {SelectorIcon} from "./SelectorIcon";
import {motion,useScroll,useTransform} from "framer-motion"

interface props {
  setGender: React.Dispatch<React.SetStateAction<string>>;
  gend: string;
}

export default function Gender({setGender,gend}:props){
  
  const newGender = (e) =>{
    setGender(e)
  }
  
  return(
    <div>
     <motion.div 
     
     whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
     
     className="bg-[#81818171] border border-foreground rounded-lg flex flex-row justify-center items-center w-[80vw] h-10">
<Select
      placeholder={gend}
      style={{background: "none"}} 
      className=" w-[100%] rounded-lg"
      disableSelectorIconRotation
      selectorIcon={<SelectorIcon />}
      required 
    >
      {gender.map((gen) => (
        <SelectItem onClick={() => newGender(gen.key)} key={gen.key}>
          {gen.labalData}
        </SelectItem>
      ))}
    </Select>
    </motion.div>
    </div>
    )
}