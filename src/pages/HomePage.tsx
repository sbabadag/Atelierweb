import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaretLeft from '../components/icons/CaretLeft'
import Star from '../components/icons/Star'

function HomePage() {
  return (
    <div className="bg-black min-h-screen w-full">
      <div className="relative">
        <Header />
      </div>
      
      {/* Hero Section */}
      <div className="flex gap-[53px] items-center justify-center w-full max-w-[1236px] mx-auto pt-[120px] px-4">
        <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col font-satoshi font-light gap-[14px] items-start leading-[0] not-italic relative shrink-0 text-white">
            <h1 className="leading-[67px] relative shrink-0 text-[60px] w-[752px]">
              <span>Elevate Your Spirit with </span>
              <span className="text-white">Victory Scented</span>
              <span> Fragrances!</span>
            </h1>
            <div className="leading-normal relative shrink-0 text-[24px] w-[530px]">
              <p className="mb-0">Shop now and embrace the sweet smell of victory with Local Face.</p>
            </div>
          </div>
          <Link to="/products" className="bg-[#ab572d] content-stretch flex items-center justify-center overflow-clip px-[30px] py-[14px] relative rounded-[10px] shrink-0 hover:bg-[#8b4520] transition-colors">
            <p className="font-satoshi font-black leading-normal not-italic relative shrink-0 text-[16px] text-nowrap text-white">
              Shop Now
            </p>
          </Link>
        </div>
        <div className="h-[769px] relative shrink-0 w-[430.978px]">
          <img alt="Perfume" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-lg" src="/assets/ab379c6805cdd93959d9ba28a902c9d27f94af20.png" />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col gap-[10px] h-[564px] items-center justify-center w-full max-w-[1440px] mx-auto mt-20 px-4">
        <div className="relative w-[1440px] h-[564px] rounded-lg overflow-hidden">
          <img alt="Welcome" className="absolute inset-0 w-full h-full object-cover" src="/assets/2d189f2ef3a27c30cfcd0dbcaf8f93717fe33741.png" />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute content-stretch flex flex-col h-[446px] items-center justify-center left-[102px] p-[10px] top-[57px] w-[1237px]">
            <div className="absolute content-stretch flex items-center justify-center left-[163px] p-[10px] top-[55px] w-[903px]">
              <div className="absolute font-satoshi font-light leading-normal left-1/2 not-italic text-center text-white top-0 translate-x-[-50%] w-[746px]">
                <p className="font-satoshi font-medium mb-[40px] text-[#ab572d] text-[50px]">Welcome to Local Face</p>
                <p className="text-[20px]">Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="flex gap-[81px] h-[575px] items-center justify-center w-full max-w-[1440px] mx-auto mt-20 px-4">
        <div className="h-[573px] relative shrink-0 w-[670px]">
          <img alt="Our Values" className="absolute inset-0 w-full h-full object-cover rounded-lg" src="/assets/665522442dff5abde7b906cceff2c5dfc175c24d.png" />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-white w-[587px]">
          <p className="font-satoshi font-medium leading-normal relative shrink-0 text-[50px] text-nowrap">
            Our Values
          </p>
          <div className="font-satoshi leading-normal relative shrink-0 text-[20px] w-[588px]">
            <p className="mb-0">At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives.</p>
            <p className="mb-0 mt-4">Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.</p>
          </div>
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="flex flex-col gap-[55px] items-center justify-center w-full max-w-[1440px] mx-auto mt-20 px-4">
        <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[#ab572d] text-[50px] text-center text-nowrap">
          Best selling products
        </p>
        <div className="flex gap-[10px] items-center relative shrink-0 w-full overflow-x-auto">
          <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
            <CaretLeft className="size-full text-white" />
          </button>
          <div className="flex gap-[37px] items-start relative shrink-0 min-w-max">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative shrink-0 w-[260px]">
                <div className="h-[442px] relative w-[260px] bg-gradient-to-b from-transparent to-black/50 rounded-lg overflow-hidden">
                  <img alt="Product" className="absolute inset-0 w-full h-full object-cover" src={`/assets/c4507d36d9cb59b39e33a66a3d32c4272f96f64b.png`} />
                </div>
                <div className="flex flex-col gap-[8px] items-center justify-center mt-4 not-italic relative text-nowrap">
                  <p className="font-satoshi font-medium leading-normal relative shrink-0 text-[20px] text-white">
                    Luxurious Elixir {i === 1 ? 'Rough' : i === 2 ? '' : i === 3 ? '' : 'Essence'}
                  </p>
                  <p className="font-satoshi font-light leading-normal relative shrink-0 text-[#ab572d] text-[16px]">
                    <span className="font-satoshi font-bold not-italic">$ {220 + i * 10}.00 </span>
                    <span className="text-white">100ml</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <CaretLeft className="size-[32px] text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Collections Section */}
      <div className="flex flex-col gap-[55px] items-center justify-center w-full max-w-[1440px] mx-auto mt-20 px-4">
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[#ab572d] text-[50px] text-center text-nowrap">
            Our Collections
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[46px] items-start relative shrink-0 w-full max-w-[1236px]">
          {/* Collection rows */}
          <div className="grid grid-cols-2 gap-[46px] w-full">
            <div className="relative h-[460px] rounded-lg overflow-hidden group">
              <img alt="Collection" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/assets/0b4e69d700d94bbfd5d57d90be4e25a001047301.png" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-satoshi font-medium text-[24px] text-white">Designer Delights Collection</p>
              </div>
            </div>
            <div className="relative h-[460px] rounded-lg overflow-hidden group">
              <img alt="Collection" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/assets/a902ef25ab2f5dec9f97159130043dc6e5b5ebcc.png" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-satoshi font-medium text-[24px] text-white">Travel Essentials Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Banner */}
      <div className="w-full max-w-[1236px] mx-auto mt-20 px-4">
        <div className="relative h-[538px] w-[1236px] rounded-lg overflow-hidden">
          <img alt="Sale" className="absolute inset-0 w-full h-full object-cover" src="/assets/180c9ce1700521424939141fe53023f283580e9f.png" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute content-stretch flex flex-col gap-[68px] items-start left-[14px] top-[106px] w-[604px] p-8">
            <div className="content-stretch flex flex-col gap-[17px] items-start leading-normal not-italic relative shrink-0 text-white">
              <p className="font-satoshi font-medium relative shrink-0 text-[50px] w-[605px]">
                Perfume Year-End Sale! Up to 50% OFF
              </p>
              <p className="font-satoshi font-light relative shrink-0 text-[20px] w-[570px]">
                Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!
              </p>
            </div>
            <Link to="/products" className="bg-[#ab572d] content-stretch flex items-center justify-center overflow-clip px-[30px] py-[14px] relative rounded-[10px] shrink-0 hover:bg-[#8b4520] transition-colors">
              <p className="font-satoshi font-black leading-normal not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                Know More
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="flex items-center justify-center w-full max-w-[1440px] mx-auto mt-20 mb-40 px-4">
        <div className="content-stretch flex flex-col gap-[101px] items-center relative shrink-0">
          <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[#ab572d] text-[50px] text-nowrap">
            Latest Articles
          </p>
            <div className="flex items-center justify-center relative shrink-0 w-full overflow-x-auto">
            <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
              <CaretLeft className="size-full text-white" />
            </button>
            <div className="flex gap-[23px] items-center justify-center relative shrink-0 min-w-max">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col gap-[55px] items-start relative shrink-0 w-[375px]">
                  <div className="relative shrink-0 size-[375px] rounded-lg overflow-hidden">
                    <img alt="Article" className="absolute inset-0 w-full h-full object-cover" src={`/assets/540cee69238f1380283674594ccd6bb33bfb88f0.png`} />
                  </div>
                  <div className="flex flex-col gap-[46px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col gap-[5px] items-start leading-normal not-italic relative shrink-0 text-white w-full">
                      <p className="font-satoshi font-bold relative shrink-0 text-[20px] w-full">
                        The Soothing Symphony of Lavender Perfumes
                      </p>
                      <p className="font-satoshi leading-normal relative shrink-0 text-[16px] w-full">
                        Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty.
                      </p>
                    </div>
                    <Link to="/blog" className="border border-solid border-white flex h-[36px] items-center justify-center overflow-clip px-[30px] py-[14px] relative rounded-[10px] shrink-0 w-[141px] hover:bg-white hover:text-black transition-colors">
                      <p className="font-satoshi font-bold leading-normal not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button className="flex items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <CaretLeft className="size-[32px] text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage

