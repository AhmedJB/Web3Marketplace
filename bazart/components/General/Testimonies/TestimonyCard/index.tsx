import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  name : string;
  tag : string;
  text : string;
  image : StaticImageData | boolean;
  date : Date
};



function TestimonyCard({ name,tag,image,text,date }: Props) {
 

    function getCurrentTime(currentDate:Date) : string {
        
        let hours = currentDate.getHours();
        let minutes : number | string = currentDate.getMinutes();
        let amPm = 'AM';
      
        // Adjust hours and AM/PM
        if (hours > 12) {
          hours -= 12;
          amPm = 'PM';
        } else if (hours === 0) {
          hours = 12;
        } else if (hours === 12) {
          amPm = 'PM';
        }
      
        // Add leading zero to minutes if necessary
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
      
        // Return the formatted time
        return hours + ':' + minutes + ' ' + amPm;
    }

    function getCurrentDate(currentDate:Date) : string {
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
      
        
        const month = months[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
      
        // Return the formatted date
        return month + ' ' + day + ', ' + year;
      }





  return (
    <>
      <div
        className={`w-full max-h-fit  p-1 flex justify-center `}
      >
        <div className="max-w-[350px] h-fit  w-full bg-white rounded-[15px] flex flex-col p-2 ">
            {/* card header ( image , name and tag ) */}
            <div className="flex items-center">
              {
                image && <Image src={image as StaticImageData} alt="avatar" width={50} height={50} className="rounded-full" />
              }
                
                <div className="flex flex-col inter ml-4">
                    <h1 className="text-mainDark font-semibold text-[1rem] ">
                        {name}
                    </h1>
                    <p className="text-[0.8rem] font-normal text-cardGray">
                        {tag}
                    </p>
                </div>
            </div>
            {/* Card body (text) */}
            <p className="w-full grow p-3 text-left text-[0.9rem] font-normal inter">
                {text}
            </p>
            <div className="my-1 flex px-3 items-center">
                <time className="text-[0.7rem] text-cardGray font-medium">
                    {getCurrentTime(date)}
                </time>
                <p className="ml-2 text-[0.7rem] text-cardGray font-medium">
                    {getCurrentDate(date)}
                </p>
            </div>


        </div>
      </div>
    </>
  );
}

export default TestimonyCard;
