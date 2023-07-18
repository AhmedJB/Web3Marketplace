import React from "react"


type Props = {
  
}

const DropDownButton = ( {} : Props)  => {


    return <> 
        <div className="absolute right-3 mt-2 w-56 rounded-md shadow-2xl  header-gradient"
           
           >
             <ul className="py-2">
               <li>
                 <a
                   href="#"   className="block px-4 py-2 barlow text-white hover:text-black hover:bg-headerColor "
                   >
                   Option 1
                 </a>
               </li>
               <li>
                 <a
                   href="#" className="block px-4 py-2 barlow text-white hover:text-black hover:bg-headerColor"
                 >
                   Option 2
                 </a>
               </li>
               <li>
                 <a
                   href="#" className="block px-4 py-2 barlow text-white hover:text-[#000000] hover:bg-headerColor"
                 >
                   Option 3
                 </a>
               </li>
             </ul>
           </div>
    </>
}

export default DropDownButton;