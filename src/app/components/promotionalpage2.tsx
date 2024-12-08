export default function Promotion(){
    return(
        <>
        <title>Product Features</title>
        <div className="relative">
          <img
            alt="Blue modern sofa"
            className="w-full max-w-sm rounded-lg shadow-lg"
            height={400}
            src="https://storage.googleapis.com/a1aa/image/hVheaIY8CHXUMCUgpCezusPb03bFDJznwENTvVb3DOKIu54TA.jpg"
            width={400}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-pink-200 rounded-full -z-10"
            style={{ width: 500, height: 500, top: "-50px", left: "-50px" }}
          ></div>
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
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2"></span>
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
            <div className="text-blue-900">
              <p className="font-bold">B&amp;B Italian Sofa</p>
              <p>$32.00</p>
            </div>
          </div>
        </div>
      </>
      
    )
}