export default function LatestItems() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
                Latest Products
            </h1>
            <div className="flex justify-center space-x-8 mb-8">
                <a className="text-pink-500 font-bold" href="#">
                    New Arrival
                </a>
                <a className="text-gray-500" href="#">
                    Best Seller
                </a>
                <a className="text-gray-500" href="#">
                    Featured
                </a>
                <a className="text-gray-500" href="#">
                    Special Offer
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                    <img
                        alt="Comfort Handy Craft chair in brown color"
                        className="mx-auto mb-4"
                        height={300}
                        src="https://storage.googleapis.com/a1aa/image/yXSV070NJt42PpeugC4wNzNojLO60lL9P47eHazoS2naP34TA.jpg"
                        width={300}
                    />
                    <div className="flex justify-between px-4">
                        <p className="text-blue-900">Comfort Handy Craft</p>
                        <p className="text-gray-800">
                            $42.00
                            <span className="line-through text-red-500">$65.00</span>
                        </p>
                    </div>
                </div>
                <div className="text-center relative">
                    <img
                        alt="Comfort Handy Craft chair in yellow color"
                        className="mx-auto mb-4"
                        height={300}
                        src="https://storage.googleapis.com/a1aa/image/TXwSH6jfPEXQbSYhoeh7lehlUeIM8WW6ikWAj3bsmvDu9cjPB.jpg"
                        width={300}
                    />
                    <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-sm">
                        Sale
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2">
                        <i className="fas fa-shopping-cart text-blue-500"></i>
                        <i className="fas fa-heart text-pink-500"></i>
                        <i className="fas fa-search text-blue-500"></i>
                    </div>
                    <div className="flex justify-between px-4">
                        <p className="text-blue-900">Comfort Handy Craft</p>
                        <p className="text-gray-800">
                            $42.00
                            <span className="line-through text-red-500">$65.00</span>
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <img
                        alt="Comfort Handy Craft chair in white color"
                        className="mx-auto mb-4"
                        height={300}
                        src="https://storage.googleapis.com/a1aa/image/iYRBeebgQ1hgpUUeVzMwudHZARwSojdmOILjeJ0X6AQn9cjPB.jpg"
                        width={300}
                    />
                    <div className="flex justify-between px-4">
                        <p className="text-blue-900">Comfort Handy Craft</p>
                        <p className="text-gray-800">
                            $42.00
                            <span className="line-through text-red-500">$65.00</span>
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <img
                        alt="Comfort Handy Craft chair in light gray color"
                        className="mx-auto mb-4"
                        height={300}
                        src="https://storage.googleapis.com/a1aa/image/yAqjVke8o00fSkWWglTGwZKatVd6yBMWWWBQ03I8oeU4ecjPB.jpg"
                        width={300}
                    />
                    <div className="flex justify-between px-4">
                        <p className="text-blue-900">Comfort Handy Craft</p>
                        <p className="text-gray-800">
                            $42.00
                            <span className="line-through text-red-500">$65.00</span>
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <img
                        alt="Comfort Handy Craft chair in black and red color"
                        className="mx-auto mb-4"
                        height={300}
                        src="https://storage.googleapis.com/a1aa/image/RbDqIkePdhyGRyVRg5PXwP1ncKYekTHZoPZ1vNzZMoKeecjPB.jpg"
                        width={300}
                    />
                    <div className="flex justify-between px-4">
                        <p className="text-blue-900">Comfort Handy Craft</p>
                        <p className="text-gray-800">
                            $42.00
                            <span className="line-through text-red-500">$65.00</span>
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <img
                        alt="Comfort Handy Craft chair in beige color"
                        className="mx-auto mb-4"
                        height={300}
                        src="https://storage.googleapis.com/a1aa/image/Yb9Zw74FyzrWHRz2SZyE5oOaxqkaNb19vfDqERmDT1Bsnb8JA.jpg"
                        width={300}
                    />
                    <div className="flex justify-between px-4">
                        <p className="text-blue-900">Comfort Handy Craft</p>
                        <p className="text-gray-800">
                            $42.00
                            <span className="line-through text-red-500">$65.00</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}