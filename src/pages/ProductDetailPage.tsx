import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Star from '../components/icons/Star'
import Heart from '../components/icons/Heart'
import CaretLeft from '../components/icons/CaretLeft'

function ProductDetailPage() {
  const { id } = useParams()

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="relative">
        <Header />
      </div>
      
      {/* Breadcrumb */}
      <div className="flex gap-[9px] items-center justify-center leading-normal not-italic text-[16px] text-nowrap text-white pt-[120px] px-4">
        <Link to="/" className="font-inter font-normal relative shrink-0 hover:text-brand-primary transition-colors">Home</Link>
        <p className="font-inter font-normal relative shrink-0">/</p>
        <Link to="/products" className="font-inter font-normal relative shrink-0 hover:text-brand-primary transition-colors">Products</Link>
        <p className="font-inter font-normal relative shrink-0">/</p>
        <p className="font-satoshi relative shrink-0">Luxurious Elixir</p>
      </div>

      {/* Product Content */}
      <div className="flex flex-col lg:flex-row gap-[18px] items-start justify-center w-full max-w-[1440px] mx-auto pt-10 px-4">
        <div className="flex flex-col gap-[18px] items-center relative shrink-0 w-full lg:w-auto">
          <div className="h-[400px] lg:h-[806px] relative shrink-0 w-full lg:w-[532px] rounded-lg overflow-hidden">
            <img alt="Product" className="absolute inset-0 w-full h-full object-contain" src="/assets/883b3e6f33d87c83226418b1488f5a20b83fb9fc.png" />
          </div>
          <div className="h-[9px] relative shrink-0 w-[24px]">
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[32px] items-start relative w-full lg:w-auto lg:max-w-[608px]">
          <h1 className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[40px] text-nowrap text-white">
            Luxurious Elixir
          </h1>
          <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[16px] text-white w-full">
            Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues.
          </p>
          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="relative shrink-0 size-[22px]" filled={star <= 5} />
              ))}
            </div>
            <p className="font-inter font-normal leading-normal not-italic relative shrink-0 text-[12px] text-nowrap text-white">
              (90)
            </p>
            <Link to="#reviews" className="block cursor-pointer font-inter font-normal leading-[0] not-italic relative shrink-0 text-[10px] text-left text-nowrap text-white underline hover:text-brand-primary transition-colors">
              Reviews and Ratings
            </Link>
          </div>

          {/* Size Selection */}
          <div className="content-stretch flex gap-[21px] items-start justify-center relative shrink-0">
            {['100 ml', '150 ml'].map((size, idx) => (
              <div key={size} className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0">
                <div className="h-[125px] relative shrink-0 w-[88px]">
                  <img alt={size} className="absolute inset-0 w-full h-full object-contain" src="/assets/883b3e6f33d87c83226418b1488f5a20b83fb9fc.png" />
                </div>
                <p className="font-satoshi font-bold leading-normal not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                  {size}
                </p>
                {idx === 0 && <div className="h-0 relative shrink-0 w-[44px] border-t-2 border-brand-primary"></div>}
              </div>
            ))}
          </div>

          <p className="font-satoshi font-light leading-normal not-italic relative shrink-0 text-[#ab572d] text-[24px] text-nowrap">
            <span className="font-satoshi font-bold">$ 250.00</span>
          </p>

          {/* Quantity and Wishlist */}
          <div className="content-stretch flex gap-[62px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
              <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">Qty</p>
              <div className="border border-solid border-white h-[48px] rounded-[10px] w-[152px] flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <button className="text-white hover:text-brand-primary transition-colors">-</button>
                  <span className="text-white">1</span>
                  <button className="text-white hover:text-brand-primary transition-colors">+</button>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
              <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">Wish list</p>
              <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
                <Heart className="size-full text-white" />
              </button>
            </div>
          </div>

          {/* Add to Bag */}
          <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0">
            <button className="bg-[#d9d9d9] border border-solid border-white h-[48px] rounded-[10px] w-[381px] hover:bg-brand-primary hover:border-brand-primary transition-colors">
              <p className="font-inter font-bold text-[#ab572d] text-[21px] text-center">Add to Bag</p>
            </button>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="bg-[#d9d9d9] h-[26px] rounded-[23px] shrink-0 w-[87px]"></div>
              <p className="font-satoshi leading-normal not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
                Shop now and pay later with 4 payments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-[33px] items-start leading-normal not-italic text-white w-full max-w-[1440px] mx-auto pt-20 px-4">
        <h2 className="font-satoshi font-medium relative shrink-0 text-[32px] text-center text-nowrap">Product Details</h2>
        <p className="font-satoshi leading-normal relative shrink-0 text-[20px] w-full">
          Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues. From the first spritz to the lingering dry-down, Luxurious Elixir promises an intoxicating experience that embodies the essence of lavish indulgence.
        </p>
      </div>

      {/* Key Notes */}
      <div className="flex flex-col gap-[33px] items-start justify-center w-full max-w-[1440px] mx-auto pt-20 px-4">
        <h2 className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[32px] text-center text-nowrap text-white">Key Notes</h2>
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[156px] items-start relative shrink-0 w-full">
            {[
            { title: 'Top Note', notes: 'Citrus Accord, Sun-kissed Fruits', img: '/assets/3d8b69fa8f10595e684b3a8b6cfab3fe6540b824.png' },
            { title: 'Heart Note', notes: 'Golden Roses, Rare Blooms', img: '/assets/c0c58ed8e26d7d2977389ada5760d0886be45819.png' },
            { title: 'Base Note', notes: 'Amber, Vanilla, Sandalwood', img: '/assets/4b3f51342c394d65281b1339f473c739a516ecfd.png' },
          ].map((note) => (
            <div key={note.title} className="flex flex-col gap-[30px] items-center relative shrink-0 w-full md:w-auto">
              <div className="font-satoshi leading-normal not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white">
                <p className="font-satoshi font-medium mb-0">{note.title}</p>
                <p>{note.notes}</p>
              </div>
              <div className="relative size-[200px] md:size-[230px] rounded-full overflow-hidden">
                <img alt={note.title} className="absolute inset-0 w-full h-full object-cover" src={note.img} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col gap-[42px] items-center w-full max-w-[1440px] mx-auto pt-20 pb-40 px-4">
        <h2 className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[#ab572d] text-[50px] text-center text-nowrap">
          Reviews
        </h2>
        {/* Reviews would go here */}
      </div>

      {/* Discover More */}
      <div className="flex flex-col gap-[55px] items-center w-full max-w-[1440px] mx-auto pt-20 pb-40 px-4">
        <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[#ab572d] text-[50px] text-center text-nowrap">
          Discover More
        </p>
        <div className="flex gap-[10px] items-center relative shrink-0 w-full overflow-x-auto">
          <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
            <CaretLeft className="size-full text-white" />
          </button>
          <div className="flex gap-[45px] items-start relative shrink-0 min-w-max">
            {[1, 2, 3, 4].map((i) => (
              <Link key={i} to={`/products/${i}`} className="relative group shrink-0 w-[260px]">
                <div className="h-[442px] relative w-[260px] bg-gradient-to-b from-transparent to-black/50 rounded-lg overflow-hidden">
                  <img alt="Product" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/assets/c4507d36d9cb59b39e33a66a3d32c4272f96f64b.png" />
                </div>
                <div className="flex flex-col gap-[8px] items-center justify-center mt-4 not-italic relative text-nowrap">
                  <p className="font-satoshi font-medium leading-normal relative shrink-0 text-[20px] text-white">
                    Product {i}
                  </p>
                  <p className="font-satoshi font-light leading-normal relative shrink-0 text-[#ab572d] text-[16px]">
                    <span className="font-satoshi font-bold not-italic">$ {220 + i * 10}.00 </span>
                    <span className="text-white">100ml</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <button className="flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <CaretLeft className="size-[32px] text-white" />
            </div>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetailPage

