import React from "react";
import Image from "next/image";
export default function Page() {
  const image = "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png";
  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <Image src={image} className="" alt="" width={500} height={500} />
      </div>
      <div>
        <h2>desc</h2>
      </div>
    </div>
  );
}
