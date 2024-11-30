import React from "react";
import { Link } from "react-router-dom";
// actualizado
function FormContact() {
  return (
    <div className="h-full w-[85%] sm:w-[91%] sm:mx-1 md:w-[61%] md:mx-1 2xl:w-[61%] 2xl:mx-2 py-2 shadow-[1px_-1px_10px_1px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-1 rounded">
      <div className="flex flex-col items-center md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center md:gap-3 lg:gap-3 gap-5 py-8">
        <input
          className="bg-[#F5F5F5] p-3 w-[85%] sm:w-[92%] md:w-[29%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] rounded-md md:placeholder:text-xs lg:placeholder:text-sm xl:placeholder:text-base md:text-xs lg:text-sm xl:text-base"
          type="text"
          placeholder="Your Name *"
        />
        <input
          className="bg-[#F5F5F5] p-3 w-[85%] sm:w-[92%] md:w-[29%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] rounded-md md:placeholder:text-xs lg:placeholder:text-sm xl:placeholder:text-base md:text-xs lg:text-sm xl:text-base"
          type="email"
          placeholder="Your Email *"
        />
        <input
          className="bg-[#F5F5F5] p-3 w-[85%] sm:w-[92%] md:w-[29%] lg:w-[30%] xl:w-[30%] 2xl:w-[30%] rounded-md md:placeholder:text-xs lg:placeholder:text-sm xl:placeholder:text-base md:text-xs lg:text-sm xl:text-base"
          type="number"
          placeholder="Your Phone *"
        />
      </div>
      <div className="flex justify-center">
        <textarea
          className="bg-[#F5F5F5] h-48 w-[85%] sm:w-[92%] md:w-[92%] lg:w-[92%] xl:w-[92%] 2xl:w-[92%] p-3 text-left resize-none rounded-md md:placeholder:text-xs lg:placeholder:text-sm xl:placeholder:text-base md:text-xs lg:text-sm xl:text-base"
          placeholder="Your Massage"
        ></textarea>
      </div>
      <div className="py-8 flex justify-end ">
        <Link className="bg-red-600 mx-7 sm:mx-6 md:mx-6 lg:mx-7 xl:mx-9 2xl:mx-10 py-4 px-20 text-white rounded-lg hover:bg-red-700 text-xs md:text-xs lg:text-sm xl:text-base">
          Send Massage
        </Link>
      </div>
    </div>
  );
}

export default FormContact;
