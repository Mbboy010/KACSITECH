"use client"
import {useState,useEffect} from "react"
import {Button,Textarea} from "@nextui-org/react" 
import { Toaster, toast } from 'sonner'
import LoadingFile from "../../components/loading/LoadingFile"
import {useGenerateState} from "@/context"
import { doc, setDoc , collection ,addDoc,getDocs } from "firebase/firestore"; 
import {db,auth} from "../../server/firebase.cong"

export default function Reportco(){
  
const {setIsDone} = useGenerateState()
  const [reportData,setReportData] = useState<string>("")
  const [data, setData] = useState<array>([])
  
  const user =  auth.currentUser
  
  useEffect(() =>{
    const attt = async () => {
      
   let docSnap = await getDocs(collection(db, "Repors"))
            .then(async (querySnapshot)=>{              
                const newData = await querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
               await setData(newData);
          
            })
       
    }
    attt()
  })
  
  const handleForm = async (e: React.FormEvent) => {
     e.preventDefault()
     
     setIsDone(true)
     
     if(reportData == ""){
       toast.warning("check report input is empty")
       setIsDone(false)
     }
     
     const now = await new Date()
     const fullTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
     const d = await now.toLocaleDateString("En-US", {
            dateStyle: "medium"
          })
     
     try{
       
       
       
       const docRef = await addDoc(collection(db, "Repors"), {
          repsBody: reportData,
          userId: user.uid,
          date: d,
          fullTimes: fullTime,
          rNumber: data.length + 1,
          
        });
        
        toast.success("your report is submitted")
        setIsDone(false)
        
     } catch(e){
       
       toast.error("something is wrong please try again later")
       setIsDone(false)
       
     }

  }
  
  return(
    <div className="w-full h-full flex flex-col justify-center  items-center">
    

    
     <form onSubmit={handleForm} className="w-full h-full flex flex-col justify-center items-center">
     
  <div className="w-[80%] mb-4">
    <h1 className="font-bold">write your reports here...</h1>
    <h1>
    let us have your comment if you have any, suggestion or any other relevant esure concerning or work
    </h1>
    </div>
     
    <Textarea
      className="w-[80%] mb-3"
      labelPlacement="outside"
      placeholder="Enter your report"
      onChange={(e) => setReportData(e.target.value)}
    />

     
     <Button  className="font-bold text-white bg-blue-600" type="submit">Submit</Button>

     </form>
    <LoadingFile  />
    </div>
    )
}