import {Spinner} from "@nextui-org/react";
import {motion,useScroll,useTransform} from "framer-motion"

interface props{
  state: array;
  condition: boolean;
}

export default function Post({state,condition}: props){
  
  
  
  
  return (
    
      <div className="w-full  ">
    

    
    { condition ? 
    
      <div className="flex w-[95%] justify-center items-center">
          <Spinner/>
      </div>
      :
      <div className="block min-h-[73vh] ">{
      
       state.map((e,i) => {
        return <div key={i} style={{
        boxShadow: "0px 0px 13px #84848434",
         }} className="flex w-full justify-between items-center flex-row mb-2 min-h-[7vh] relative">
        
      <motion.div 
        whileHover={{scale: 1.05}}
      whileTap={{scale: 0.96,rotate: "1.6deg" }}
      className="flex flex-col"
      >
      
    
        <div className="flex ml-2 flex-col ">
        
        <span className=" text-[19px]">{e.FirstName} {e.LastName}</span>
        <span className=" mt-[-5px] text-[14px] font-[200]">{e.Email}</span>
        
        </div>
        
        
        </motion.div>
        
        <div className="opacity-0">nj</div>
        
        
        </div>
        
      })
    } 
    
    </div>
    
  
       
    }
       
    </div>
   
    )
}