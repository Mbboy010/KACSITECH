import React from "react"
import {Button} from "@nextui-org/react"
import {useState} from "react"
import Dates from "./Date"
import Gender from "./Gender"
import Contries from "./Contries"
import Link from "next/link"
import InputSection from "./InputSection"
import Email from "./Email"
import Password from "./Password"
import PhoneNumber from "./PhoneNumber"
import LoginButton from "./LoginButton"
import { Toaster, toast } from 'sonner'
import Navigate from "../../components/Navigate"
import LoadingFile from "../../components/loading/LoadingFile"
import {useGenerateState} from "@/context"
import {auth,db,storage} from "../../server/firebase.cong"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'


import { doc, setDoc,collection, addDoc } from "firebase/firestore";
import Images from "./Image"
import {ref,uploadBytes } from "firebase/storage";

export default function Input(){
  
   const [first,setFirst] = useState<string>("")
   const [last,setLast] = useState<string>("")
   const [address,setAddress] = useState<string>("")
   const [phone,setPhone] = useState<string>("")
   
   const [imageUrl,setImageUrl] = useState<string>("")
   
   const [gender,setGender] = useState<string>("")
   const [year,setYear] = useState<string>("")
   const [month,setMonth] = useState<string>("")
   const [country,setCountry] = useState<string>("")
   const [date,setDate] = useState<string>("")
   const [uid,setUid] = useState<string>("")
   
   const router = useRouter()
   
   
   // aut
   
   const [email,setEmail] = useState<string>("")
   const [password,setPassword] = useState<string>("")
   const [passLength,setPassLength] = useState<boolean>(false)
   const [condition,setCondition] = useState(false)
   
   const {setIsDone} = useGenerateState()
   
   let fullData = {
     
      FirstName: first.trim(),
      LastName: last.trim(), 
      PhoneNumber: phone.trim(), 
      Gender: gender,
      Year: year,
      Dates: date,
      Month: month,
      Country: country,
      Address: address,
      Email: email.trim(),
      Password: password
      
    }
    
    

   
   const handleForm = async (e: React.FormEvent) => {
     e.preventDefault()
     
     
       
    try{
      

      await setIsDone(true)
      await setCondition(false)
      
      if(password == "" || email == "" || address == "" ||  last == "" || first == "" || gender == "" ||  country == "" || month == "" || phone == "" || date == "" || year == "" ){
      await toast.warning("check form is not complete fill")
      
      
      
      await setIsDone(false)
     } else if (!passLength){
       await toast.warning("password is less than 8")
       await setIsDone(false)
     } else {
      
      await createUserWithEmailAndPassword(auth, email, password)
    
      const user = await auth.currentUser
      
      await setUid()
      
      const now = await new Date()
      const d = await now.toLocaleDateString("En-US", {
            dateStyle: "medium"
          })
      
      
      const docRef = await setDoc(doc(db, "Users", user.uid),{
        ...fullData, 
        Uid: user.uid,
        JoinDate: d,
      });
      
       
       
       await toast.success("you have successfully to create account ")
       router.push('/profile')
       await setIsDone(false)
       
     }
       
     } catch(error) {
       
       
       
    var errorCode = error.code;
    var errorMessage = error.message;

    // User not found? Create user.
    
        
            var errorCode = error.code;
            var errorMessage = error.message;
            
            if ( errorCode == 'auth/email-already-in-use' ) {
                toast.error('You already have an account with that email.');
                await setIsDone(false)
            } else if ( errorCode == 'auth/invalid-email' ) {
                toast.error('Please provide a valid email');
                await setIsDone(false)
            } else if ( errorCode == 'auth/weak-password' ) {
                toast.error('The password is too weak.');
                await setIsDone(false)
            } else{
              toast.error("something is wrong please try again later")
              await setIsDone(false)
            }
       
      
     }
    
   }
   
  
  
  return(
    <div style={{zIndex: "20"}} className="w-full flex flex-col justify-center items-center h-full">
    

    

    
    <form onSubmit={handleForm}  className="flex justify-center items-center flex-col " >
    
     <div>
      <Images imageUrl={imageUrl} setImageUrl={setImageUrl} />
     </div>
     
     
     <div className="flex flex-col  gap-3">
     
     <InputSection value={first} placeholder="First name" type="text" setData={setFirst} />
     <InputSection value={last} placeholder="Last name" type="text" setData={setLast} />
     <InputSection value={phone} placeholder="Phone number" type="tel" setData={setPhone} />
     
    <div className="my-6">
    <h1 className="w-full text-center mb-1 font-bold text-[13px]">Gender and date of birth</h1>
    <div className="flex flex-col gap-3">
    <Gender setGender={setGender} />
    <Dates setYear={setYear} setMonth={setMonth} setDate={setDate} />
    </div>
    
    <div className="my-6">
    <h1 className="w-full text-center mb-1 font-bold text-[13px]">Address</h1>
    
    <div className="flex flex-col gap-3">
    
    
    <Contries setCountry={setCountry} />
    
    
    <InputSection value={address} placeholder="Address" type="text" setData={setAddress} />
    </div>
    </div>
    
    <div className="mt-6">
    <h1 className="w-full text-center mb-1 font-bold text-[13px]">Email and password</h1>
    
    <div className="flex flex-col gap-3">
   <Email value={email} placeholder="Email" type="email" setData={setEmail} />
   <Password value={password} setPassLength={setPassLength} placeholder="Password" type="password" setData={setPassword} />
   <div>
   <h1 style={{color: passLength ? "green" : "red"}} className="hidden">password length must be les than 8</h1>
   </div>
    </div>
    <div className="w-full flex items-center mt-3">
    <input required type="checkbox" /> <span className="text-[13px] ml-3 font-bold">Are you agree with our<Link className="underline" href="#"> policy and terms</Link></span>
    </div>
    </div>
    
    </div>
    
     </div>
    <LoginButton textS="I have an account to login" link="/login%account" text="Sign Up" />
      </form>
      
      
          <div style={{display: condition ? "block" : "none "}} className="w-full h-full fixed left-0 flex flex-col justify-center items-center top-0 backdrop-blur-[13px] ">
      <div className="flex flex-col justify-center items-center w-full h-full">

    <div className="w-[80%] flex flex-col ">
        <h1 className="text-[16px] mb-4 font-bold">Check your email {email} we are already send you verification link</h1>
        
        <Button><Link href="/">Home</Link></Button>
    </div>
    </div>
    
    </div>
      
    <LoadingFile  />
    </div>
    )
}