import Image from "next/image";
import promoImage from '../images/bg.jpg';
import logo from '../images/logo.png';

export default function Promo(){
    return(
        <div className="relative mt-6 w-full h-[462px]">
  <Image
    alt="Background image of a minimalistic room with a white chair, a wooden shelf with decor items, and a plant"
    className="absolute inset-0 w-full h-full object-cover"
    src={promoImage}
  />
  <div className="relative z-10 flex flex-col items-center justify-center h-full bg-white bg-opacity-75 p-6">
    <h1 className="text-2xl font-bold text-blue-900 text-center">
      Get Leatest Update By Subscribe Our Newslater
    </h1>
    <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded">
      Shop Now
    </button>
    
  </div>
  <div className="mt-10 border-gray-300 flex justify-center">
  <Image
    alt="Logos"
    className=""
    height={100}
    src={logo}
    width={800}
  />
  </div>
</div>

    )
}