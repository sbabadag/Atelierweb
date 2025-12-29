import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaretLeft from '../components/icons/CaretLeft'

function BlogsCollectionPage() {
  const blogs = [
    {
      id: 1,
      title: 'Finding Your Signature Scent: A Guide to Perfume Personalities',
      description: 'Embark on a journey of self-discovery as we delve into the concept of perfume personalities. From bold and adventurous to elegant and timeless, there\'s a fragrance that perfectly complements your essence. Let us help you find your signature scent, a fragrant expression of your unique style.',
      image: '/assets/1ffbf3cb5db5fa88e8ad8ba9b94017ba8e092ebe.png'
    },
    {
      id: 2,
      title: 'The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories',
      description: 'A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one\'s taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.',
      image: '/assets/2d189f2ef3a27c30cfcd0dbcaf8f93717fe33741.png'
    },
    {
      id: 3,
      title: 'Decoding Fragrance Notes: Unraveling the Symphony of Scents',
      description: 'Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes – top, middle, and base – and learn how each layer contributes to the overall olfactory experience of a perfume. Get ready to appreciate your favorite scents on a whole new level!',
      image: '/assets/9186bad6e8f79a92f40857fbe4fd958ac25a3a14.png'
    },
    {
      id: 4,
      title: 'The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir',
      description: 'Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.',
      image: '/assets/540cee69238f1380283674594ccd6bb33bfb88f0.png'
    },
    {
      id: 5,
      title: 'A Journey Through Time: Unearthing Perfumery\'s Rich History',
      description: 'In our blog collection, we invite you to embark on a journey through time, where we explore the fascinating history of perfumery. From ancient civilizations to modern-day masterpieces, we unravel the tales of how scents have adorned humanity throughout the ages.',
      image: '/assets/f46b435da74f5f268c7bb40512a07365a51aafae.png'
    },
    {
      id: 6,
      title: 'The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance',
      description: 'Rose, often referred to as the "Queen of Flowers," has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.',
      image: '/assets/7c0c03e124328b135cbd8059ba34945e256b4b8f.png'
    },
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
        <p className="relative shrink-0">Blog</p>
      </div>

      {/* Header Section */}
      <div className="flex flex-col gap-[115px] items-start w-full max-w-[1440px] mx-auto pt-10 px-4">
        <div className="content-stretch flex flex-col gap-[53px] items-center relative shrink-0">
          <h1 className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[50px] text-center text-nowrap text-white">
            Our Blog Collection
          </h1>
          <div className="content-stretch flex gap-[85px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[43px] items-start relative shrink-0">
              <h2 className="font-satoshi leading-normal not-italic relative shrink-0 text-[32px] text-center text-nowrap text-white">
                Discover the Art of Perfumery
              </h2>
              <div className="content-stretch flex flex-col font-satoshi gap-[24px] items-start leading-normal not-italic relative shrink-0 text-[20px] text-white">
                <p className="relative shrink-0 w-[486px]">
                  Welcome to Local Face's Perfumery Blog Collection! Here, we invite you to immerse yourself in the captivating world of fragrances, where each blog post is a sensory journey that unveils the magic and allure of perfumes. Our team of fragrance enthusiasts, industry experts, and perfumers have curated an array of captivating articles to enrich your understanding and appreciation for these olfactory delights.
                </p>
                <p className="relative shrink-0 w-[486px]">
                  At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your senses and deepen your appreciation for these olfactory wonders.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative size-[155px] rounded-lg overflow-hidden">
                  <img alt="Blog" className="absolute inset-0 w-full h-full object-cover" src={`/assets/ef7f3859ccc4faeb8aa4dd8071ecca0834c2e49d.png`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="content-stretch flex gap-[254px] items-center justify-center relative shrink-0 w-[1243px]">
          <div className="relative w-[443px]">
            <input 
              type="text" 
              placeholder="Search here" 
              className="bg-white h-[48px] rounded-[10px] w-full px-5 text-[#3d3d3d] placeholder:text-[#3d3d3d] focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <div className="content-stretch flex gap-[13px] items-end relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
            <p className="font-satoshi leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">Filter by Category</p>
            <CaretLeft className="relative shrink-0 size-[24px] text-white rotate-90" />
          </div>
          <div className="content-stretch flex gap-[13px] items-end relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
            <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">Sort by</p>
            <CaretLeft className="relative shrink-0 size-[24px] text-white rotate-90" />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="content-stretch flex flex-col gap-[87px] items-center justify-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[85px] items-start relative shrink-0">
            {[0, 3].map((startIdx) => (
              <div key={startIdx} className="content-stretch flex flex-col items-center relative shrink-0">
                <div className="content-stretch flex gap-[55px] items-start relative shrink-0">
                  {blogs.slice(startIdx, startIdx + 3).map((blog) => (
                    <div key={blog.id} className="content-stretch flex flex-col gap-[55px] items-start relative shrink-0">
                      <Link to={`/blog/${blog.id}`} className="relative shrink-0 size-[375px] rounded-lg overflow-hidden group">
                        <img alt={blog.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={blog.image} />
                      </Link>
                      <div className="content-stretch flex flex-col gap-[46px] items-start relative shrink-0">
                        <div className="content-stretch flex flex-col gap-[10px] items-start leading-normal not-italic relative shrink-0 text-white">
                          <Link to={`/blog/${blog.id}`} className="font-satoshi font-bold relative shrink-0 text-[20px] w-[364px] hover:text-brand-primary transition-colors">
                            {blog.title}
                          </Link>
                          <p className="font-satoshi leading-normal relative shrink-0 text-[16px] w-[371px]">
                            {blog.description}
                          </p>
                        </div>
                        <Link to={`/blog/${blog.id}`} className="border border-solid border-white content-stretch flex h-[36px] items-center justify-center overflow-clip px-[30px] py-[14px] relative rounded-[10px] shrink-0 w-[141px] hover:bg-white hover:text-black transition-colors">
                          <p className="font-satoshi font-bold leading-normal not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                            Read More
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="bg-[#ab572d] content-stretch flex flex-col h-[50px] items-center justify-center overflow-clip px-[30px] py-[14px] relative rounded-[10px] shrink-0 w-[213px] hover:bg-[#8b4520] transition-colors">
            <p className="font-satoshi font-black leading-normal not-italic relative shrink-0 text-[16px] text-nowrap text-white">
              Load More
            </p>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogsCollectionPage

