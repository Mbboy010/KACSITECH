"use client"

interface props{
  data: objects;
}

export default function Content({data}:props){
  return(
      <div className="w-full h-full mt-3">
      
      <div className="w-full font-black my-2 flex justify-center items-center">
      <h1 className="text-[14px]">Personal information</h1>
       
      </div>
      
      
      
      <ul className="flex w-full flex-col">
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Username:</h1>
      <h1 className=" text-[13px] font-[300]">{data.FirstName} {data.LastName}</h1>
      </div>
      </li>
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● User id:</h1>
      <h1 className=" text-[13px] font-[300]">{data.Uid}</h1>
      </div>
      </li>
      
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Phone number:</h1>
      <h1 className=" text-[13px] font-[300]">{data.PhoneNumber}</h1>
      </div>
      </li>
      
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Gender:</h1>
      <h1 className=" text-[13px] font-[300]">{data.Gender}</h1>
      </div>
      </li>
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Date of birth:</h1>
      <h1 className=" text-[13px] font-[300]">{data.Month} {data.Dates},{data.Year}</h1>
      </div>
      </li>
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Contry:</h1>
      <h1 className=" text-[13px] font-[300]">{data.Country}</h1>
      </div>
      </li>
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Address:</h1>
      <h1 className=" text-[13px] font-[300]">{data.Address}</h1>
      </div>
      </li>
      
      
      </ul>
  
      <div className="w-full font-black my-2 flex justify-center items-center">
      <h1 className="text-[14px]">Security and auth</h1>
       </div>
        
      <ul className="flex w-full flex-col">
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Message:</h1>
      <h1 className=" text-[13px] font-[300]">{data.Email}</h1>
      </div>
      </li>
      
      
      <li>
      <div className="flex ml-3  flex-row">
      
      <h1 className="text-[14px] mr-1 font-bold">● Password:</h1>
      <h1 className=" text-[13px] font-[300]">{data.Password}</h1>
      </div>
      </li>
      

      </ul>
      
      
       

    </div>
    )
}

