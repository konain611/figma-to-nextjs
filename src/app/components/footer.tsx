export default function Footer(){
    return (
        <footer className="py-10 bg-slate-100 ">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
    <div className="mb-6 md:mb-0">
      <h1 className="text-3xl font-bold mb-4">Hekto</h1>
      <div className="flex mb-4">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button className="bg-[#fb2e86] text-white px-4 py-2 rounded-r-md">
          Sign Up
        </button>
      </div>
      <p className="text-sm">Contact Info</p>
      <p className="text-sm">
        17 Princess Road, London, Greater London NW1 8JR, UK
      </p>
    </div>
    <div className="mb-6 md:mb-0">
      <h2 className="text-xl font-bold mb-4">Catagories</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Laptops &amp; Computers
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Cameras &amp; Photography
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Smart Phones &amp; Tablets
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Video Games &amp; Consoles
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Waterproof Headphones
          </a>
        </li>
      </ul>
    </div>
    <div className="mb-6 md:mb-0">
      <h2 className="text-xl font-bold mb-4">Customer Care</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            My Account
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Discount
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Returns
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Orders History
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Order Tracking
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-xl font-bold mb-4">Pages</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Blog
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Browse the Shop
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Category
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Pre-Built Pages
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            Visual Composer Elements
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-[#fb2e86]">
            WooCommerce Pages
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>

    )
}