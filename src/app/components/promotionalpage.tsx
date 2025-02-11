import Image from 'next/image';
import lampImage from '../images/lamp.png';
import sofaImage from '../images/pinkSofa.png';

export default function PromoPage() {
  return (
    <div className="bg-[#F2F0FF] w-screen h-auto py-12 mt-[50px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between relative">
        
 
        <div className="">
          <Image
            alt="Hanging lamp"
            height={387}
            width={387}
            src={lampImage}
          />
        </div>


        <div className="md:w-1/2 text-center md:text-left px-6">
          <span className="block text-pink-600 text-[16px] font-bold mt-6">
            Best Furniture For Your Castle...
          </span>
          <h1 className="text-[40px] md:text-[53px] leading-[1.2] font-bold text-black my-4">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-[#151875] text-[16px] font-bold mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>


        <div className="md:w-1/2 flex justify-center relative">
          <Image
            alt="Pink sofa"
            height={629}
            width={629}
            className="rounded-lg"
            src={sofaImage}
/>
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-lg px-4 py-2 rounded-full font-bold">
            50% off
          </div>
        </div>
      </div>
    </div>
  );
}

