import Image from 'next/image';
import modernSofa from '../images/modernSofa.png';

export default function Discount(){
    return(
        <div className="p-8 max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold text-[#1A0B5B] mt-7 text-center mb-4">
    Discount Item
  </h1>
  <div className="flex justify-center space-x-4 text-pink-500 text-sm mb-6">
    <a className="hover:underline" href="#">
      Wood Chair
    </a>
    <span>•</span>
    <a className="hover:underline" href="#">
      Plastic Chair
    </a>
    <span>•</span>
    <a className="hover:underline" href="#">
      Sofa Collection
    </a>
  </div>
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-6 md:mb-0">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">
        20% Discount Of All Products
      </h2>
      <h3 className="text-xl text-pink-500 mb-4">Eams Sofa Compact</h3>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat
        habitasse nec, bibendum condimentum.
      </p>
      <ul className="text-gray-600 space-y-2 mb-6">
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Material expose like metals
        </li>
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Simple neutral colours.
        </li>
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Clear lines and geometric figures
        </li>
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Material expose like metals
        </li>
      </ul>
      <a
        className="inline-block bg-pink-500 text-white py-2 px-4 rounded"
        href="#"
      >
        Shop Now
      </a>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <Image
        alt="A modern, stylish chair with a brown backrest and grey seat, supported by a blue cross-legged base."
        className="w-64 h-64 object-contain"
   
        src={modernSofa}
      />
    </div>
  </div>
</div>

    )
}