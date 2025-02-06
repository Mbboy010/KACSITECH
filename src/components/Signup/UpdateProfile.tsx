"use client"

import {motion,useScroll,useTransform} from "framer-motion"
import Link from "next/link"
import {Button} from "@nextui-org/react"
import {useState,useEffect} from "react"
import Dates from "./DateUpd"
import Gender from "./GenderUpd"
import Contries from "./ContriesUpdate"
import { Toaster, toast } from 'sonner'
import InputSection from "./InputSection"
import Password from "./Password"
import PhoneNumber from "./PhoneNumber"
import LoginButton from "./LoginButton"
import {auth,db,storage} from "../../server/firebase.cong"
import { doc, getDoc,updateDoc } from "firebase/firestore";
import Images from "./Image"
import {useGenerateState} from "@/context"
import {Spinner} from "@nextui-org/react";

import LoadingFile from "../../components/loading/LoadingFile"

import { useRouter } from 'next/navigation'

export default function UpdateProfile(){
  
   
  
   const [first,setFirst] = useState<string>("")
   const [last,setLast] = useState<string>("")
   const [address,setAddress] = useState<string>("")
   const [phone,setPhone] = useState<string>("")
   const [gender,setGender] = useState<string>("")
   const [year,setYear] = useState<string>("")
   const [month,setMonth] = useState<string>("")
   const [country,setCountry] = useState<string>("")
   const [date,setDate] = useState<string>("")
   const [email,setEmail] = useState<string>("")
   
   
   const [istrue,setIstrue] = useState<boolean>(false)
   
   
   
   const [data, setData] = useState<objects>({})
   
   //up
   
   const [firstUp,setFirstUp] = useState<string>("")
   const [lastUp,setLastUp] = useState<string>("")
   const [addressUp,setAddressUp] = useState<string>("")
   const [phoneUp,setPhoneUp] = useState<string>("")
   const [genderUp,setGenderUp] = useState<string>("")
   const [yearUp,setYearUp] = useState<string>("")
   const [monthUp,setMonthUp] = useState<string>("")
   const [countryUp,setCountryUp] = useState<string>("")
   const [dateUp,setDateUp] = useState<string>("")
   const [emailUp,setEmailUp] = useState<string>("")
   
   const {setIsDone} = useGenerateState()
   
   const router = useRouter()
   
   const user = auth.currentUser
   
   useEffect(() =>{
     
      async function dat(){
      
      if(user){
        
        
        
      const docRef = await doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        
        setData(docSnap.data())
        
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
       
       

      let e = Object.values(data)
    
       if(e.length >= 1){
        await  dataName()
        await setIstrue(true)
      }
      
      }
        
      
      
      
    }
    
    function dataName(){
      
      setFirst(data.FirstName)
      setLast(data.LastName)
      setAddress(data.Address)
      setPhone(data.PhoneNumber)
      setGender(data.Gender)
      setYear(data.Year)
      setMonth(data.Month)
      setCountry(data.Country)
      setDate(data.Dates)
      setEmail(data.Email)
      
    }
    
    
    
    
    dat()
     
   })
   
   let fullData = {
      FirstName: firstUp == "" ? first : firstUp,
      LastName: lastUp == "" ? last : lastUp, 
      PhoneNumber: phoneUp == "" ? phone : phoneUp, 
      Gender: genderUp == "" ? gender : genderUp,
      Year: yearUp == "" ? year : yearUp,
      Dates: dateUp == "" ? date : dateUp,
      Month: monthUp == "" ? month : monthUp,
      Country: countryUp == "" ? country : countryUp,
      Address: addressUp == "" ? address : addressUp,
    }
   
   const handleForm = async () => {
     
    
     try{
       
       await setIsDone(true)
       const docRef = await doc(db, "Users", user.uid);
       await updateDoc(docRef,fullData)
       toast.success("your profile is updated")
       router.push('/profile')
       await setIsDone(false)
       
     } catch(e){
       toast.error("something when wrong try again later");
       await setIsDone(false)
     }
     
   }
   
   
   
  
  return(
    <div>
    
    <div className="mt-20 w-screen h-full flex flex-col justify-center items-center">
    
    
    {
      
      istrue ?
    
    <div style={{zIndex: "20"}}  >
    
    <div  className="flex justify-center items-center flex-col " >
      
      
  
    
    <div>
    

     <div>
    
    <div className="mt-6 mb-3">
    
     <div className="flex flex-col mb-6  gap-3">
    
     <InputSection value={firstUp} placeholder={first} type="text" setData={setFirstUp} />
     <InputSection value={lastUp} placeholder={last} type="text" setData={setLastUp} />
     <InputSection value={phoneUp} placeholder={phone} type="tel" setData={setPhoneUp} />
     
   <motion.div 
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    className="bg-[#81818171] relative opacity-50 border border-red-500 mt-3 rounded-lg flex flex-col justify-center items-center w-[80vw] h-10">
      <input 
      
      value={email} disabled  style={{background: "none"}} className=" border-none w-[75vw] h-[80%] outline-none placeholder:text-foreground placeholder:opacity-50 text-[14px]"  type="email"  />
      
       <div 
       onClick={() => toast.warning("you can't edit this input")}
       className="absolute top-0 left-0 w-full h-full"></div>
      </motion.div>
     </div>

    <div className="flex flex-col gap-3">
    <Gender setGender={setGenderUp} gend={gender} />
    <Dates setYear={setYearUp} setMonth={setMonthUp} setDate={setDateUp} yea={year} mont={month} dat={date} />
    </div>
    
    <div className="my-6">

    <div className="flex flex-col gap-3">
    
    
    <Contries country={country} setCountry={setCountryUp} />
    
    
   <InputSection value={addressUp} placeholder={address} type="text" setData={setAddressUp} />
    </div>
    </div>
    

    </div>
    
    <div className="w-[80vw] ">
    <Link className=" text-[15px] text-blue-700  active:text-red-600 visited:text-fuchsia-800 font-bold" href="/profile/edit_profile/change%password">Change password</Link>
    </div>
    </div>


    <Button onClick={handleForm}  className="mb-12 mt-5" type="button">save</Button>
       <LoadingFile  />
       
            </div>
            </div>
      </div>
      
      :
      <div style={{zIndex: "20"}} className="w-full justify-center items-center flex">
      <Spinner />
      </div>
      
    }
      
    </div>
    </div>
    )
}