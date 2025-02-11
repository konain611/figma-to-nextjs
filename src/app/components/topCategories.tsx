import Image from 'next/image';
import chair1 from '../images/tc1.png';
import chair2 from '../images/tc2.png';
import chair3 from '../images/tc3.png';

export default function TopCategories(){
    return(
        <div className="container mx-auto py-12">
  <h1 className="text-3xl font-bold text-[#1A0B5B] mt-7 text-center mb-4">Top Categories</h1>
  <div className="flex justify-center  space-x-8">
    <div className="relative">
      <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
        <Image
          alt="Gray chair with wooden legs"
          className="w-24 h-24 object-contain"
          height={100}
          width={100}
          src={chair1}
        />
      </div>
      <p className="text-lg font-semibold">Mini LCW Chair</p>
      <p className="text-gray-600">$56.00</p>
    </div>
    <div>
      <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
        <Image
          alt="White chair with wooden legs"
          className="w-24 h-24 object-contain"
          height={100}
          width={100}
          src={chair2}
        />
      </div>
      <p className="text-lg font-semibold">Mini LCW Chair</p>
      <p className="text-gray-600">$56.00</p>
    </div>
    <div>
      <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
        <Image
          alt="Gray chair with pink cushion"
          className="w-24 h-24 object-contain"
          height={100}
          width={100}
          src={chair3}
        />
      </div>
      <p className="text-lg font-semibold">Mini LCW Chair</p>
      <p className="text-gray-600">$56.00</p>
    </div>
    <div>
      <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
        <Image
          alt="Gray chair with wooden legs"
          className="w-24 h-24 object-contain"
          height={100}
          width={100}
          src={chair1}
        />
      </div>
      <p className="text-lg font-semibold">Mini LCW Chair</p>
      <p className="text-gray-600">$56.00</p>
    </div>
  </div>
</div>

    )
}