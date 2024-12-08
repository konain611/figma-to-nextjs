export default function Discount(){
    return(
        <div className="p-8 max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold text-[#1A0B5B] mt-7 text-center mb-4">
    Discount Item
  </h1>
  <div className="flex justify-center space-x-4 text-pink-500 text-sm mb-6">
    <a className="hover:underline" href="#">
      Wood Chair
    </a>
    <span>•</span>
    <a className="hover:underline" href="#">
      Plastic Chair
    </a>
    <span>•</span>
    <a className="hover:underline" href="#">
      Sofa Collection
    </a>
  </div>
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-6 md:mb-0">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">
        20% Discount Of All Products
      </h2>
      <h3 className="text-xl text-pink-500 mb-4">Eams Sofa Compact</h3>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat
        habitasse nec, bibendum condimentum.
      </p>
      <ul className="text-gray-600 space-y-2 mb-6">
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Material expose like metals
        </li>
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Simple neutral colours.
        </li>
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Clear lines and geometric figures
        </li>
        <li>
          <i className="fas fa-check text-blue-900"></i>
          Material expose like metals
        </li>
      </ul>
      <a
        className="inline-block bg-pink-500 text-white py-2 px-4 rounded"
        href="#"
      >
        Shop Now
      </a>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img
        alt="A modern, stylish chair with a brown backrest and grey seat, supported by a blue cross-legged base."
        className="w-64 h-64 object-contain"
        height={400}
        src="https://s3-alpha-sig.figma.com/img/72a8/a1fa/c3f4dfc7179464e113c3b725fc00d212?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mb2Akdx0Ks~-gEnQ7jCY4f9dGonGb7mKLnSmdimqrx3Fg2sgLvWsr5eC2lbnKpN2dmJcx0QGLmo4SC7lokqNKmfKWCEmbTFYHyAyUMad4ozfMP-SaOYWQ9ob~oAIN4OJKOdr088FwDN5xJhuDR8OJieogRyWJWpZNJc6bw1OGKXY5KWkihXZ2zJeP1MZ9WLPpRyESdJU7gzpyQWiDLpIK-KQ~UcM6u-YywtdAqkS9N7lq11ymFgUi5SYNC1OtkFTc7b-KILlSpY~2e91bTeZirZpK~aYBjI8CKGgiqwNe8ImZSVMTrtwdXYfiA6sav5P8PU06xhYOsLAcfZYeaC90w__"
        width={400}
      />
    </div>
  </div>
</div>

    )
}