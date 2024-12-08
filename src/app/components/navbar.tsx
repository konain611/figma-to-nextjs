
export default function NavBar() {
    return (
      <div className="flex justify-center mt-[50px]">
        <div className="w-[1177px] h-[40px] flex items-center justify-between">
          
          <h1 className="text-[#0D0E43] font-bold text-[34px] leading-[34px]">Hekto</h1>
  

          <div className="flex space-x-[50px]">
            <a className="text-[#FB2E86] font-normal text-[16px] leading-[20px] flex items-center">
              Home <span className="ml-1">&#9662;</span>
            </a>
            <a className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">Pages</a>
            <a className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">Products</a>
            <a className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">Blogs</a>
            <a className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">Shop</a>
            <a className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">Contact</a>
          </div>
  

          <div className="flex items-center">
            <input
              className="border border-gray-300 px-2 py-1 rounded"
              placeholder="Search"
            />
           
            <span className="ml-2 text-gray-500">&#128269;</span>
          </div>
        </div>
      </div>
    );
  }
  