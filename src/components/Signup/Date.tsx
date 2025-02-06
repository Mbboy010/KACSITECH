import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {datee} from "./data";
import {SelectorIcon} from "./SelectorIcon";
import {years} from "./YearsData"
import {month} from "./MonthData"
import {motion,useScroll,useTransform} from "framer-motion"
interface props {
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dates({setYear,setDate,setMonth}:props){
  return(
    
    <div>
        <motion.div 
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
        className="bg-[#81818171] border border-foreground rounded-lg flex flex-row justify-center items-center w-[80vw] h-10">
<Select
      placeholder="Month"
      style={{background: "none"}} 
      className="max-w-xs w-[33.3%] rounded-lg"
      disableSelectorIconRotation
      selectorIcon={<SelectorIcon />}
      required 
    >
      {month.map((mont) => (
        <SelectItem onClick={() => setMonth(mont.key)} required key={mont.key}>
          {mont.labalData}
        </SelectItem>
      ))}
    </Select>
    
  <div className="border-[foreground] border-l-2 h-[80%] w-1"></div>

<Select
      placeholder="Date"
      style={{background: "none"}} 
      className="max-w-xs w-[33.3%] rounded-lg"
      disableSelectorIconRotation
      selectorIcon={<SelectorIcon />}
      required 
    >
      {datee.map((dat) => (
        <SelectItem onClick={() => setDate(dat.key)} required key={dat.key}>
          {dat.labalData}
        </SelectItem>
      ))}
    </Select>
<div className="border-[foreground] border-r-2 h-[80%] w-1"></div>
<Select
      placeholder="Year"
      style={{background: "none"}} 
      className="max-w-xs w-[33.3%]  rounded-lg"
      disableSelectorIconRotation
      selectorIcon={<SelectorIcon />}
      required 
    >
      {years.map((year) => (
        <SelectItem onClick={() => setYear(year.key)} required key={year.key}>
          {year.labalData}
        </SelectItem>
      ))}
    </Select>
      </motion.div>
    </div>
  )
}