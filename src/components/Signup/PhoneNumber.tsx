
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


interface props{
  placeholder: string;
  type: string;
  setData: React.Dispatch<React.SetStateAction<string>>
  
  value: string;
}

export default function PhoneNumber({placeholder,type,setData,value}:props){
  
  
  
  return(
    <div>
    <div className="bg-[#81818171] rounded-lg flex flex-col justify-center items-center w-[80vw] h-10">
      <PhoneInput
      country={'us'}
      value={value} onChange={(e) => setData(e.target.value)} style={{background: "none"}} className=" border-none w-[75vw] h-[80%] outline-none placeholder:text-foreground placeholder:opacity-50"  type={type} placeholder={placeholder} />
      </div>
    </div>
    )
}