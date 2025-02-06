import {motion,useScroll,useTransform} from "framer-motion"

interface props{
  placeholder: string;
  type: string;
  setData: React.Dispatch<React.SetStateAction<string | number>>
  value: string;
}

export default function Email({placeholder,type,setData,value}:props){
  
  const changeFunction = (e) => {
    let data = e.target.value
    setData(data.trim())
  }
  
  
  
  return(
    <div>
    <motion.div 
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    className="bg-[#81818171] border border-foreground rounded-lg flex flex-col justify-center items-center w-[80vw] h-10">
      <input value={value} onChange={changeFunction} style={{background: "none"}} className=" border-none w-[75vw] h-[80%] outline-none placeholder:text-foreground placeholder:opacity-50 text-[14px]"  type={type} placeholder={placeholder} />
      </motion.div>
    </div>
    )
}