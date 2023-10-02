import React from "react";
import { FaHubspot } from "react-icons/fa";

function Logo() {
  return (
    <h1 className='flex'>
      <FaHubspot className='h-10 w-auto text-amber-300' />
      {/* School<span className='text-amber-400 font-bold font-sans'>Flow</span> */}
    </h1>
  );
}

export default Logo;
