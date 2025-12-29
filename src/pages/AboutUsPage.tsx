import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutUsPage() {
  return (
    <div className="bg-black min-h-screen w-full">
      <div className="relative">
        <Header />
      </div>
      
      {/* Breadcrumb */}
      <div className="flex font-inter font-normal gap-[9px] items-center justify-center leading-normal not-italic text-[16px] text-nowrap text-white pt-[120px] px-4">
        <Link to="/" className="relative shrink-0 hover:text-brand-primary transition-colors">Home</Link>
        <p className="relative shrink-0">/</p>
        <p className="relative shrink-0">About Us</p>
      </div>

      {/* Hero Section */}
      <div className="relative h-[617px] w-full mt-10">
        <img alt="About Us" className="absolute inset-0 w-full h-full object-cover" src="/assets/fda75aead57b1e5a68cbcdac1c1057c7fbba6db5.png" />
        <div className="absolute inset-0 bg-black/71"></div>
        <div className="absolute content-stretch flex flex-col gap-[58px] items-center leading-normal left-[calc(25%-15px)] not-italic text-center text-white top-[364px]">
          <h1 className="font-inter font-medium relative shrink-0 text-[50px] w-[678px]">
            About Us
          </h1>
          <p className="font-satoshi leading-normal relative shrink-0 text-[20px] w-[749px]">
            At Local Face, we believe that perfumes are more than just scents; they are expressions of one's individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="flex flex-col gap-[9px] items-center justify-center leading-normal not-italic w-full max-w-[1440px] mx-auto pt-20 px-4">
        <h2 className="font-satoshi font-medium relative shrink-0 text-[#ab572d] text-[32px] text-nowrap">
          Our Story
        </h2>
        <p className="font-satoshi leading-normal relative shrink-0 text-[20px] text-center text-white w-[809px]">
          Local Face Perfumes was founded by a group of perfume enthusiasts with a shared vision to create a haven for perfume lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and richness of cultures around the world, we set out on a journey to curate a collection of scents that capture the essence of each region. Our aim is to bring you closer to the heart and soul of different cultures through the art of perfumery.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative h-[618px] w-full mt-20">
        <img alt="Story" className="absolute inset-0 w-full h-full object-cover" src="/assets/1b6026a26ac9413b315b80e01043a1c5e614fee7.png" />
      </div>

      {/* What Makes Us Unique */}
      <div className="flex flex-col gap-[28px] items-center w-full max-w-[1440px] mx-auto pt-20 px-4">
        <h2 className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[#ab572d] text-[32px] text-nowrap">
          What Makes Us Unique
        </h2>
        <div className="content-stretch flex gap-[107px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[1236px]">
          {[
            { title: 'Locally Inspired', text: 'Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates with its origin' },
            { title: 'High-Quality Ingredients', text: 'We believe that the key to an extraordinary scent lies in the quality of ingredients. That\'s why we collaborate with expert perfumers who source the finest and ethically-sourced materials from around the world. We never compromise on the quality of our products, ensuring a long-lasting and luxurious experience.' },
            { title: 'Personalized Service', text: 'We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance experts is always ready to assist you in finding a fragrance that complements your personality and style. Whether you\'re exploring new scents or seeking to rediscover an old favorite, we\'re here to guide you every step of the way.' },
          ].map((item) => (
            <div key={item.title} className="font-satoshi leading-normal relative shrink-0 w-[341px]">
              <p className="font-satoshi font-bold mb-0 not-italic">{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Message */}
      <div className="font-satoshi leading-normal not-italic text-[20px] text-white w-full max-w-[1236px] mx-auto pt-20 pb-40 px-4">
        <p className="mb-0">Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around the world. Discover the captivating aromas that embrace the essence of local cultures and connect with the beauty of our shared humanity.</p>
        <p className="mb-0 mt-4">&nbsp;</p>
        <p className="mb-0">Thank you for being a part of our journey.</p>
        <p className="mb-0 mt-4">&nbsp;</p>
        <p className="mb-0">With love and gratitude,</p>
        <p>The Local Face Perfumes Team</p>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUsPage

