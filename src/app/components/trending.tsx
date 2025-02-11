import Image from 'next/image';
import image01 from '../images/tp1.png';
import image02 from '../images/tp2.png';
import image03 from '../images/tp3.png';
import image04 from '../images/LP5.png';
import image05 from '../images/blackclock.png';
import image06 from '../images/shelf.png';
import image07 from '../images/chair1.png';
import image08 from '../images/chair2.png';
import image09 from '../images/chair3.png';

export default function Trending() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-[#1A0B5B] mb-8 mt-[70px] text-center">
        Trending Products
      </h1>
      <div className="mb-6 flex items-center justify-center space-x-11">

        <div className="featured-card group hover:border-pink-500">
          <Image
            alt="White cantilever chair"
            className="w-full h-32 object-cover mb-4"
            height={150}
            width={150}
            src={image01}
          />
          <div className="text-center">
            <h2 className="text-[#151875] font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-700 font-sans text-[14px]">$26.00 <span className="line-through text-gray-500">$42.00</span></p>
          </div>
        </div>
        <div className="featured-card group hover:border-pink-500">
          <Image
            alt="White cantilever chair"
            className="w-full h-32 object-cover mb-4"
            height={150}
            width={150}
            src={image02}
          />
          <div className="text-center">
            <h2 className="text-[#151875] font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-700 font-sans text-[14px]">$26.00 <span className="line-through text-gray-500">$42.00</span></p>
          </div>
        </div>
        <div className="featured-card group hover:border-pink-500">
          <Image
            alt="White cantilever chair"
            className="w-full h-32 object-cover mb-4"
            height={150}
            width={150}
            src={image03}
          />
          <div className="text-center">
            <h2 className="text-[#151875] font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-700 font-sans text-[14px]">$26.00 <span className="line-through text-gray-500">$42.00</span></p>
          </div>
        </div>
        <div className="featured-card group hover:border-pink-500">
          <Image
            alt="White cantilever chair"
            className="w-full h-32 object-cover mb-4"
            height={150}
            width={150}
            src={image04}
          />
          <div className="text-center">
            <h2 className="text-[#151875] font-bold font-sans text-[18px]">Cantilever chair</h2>
            <p className="text-gray-700 font-sans text-[14px]">$26.00 <span className="line-through text-gray-500">$42.00</span></p>
          </div>
        </div>

      </div>



      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center items-center gap-6">

          <div className="featured-card4">
            <div className="bg-pink-100 p-2 rounded-lg">
              <h2 className=" font-bold text-blue-900 mb-2">
                23% off in all products
              </h2>
              <a className="text-pink-600 font-semibold" href="#">
                <u> Shop Now</u>
              </a>
              <div className="mt-1">
                <Image
                  alt="Black clock"
                  className="w-full h-auto"
        
                  src={image05}

                />
              </div>
            </div>
          </div>

          <div className="featured-card4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <h2 className=" font-bold text-blue-900 mb-2">
                23% off in all products
              </h2>
              <a className="text-pink-600 font-semibold" href="#">
                <u>View Collection</u>
              </a>
              <div className="mt-1">
                <Image
                  alt="Shelf"
                  className="w-full h-auto"

                  src={image06}

                />
              </div>
            </div>
          </div>


          <div className="featured-card4 mt-8">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Image
                  alt="Executive Seat chair"
                  className="w-16 h-16"
                  height={50}
                  src={image07}
                  width={50}
                />
                <div className="ml-4">
                  <h3 className="text-blue-900 font-semibold">
                    Executive Seat chair
                  </h3>
                  <p className="text-gray-600">$32.00</p>
                </div>
              </div>
              <div className="flex items-center">
                    <Image  
                  alt="Executive Seat chair"
                  className="w-16 h-16"
                  height={50}
                  src={image08}
                  width={50}
                />
                <div className="ml-4">
                  <h3 className="text-blue-900 font-semibold">
                    Executive Seat chair
                  </h3>
                  <p className="text-gray-600">$32.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  alt="Executive Seat chair"
                  className="w-16 h-16"
                  height={50}
                  src={image09}
                  width={50}
                />
                <div className="ml-4">
                  <h3 className="text-blue-900 font-semibold">
                    Executive Seat chair
                  </h3>
                  <p className="text-gray-600">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}