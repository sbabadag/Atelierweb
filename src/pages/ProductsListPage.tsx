import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaretLeft from '../components/icons/CaretLeft'
import Star from '../components/icons/Star'

function ProductsListPage() {
  const products = [
    { id: 1, name: 'Luxurious Elixir Rough', price: 220, rating: 4, reviews: 60 },
    { id: 2, name: 'The Golden Legacy', price: 160, rating: 4, reviews: 103 },
    { id: 3, name: 'Luxurious Elixir', price: 250, rating: 5, reviews: 90 },
    { id: 4, name: 'Luxurious Essence', price: 260, rating: 4, reviews: 212 },
    { id: 5, name: 'Aurum Aura', price: 200, rating: 4, reviews: 103 },
    { id: 6, name: 'Gleaming Gilt', price: 160, rating: 4, reviews: 103 },
    { id: 7, name: 'Gilded Elixir Rough', price: 170, rating: 4, reviews: 103 },
    { id: 8, name: 'Golden Luminary', price: 120, rating: 4, reviews: 103 },
    { id: 9, name: 'Decadent Opal', price: 160, rating: 5, reviews: 40 },
    { id: 10, name: 'Gilded Elixir', price: 200, rating: 5, reviews: 10 },
    { id: 11, name: 'Glamourous Gilt', price: 160, rating: 4.5, reviews: 121 },
    { id: 12, name: 'Luxury Enigma', price: 190, rating: 5, reviews: 103 },
  ]

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="relative">
        <Header />
      </div>
      
      {/* Breadcrumb */}
      <div className="flex font-inter font-normal gap-[9px] items-center justify-center leading-normal not-italic text-[16px] text-nowrap text-white pt-[120px] px-4">
        <Link to="/" className="relative shrink-0 hover:text-brand-primary transition-colors">Home</Link>
        <p className="relative shrink-0">/</p>
        <p className="relative shrink-0">Products</p>
      </div>

      {/* Best Selling Products Section */}
      <div className="flex flex-col gap-[77px] items-center justify-center w-full max-w-[1440px] mx-auto pt-10 px-4">
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
          <p className="font-satoshi font-medium h-[40px] leading-normal not-italic relative shrink-0 text-[#ab572d] text-[32px] w-[307px]">
            Best Selling Products
          </p>
          <div className="h-px relative shrink-0 w-full border-t border-white/20"></div>
          <div className="flex flex-wrap gap-4 items-start justify-between w-full">
            <div className="flex flex-wrap gap-4 items-start relative shrink-0">
              <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">Filter by</p>
              {['Collections', 'Fragrance Families', 'Gender', 'Occasions'].map((filter) => (
                <div key={filter} className="flex gap-[13px] items-end relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
                  <p className="font-satoshi font-light leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">{filter}</p>
                  <CaretLeft className="relative shrink-0 size-[24px] text-white rotate-90" />
                </div>
              ))}
            </div>
            <div className="flex gap-[13px] items-end relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
              <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">Sort by</p>
              <CaretLeft className="relative shrink-0 size-[24px] text-white rotate-90" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex flex-col gap-[65px] items-start relative shrink-0 w-full">
          {[0, 4, 8].map((startIdx) => (
            <div key={startIdx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[65px] items-start w-full">
              {products.slice(startIdx, startIdx + 4).map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="relative group w-full">
                  <div className="h-[455px] relative w-full bg-gradient-to-b from-transparent to-black/50 rounded-lg overflow-hidden">
                    <img alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/assets/c4507d36d9cb59b39e33a66a3d32c4272f96f64b.png" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-center justify-center mt-4 relative">
                    <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">
                      {product.name}
                    </p>
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                      <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="relative shrink-0 size-[22px]" filled={star <= product.rating} />
                        ))}
                      </div>
                      <p className="font-inter font-normal leading-normal not-italic relative shrink-0 text-[12px] text-nowrap text-white">
                        ({product.reviews})
                      </p>
                    </div>
                    <p className="font-satoshi font-light leading-normal not-italic relative shrink-0 text-[#ab572d] text-[16px] text-nowrap">
                      <span className="font-satoshi font-bold">${product.price}.00 </span>
                      <span className="text-white">100ml</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-4 items-center justify-center relative shrink-0 w-full">
          <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
            <CaretLeft className="size-full text-white" />
          </button>
          <p className="font-satoshi leading-normal not-italic relative shrink-0 text-[#909090] text-[20px] text-nowrap">
            Page 1 of 4
          </p>
          <button className="flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <CaretLeft className="size-[32px] text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="w-full mt-20 px-4">
        <p className="font-satoshi font-medium leading-normal not-italic text-[50px] text-nowrap text-white text-center">
          Special Offers
        </p>
        {/* Offer cards would go here */}
      </div>

      <Footer />
    </div>
  )
}

export default ProductsListPage

