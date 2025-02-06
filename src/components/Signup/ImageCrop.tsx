import {useState,useRef} from "react"
import ReactCrop,{convertToPixelCrop,makeAspectCrop,centerCrop} from 'react-image-crop'
import setCanvasPreview from "./setCanvasPreview"
import {Button} from "@nextui-org/react"

const ASPECT_RATIOM = 1
const MIN_DIMENTION = 150


interface props{
  imageUpdate: (url: string) => void;
  show: () => void;
}

export default function ImageCrop({imageUpdate,show}:props){
  
  const [imageUrl,setImageUrl] = useState<string>("")
  let [crop,setCrop] = useState<any>()
  const [error,setError] = useState<string>("")
  
  const imageRef = useRef<any>(null)
  const previewRef = useRef<any>(null)
  
  const HandleImage = (e) => {
    let file = e.target.files?.[0] 
    if(!file) return
    
    let reader = new FileReader();
    
    reader.addEventListener("load", () =>{
      
      let imageElement = new Image()
      let imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl
      
      imageElement.addEventListener("load", (e) =>{
        
      if(error) setError("")
       
       const {naturalWidth,naturalHeight} = e.currentTarget;
       
       if(naturalWidth < MIN_DIMENTION || naturalHeight < MIN_DIMENTION ){
        setError("image must be at least 150 × 150 pixel")
        return setImageUrl("")
        }
        
       if(naturalHeight >= naturalWidth + 860  ){
        setError("image height is too high")
        return setImageUrl("")
        }
       if(naturalWidth <  500 && naturalHeight > naturalWidth + 570 ){
        setError("image height is too high")
        return setImageUrl("")
        }
        
      })
        setImageUrl(imageUrl)
      })
      reader.readAsDataURL(file)
  
  }
  
  const onImageLoad = (e) => {
    
    const {width,height} = e.currentTarget;
    const wiCr = (MIN_DIMENTION / width) * 100;
    
      let crop = makeAspectCrop({
        unit: "%",
        width: wiCr
      },
      ASPECT_RATIOM,
      width,
      height
      )
     const centereCrpp = centerCrop(crop,width,height)
      setCrop(centereCrpp)
    
    
  }
  
  
  
  return(
    <div className="w-full h-full ">
    <input 
    type="file"
    accept="image/*"
    onChange={HandleImage}
    className="file:bg-foreground mb-5 file:text-background mt-3 ml-3 file:outline-none file:border-none  file:py-1 file:rounded"
    />
    {error && <h1 className="text-[16px] mx-3 text-red-500">{error}</h1>}
    {
      imageUrl && (<div className="flex flex-col ">
      <ReactCrop
      crop={crop}
      circularCrop
      onChange={(pixelCrop,percentCrop) => setCrop(percentCrop)}
      keepSelection
      aspect={ASPECT_RATIOM}
      minWidth={MIN_DIMENTION}
      
      >
      <img 
      style={{maxHeight: "75vh"}} 
      ref={imageRef}
      src={imageUrl} alt="upload"
      onLoad={onImageLoad}
      />
      </ReactCrop>
      <div className="w-full flex justify-center items-center my-5">

       <Button 
      onClick={() => {
        setCanvasPreview(
        imageRef.current,
        previewRef.current,
        convertToPixelCrop(
          crop,
          imageRef.current.width,
          imageRef.current.height
          ) 
        );
   const dataUrl = previewRef.current.toDataURL()
   imageUpdate(dataUrl)
   show()
      }}
      >crop image</Button>
       </div>
      </div>)
      
    }
    {
     crop && <canvas
     ref={previewRef}
      className="mt-4"
      style={{
        border: "1px solid black ", 
        objectFit: "contain",
        width: 100,
        height: 200,
        display: "none"
      }}
      />


    }
    </div>
    )
}