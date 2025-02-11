import blueSofaImage from '../images/BLUESOFA.png';
import Image from 'next/image';
export default function Promotion(){
    return(
       <div>
        <>

  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="mt-[50px] flex flex-col md:flex-row items-center justify-center bg-[#F2F0FF] p-6 rounded-lg shadow-lg">
    <div className="relative">
      <Image
        alt="Blue modern sofa with a unique design"
        className="w-full max-w-sm rounded-lg shadow-lg"
        height={250}
        width={400}
        src={blueSofaImage}
      />
     
    </div>
    <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
      <h2 className="text-2xl font-bold text-blue-900">
        Unique Features Of leatest &amp; Trending Poducts
      </h2>
      <ul className="mt-4 text-gray-600">
        <li className="flex items-center mb-2">
          <span className="w-3 h-3 bg-pink-500 rounded-full inline-block mr-2"></span>
          All frames constructed with hardwood solids and laminates
        </li>
        <li className="flex items-center mb-2">
          <span className="w-3 h-3 bg-blue-700 rounded-full inline-block mr-2"></span>
          Reinforced with double wood dowels, glue, screw - nails corner blocks
          and machine nails
        </li>
        <li className="flex items-center mb-2">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span>
          Arms, backs and seats are structurally reinforced
        </li>
      </ul>
      <div className="mt-6 flex items-center justify-center md:justify-start">
        <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg mr-4">
          Add To Cart
        </button>
        <div className="text-left">
          <p className="text-blue-900 font-bold">B&amp;B Italian Sofa</p>
          <p className="text-gray-600">$32.00</p>
        </div>
      </div>
    </div>
  </div>
</>

       </div>
    )
}