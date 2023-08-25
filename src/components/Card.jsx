import React from "react";

const Card = ({title, children}) => {
  return (
 
   
    <div className={`z-10 flex items-center `}>
      <div className="flex  flex-col  ">
    
        <div className="flex">
      
          <div className="m-2 font-roboto text-xl font-normal text-white flex flex-col h-[450px] w-[300px] items-center justify-start rounded-xl bg-[#28658e;] p-2">
          <div>{title}</div>
         
         <div className="flex flex-col items-center ">
         {children}
         </div>
          
          </div>
         
        </div>
      </div>

  
  </div>
  );
};

export default Card;
