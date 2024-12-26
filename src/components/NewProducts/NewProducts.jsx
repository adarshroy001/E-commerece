import ProductMiniCardSliderVersion from "../../components/ProductMiniCard/ProductMiniCardSliderVersion";

function NewProducts() {
  return ( 
    <div className="w-[90vw] sm:w-[85vw] mx-auto mt-8">
      <div className="flex justify-between items-center">
        <p className="capitalize text-xl font-bold sm:uppercase  sm:text-2xl sm:font-semibold text-gray-800">New Products</p>
        <button className="h-8 px-3 sm:hover:bg-[#edeef5] border border-[#e2e3eb] rounded-3xl active:scale-95 transition">
          <span className="text-sm text-gray-600 font-normal text-center">View More </span>
          <span className="text-gray-600">&rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-3 mt-6 mb-6">
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion />
        <ProductMiniCardSliderVersion className="hidden md:block lg:hidden " />
      </div>
    </div>
  );
}

export default NewProducts;

