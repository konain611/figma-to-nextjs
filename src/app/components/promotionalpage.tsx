import Image from 'next/image';

export default function PromoPage() {
  return (
    <div className="bg-[#F2F0FF] w-screen h-auto py-12 mt-[50px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between relative">
        
        {/* Left Section: Hanging Lamp */}
        <div className="">
          <Image
            alt="Hanging lamp"
            height={387}
            width={387}
            src="https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpoOmKWmB6sveVWwYmPqgDk-Z3k-BY4czXh1MaXvmyeNa1Ah-SP3bEZ1sBNGu8PwV~d5HyQ18ppw-6pKmFwXmJW~nTBs9igUOOIYQwcwnxR9SLx9anJXnbBw2IgmYS2jl4i02MbgYUUqlCZ~S6GyxPFsg0Kv8FIDvWGJYXrZIEKZAjgnqrSQ-FjuvIe-Iy05LgFuSik-9eJcVk~DDzaIDNmJWPm6JlXUnbyix1Gbz~YvmgLQMLOZrA27KzdO4C0OMUZEGNGRS62-keSSbHg5g4LCjOHrFtCqOgHcEQ242MmMjyZ~GT0Ng9OPIfdIebK5B~DbB35DABbaqagXQI2nbQ__"
          />
        </div>

        {/* Right Section: Content */}
        <div className="md:w-1/2 text-center md:text-left px-6">
          <span className="block text-pink-600 text-[16px] font-bold mt-6">
            Best Furniture For Your Castle...
          </span>
          <h1 className="text-[40px] md:text-[53px] leading-[1.2] font-bold text-black my-4">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-[#151875] text-[16px] font-bold mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Pink Sofa */}
        <div className="md:w-1/2 flex justify-center relative">
          <Image
            alt="Pink sofa"
            height={629}
            width={629}
            className="rounded-lg"
            src="https://s3-alpha-sig.figma.com/img/c453/494a/61ecc67b127029400b09a70cf2e9e973?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bfnjCHRCyGpKFG0MkP9C3u1Ni9VT4laLaRoxphGre-qXfr7F3B6WPRT92guukA~T0SFy2O-s842jF1sEgs4OEahM~aXDtFYsk7sRWbyByMgLcvK3SaZgSwBoR4mvcopt2HGaJi7vrUWqLhHsgI-b~I870glBwplx~jAaC-7gbZFbUk5nTKj2ktd-UY5bynhH9Kaw1aN3ZdRFad2FBdvOAh4vK9q35EWInU4T8dEtGAMEzi2hcVmvFM41uSUspuBvAQ1o9gOw7RW0VoIhA0qlC5kqoAkq5bz0ZS9Q-ZQVTDjrgAMbVZI2nyDBlw229-V3M4lSDVoI8D25XpKejTci9g__"
          />
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-lg px-4 py-2 rounded-full font-bold">
            50% off
          </div>
        </div>
      </div>
    </div>
  );
}

