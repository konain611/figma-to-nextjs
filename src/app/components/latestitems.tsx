import chairImage1 from '../images/LP1.png';
import chairImage2 from '../images/LP2.png';
import chairImage3 from '../images/LP3.png';
import chairImage4 from '../images/LP4.png';
import chairImage5 from '../images/LP5.png';
import chairImage6 from '../images/LP6.png';


export default function LatestItems() {
    const products = [
        {
            image: chairImage1.src,
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: chairImage2.src,
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: chairImage3.src,
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: chairImage4.src,
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: chairImage5.src,
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: chairImage6.src,
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
    ];

    return (
        <div className=" flex flex-col items-center justify-center mt-[80px]">
            <h1 className="text-3xl font-bold text-[#1A0B5B] mb-8 text-center">
                Latest Products
            </h1>
            <div className="flex justify-center space-x-10 mb-8">
                <a className="text-pink-500 font-bold" href="#">
                    <u>New Arrival</u>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {products.map((product, index) => (
                    <div key={index} className="featured-card2 bg-white shadow-md p-2 rounded-md text-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full object-cover mb-10"
                            height={150}
                        />
                        <h2 className="text-[#151875] font-bold font-sans text-left text-[12px]">{product.name}  &nbsp; {product.price} <span className="text-[#FB2448] line-through">$65.00</span></h2>
        
                    </div>
                ))}
            </div>

        </div>
    );
}
