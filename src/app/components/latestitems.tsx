export default function LatestItems() {
    const products = [
        {
            image: "https://s3-alpha-sig.figma.com/img/4e1b/8c82/f15b5765f466da190975101e10dfdab2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7Z7r55L5ju3SPvVVSihI-PWF3QcuX6TmdTjQ7KzeB0XxgwjOY1X3laCv6xAereqdXpWncX-FOmMZhNVTiXB3xAeFNiREs8bdU5g6zGC1CevkMRLPz5puykwi0lgWmGiqQ5C3h6h35CTl2GkmzD5Hvap1OybPbO4PA0eGjECHXSLF~yOqbPiKtBMev2F8xnLlrLp3RImUXNHLB~SXk~ssRL0IONIFNAlIAwijZfPsArZtDAenNh5dG18IlIz6bVBCaqjAeOm43l0sGz9cBDk4JNXkknzZrxnAR-hutKfrWk3aZlybMDFwwC5WnFrwzDSWtokibWNHx4T8zvxxu70PA__",
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/b0ac/220b/08d5f05fcb65d0cce1b3bbe9ef93003b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CcnpqZI762-llHo-dQ1KAOhQk7cuG4aklxJUUJg8f5PZ1i~50p1ALcqy5Mr8hWewOKgdlpEWqxHDG4NSzJW4qy~y3599Ke~RnnZwHjGaeOpx2Eq~G5ntUTYNylYC7wN9r22kSUp9Ne0~OaZCSMJS8Sm7EIB6riSbYdrpjTR1obmBx65viJm5UysdOLfgOAjpfFRiJZeUn9tyYfgacWz1RIMqPG6fd9KI6wX38d9yZaFIepWNen8yhoVBPZa64EnmUTmTGKtMGDAN1KvfMZ-CK3zMU2sHjQi6SkHsdlyDlKn0DNQzxLcWieM3WTMKRGK85pZMqDuNPP1eg21f9--xTw__",
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1ASbX5PQ2xgkZQUVT7fty3DynXlxANL8qO7IW9wlpV268-RxQDtE0hx8rHqWqchih~We1J7ct41jlqizDklTOyDwJf5rNeexRN0TQ4ofReelqg8AAuSqkLUmt5CRUl0gMtBipAaF6qgJHFfXKsXhYeLJ3xkLNjy3YHciF5OtkD~ion-eT4JSywJ14Llo~WekPvS9oB6Vcrrf66ItGWDKcZ0Q36qjQDhv96sBH~gPG~xVzO8N7RWSWdqDTVd-k6DvfIpRZGhEIM-Xq4SzNW0Zg85v9CcuqGx~kqQtYx9qngixxXg3moXFnASwQurY8uP7m3xjVf7nYkMx-KrVER0oA__",
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/e8d0/7d05/5f94bd8eef92ee5845fcca1420c3e6fa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qApKWtYTo8tuuzgaZH~leeyvu-Ab2it6P-22fhZtPkbZuqnICw-iHyfY9C9yL7oCA1d2XmnXwi8cj72QHmoHQ5kqYJxn-H2Mv0mLOBQa8OMYwMF5ViHqnWQRuiCGsjJbMkUlMOZNNpYag23BjchVemWnABeUHPFKNlhiBgvn69FdEgdbAnxAJCQueBfwDBtGvj~6AJU4A-PqiWn5huvXHxLk-M1rp6VhPT8LvQuyNuSXK6IAOAgUpnsAkZIqvCKjvwlxWdEQmy-ZhKpSjbN6-RXFoWJAZX67IHtWSRjHPLoEWy9meUDwEi1LR-ElHhdA~djQ-1wNFg6jWmTEfhZ-Og__",
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZIGKfdtLzEgHMKhw~aqegJR7L5YcGgudDkH2jD6Uj87CeYNgVaT8sQnwULBZ3v4wHkVOtlIoV2N3-toZyYJRReFGaesEIKfnoQJKO7FKa7w2Ucj3AwQsY2Krg6rgeIGRrImSmK4dXdRLUZ1yjnhPCAPLGztdzuk8WrhP6m1GsE6hvCPpyBqoh6dBK1YPoDDvFydAgjIbiQjvGda1NZO3SCk3FtIUjxSfZY0PB7F2jQ4ifNVpwSLm8mcs1VSveB62xkIDpP1uzZ7pfCCmcsZn9qI2GxooLriK27X4C30AS~E~JfSp8vToma8xQdWL~MWP14NfPjq5xnX0YcdaEL0V-w__",
            name: "Comfort Handy Craft",
            price: "$42.00",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QiOcOmW4pI3zdbRIy~FsfCDeiAEPJ~ABdrN-HK-u-3vVZjkNsB61LDvNkR9SUVAtxQ3xPtK63SKl7NoGBW1hta7iHodghSuzkElrrW~gRC-KzqJYFR6kLC0IULdcRtv226jyLdN0Vi75KH1FNi2HHlngDTWVa3ieNZD-qeZBPZ~Kz1wsvbAdtftPfeFZMl7Y19hnuUbENdLCUrh3aeb9fshdvYf9hFceCyYfOor7pxJ25PUEz-xpy2dJM5HQTsd~JMnVf2caw2il9NqCyMIYzEz91OFSICSxK3P9L69F5nmVkStedViXXuvQVzV3ukUCCeg0AApGyh4ftLoDDchkrg__",
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
