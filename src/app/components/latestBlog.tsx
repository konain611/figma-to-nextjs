import Image from "next/image";
import blog1 from '../images/furniture1.jpg';
import blog2 from '../images/furniture2.jpg';
import blog3 from '../images/furniture3.jpg';

export default function LatestBlog(){
    return(
        <div className="container mx-auto px-4 py-8 mb-10">
  <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
    Latest Blog
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        alt="Living room with a sofa and a plant"
        className="w-full  object-cover"
        height={400}
        src={blog1}
        width={600}
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <i className="fas fa-user mr-2 text-pink-500"></i>
          SaberAli
          <i className="fas fa-calendar-alt ml-4 mr-2 text-pink-500"></i>
          21 August,2020
        </div>
        <h2 className="text-xl font-semibold text-blue-900 mb-2">
          Top essential Trends in 2021
        </h2>
        <p className="text-gray-600 mb-4">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <a className="text-blue-500 hover:underline" href="#">
          Read More
        </a>
      </div>
    </div>
    {/* Blog Post 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        alt="Living room with a sofa and colorful pillows"
        className="w-full  object-cover"
        height={400}
        src={blog2}
        width={600}
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <i className="fas fa-user mr-2 text-pink-500"></i>
          Surfauxion
          <i className="fas fa-calendar-alt ml-4 mr-2 text-pink-500"></i>
          21 August,2020
        </div>
        <h2 className="text-xl font-semibold text-pink-500 mb-2">
          Top essential trends in 2021
        </h2>
        <p className="text-gray-600 mb-4">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <a className="text-pink-500 hover:underline" href="#">
          Read More
        </a>
      </div>
    </div>
    {/* Blog Post 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        alt="Living room with a sofa and a flower vase"
        className="w-full  object-cover"
        height={400}
        src={blog3}
        width={600}
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <i className="fas fa-user mr-2 text-pink-500"></i>
          SaberAli
          <i className="fas fa-calendar-alt ml-4 mr-2 text-pink-500"></i>
          21 August,2020
        </div>
        <h2 className="text-xl font-semibold text-blue-900 mb-2">
          Top essential Trends in 2021
        </h2>
        <p className="text-gray-600 mb-4">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <a className="text-blue-500 hover:underline" href="#">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>

    )
}