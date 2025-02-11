import Image from 'next/image';
import chairImage1 from '../images/FP1.png';
import chairImage2 from '../images/FP2.png';
import chairImage3 from '../images/FP3.png';
import chairImage4 from '../images/FP4.png';  


export default function Featured() {
  return (
    <>
      <h1 className="text-3xl font-bold text-indigo-900 mb-8 mt-[50px] text-center">
        Featured Products
      </h1>
      <div className="flex items-center justify-center space-x-11">

        <div className="featured-card group hover:border-blue-500">
            <Image
              alt="White cantilever chair"
              className="w-full h-32 object-cover mb-4"
              height={150}
              width={150}
              src={chairImage1}
            />
          <div className="text-center">
            <h2 className="text-pink-500 font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-500 font-sans text-[14px]">Code - Y523201</p>
            <p className="text-gray-700 font-sans text-[14px]">$42.00</p>
          </div>
        </div>
    
        <div className="featured-card group hover:border-green-500">
          <Image
            alt="Beige cantilever chair"
            className="w-full h-32 object-cover mb-4"
            height={150}
            src={chairImage2}
            width={150}
          />
          <div className="text-center">
            <h2 className="text-pink-500 font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-500 font-sans text-[14px]">Code - Y523201</p>
            <p className="text-gray-700 font-sans text-[14px]">$42.00</p>
          </div>
        </div>
   
        <div className="featured-card group hover:border-red-500">
          <Image
            alt="Blue cantilever chair"
            className="w-full h-32 object-cover mb-4"
            height={150}
            src={chairImage3}
            width={150}
          />
          <div className="text-center">
            <h2 className="text-pink-500 font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-500 font-sans text-[14px]">Code - Y523201</p>
            <p className="text-gray-700 font-sans text-[14px]">$42.00</p>
          </div>
        </div>
     
        <div className="featured-card group hover:border-purple-500">
          <Image
            alt="Gray cantilever chair"
            className="w-full h-32 object-cover mb-4"
            height={150}
            src={chairImage4}
            width={150}
          />
          <div className="text-center">
            <h2 className="text-pink-500 font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-500 font-sans text-[14px]">Code - Y523201</p>
            <p className="text-gray-700 font-sans text-[14px]">$42.00</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-2">
        <div className="bar w-8 h-1 bg-pink-500 group-hover:bg-blue-500"></div>
        <div className="bar w-8 h-1 bg-pink-500 group-hover:bg-green-500"></div>
        <div className="bar w-8 h-1 bg-pink-500 group-hover:bg-red-500"></div>
        <div className="bar w-8 h-1 bg-pink-500 group-hover:bg-purple-500"></div>
      </div>
    </>
  );
}
