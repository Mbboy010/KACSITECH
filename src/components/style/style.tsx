



export default function Style(){
  return(
    <div style={{zIndex: "10"}} className="absolute top-0 left-0  w-full 
    h-full ">
    <div className="relative  h-full w-full">
    <div className="w-full h-full flex relative justify-center gap-5 items-center ">
    <div  className="w-24 opacity-30 relative h-24 bg-red-500 rounded-full"></div>
    <div className="w-24 h-24 opacity-30 bg-blue-500 relative rounded-full"></div> 
    <div className="w-24 h-24 absolute opacity-30 bg-green-500  rounded-full"></div>
    <div className="w-full h-full absolute backdrop-blur-[25px]"></div>

    </div>
    </div>
    </div>
    )
}  