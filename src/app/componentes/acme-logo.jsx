import logo from "./Captura1.png";
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-white">
      <Image src={logo} alt='' width={1000} height={760}/>
    </div>
  );
}
import React from 'react';



