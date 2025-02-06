"use client"
import { updatePassword } from "firebase/auth";
import {useState,useEffect} from "react"
import { Toaster, toast } from 'sonner'
import Password from "../../components/Signup/Password"
import LoadingFile from "../../components/loading/LoadingFile"
import {useGenerateState} from "@/context"
import {Button} from "@nextui-org/react"
import Link from "next/link"
import Style from "../../components/style/style"
import {auth,db,storage} from "../../server/firebase.cong"
import { doc, getDoc,updateDoc } from "firebase/firestore";

export default  function Changepass(){
  
  
     
  
  const [password,setPassword] = useState<string>("")
  const [newpassword,setNewPassword] = useState<string>("")
  const [confpassword,setConfPassword] = useState<string>("")
  const [passLength,setPassLength] = useState<boolean>(false)
  const {setIsDone} = useGenerateState()
  
     
    
  const user = auth.currentUser
  
  const [data, setDatas] = useState<objects>({})
  
  useEffect(() =>{
    
    async function n(){
      
    
    
    if(user){
        
      const docRef = await doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setDatas(docSnap.data())
      } else {
        toast.error("sorry something is when wrong");
      }
      }
      
    }
    n()
    
  })
  
  
  let fullData = {

      Password: confpassword
      
    }
  
  const handleForm = async () => {

     
     
     
       setIsDone(true)
     
     
     

     if (newpassword == ""){
       
       await toast.warning("check new password input is empty")
       setIsDone(false)
       
     }  else if (newpassword.length < 7){
       
       await toast.warning("password is less than 8")
       setIsDone(false)
       
    } else if (confpassword == ""){
       
       await toast.warning("check confirm password input is empty")
       setIsDone(false)
       
     }  else if (newpassword != confpassword){
       await toast.error("check new and confirm password is not match")
       setIsDone(false)
     } else {
     
       
     try{
     
      await updatePassword(user, confpassword)
      
      const docRef = await doc(db, "Users", user.uid);
      await updateDoc(docRef,fullData)
      toast.success("you have successfully change password")
      setIsDone(false)
      
     } catch(e){
       
      
      toast.error("sorry something is when wrong try again later");
       setIsDone(false)
     
     
     }
     }
  }
  
  
  
  return(
    <div >
    
 <div className="mt-20 w-screen h-full flex flex-col justify-center items-center">

  <div style={{zIndex: "20"}}   className="flex justify-center items-center gap-3 flex-col " >
    <div className="flex w-full justify-center items-center mb-6">
    <h1 className="text-2xl font-bold">Change password</h1>
    </div>
    
    <Password value={newpassword} setPassLength={setPassLength} placeholder="New password" type="password" setData={setNewPassword} />
    
    <Password value={confpassword} setPassLength={setPassLength} placeholder="Confirm password" type="password" setData={setConfPassword} />
    <div className="w-[80vw] ">
    <Link className=" text-[15px] text-blue-700  active:text-red-600 visited:text-fuchsia-800 hidden font-bold" href="/forgot%password">Forgot password</Link>
    </div>
      <Button onClick={handleForm} className="mb-12 mt-5" type="button">save</Button>
     <LoadingFile  />
    </div>
    <Style/>
    </div>
    </div>
    )
}