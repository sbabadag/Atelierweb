import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ServicesPage() {
  const services = [
    {
      number: '01.',
      title: 'Personal Fragrance Consultations',
      description: 'Choosing the right fragrance can be a deeply personal experience. Our team of knowledgeable fragrance experts is here to guide you through this process. Whether you\'re looking for a signature scent, a gift for a loved one, or need assistance in exploring new fragrance families, our consultants will take the time to understand your preferences and suggest the perfect matches.',
      image: `${import.meta.env.BASE_URL}assets/5f0cbf5fc45c8ad2fcfa327322d14523d394b6b6.png`,
      imageLeft: false
    },
    {
      number: '02.',
      title: 'Custom Fragrance Creation',
      description: 'Experience the art of bespoke perfumery with our custom fragrance creation service. Work closely with our skilled perfumers to craft a scent that is uniquely yours. From selecting individual notes to blending them into a harmonious symphony, we\'ll help you bring your fragrance vision to life. Whether it\'s a special occasion, a gift for someone dear, or simply a way to indulge in luxury, a custom-created perfume is an unforgettable experience.',
      image: `${import.meta.env.BASE_URL}assets/1596ba0e25b324b2fbcf05a5ade2154cd6a840a2.png`,
      imageLeft: true
    },
    {
      number: '03.',
      title: 'Scented Gift Selection',
      description: 'Looking for a meaningful gift that leaves a lasting impression? Our scented gift selection service is designed to help you find the perfect fragrance gift for any occasion. Whether it\'s a birthday, anniversary, or a gesture of appreciation, our experts will assist you in choosing a fragrance that perfectly conveys your sentiments and makes the recipient feel cherished.',
      image: `${import.meta.env.BASE_URL}assets/f78b4182ec68ae8550ba73678971703b3243b2e2.png`,
      imageLeft: false
    },
    {
      number: '04.',
      title: 'Fragrance Events and Workshops',
      description: 'Join us for fragrance-centric events and workshops that celebrate the art of perfumery. Immerse yourself in the captivating world of scents, learn from experts, and discover the nuances of different fragrance families. These events are perfect for fragrance enthusiasts and novices alike, providing a unique opportunity to expand your olfactory knowledge.',
      image: `${import.meta.env.BASE_URL}assets/e59f2e07a588d36aef17ce74d8313381f093fc4e.png`,
      imageLeft: true
    },
    {
      number: '05.',
      title: 'Eco-friendly Initiatives',
      description: 'At Local Face, we are committed to sustainability and eco-conscious practices. As part of our services, we offer guidance on selecting environmentally friendly and cruelty-free fragrances. We partner with brands that share our values and are dedicated to making a positive impact on the planet.',
      image: `${import.meta.env.BASE_URL}assets/34fee038ac1f76b33b301b3d19c53c4f65849fc2.png`,
      imageLeft: false
    },
    {
      number: '06.',
      title: 'Online Shopping Convenience',
      description: 'Explore our carefully curated collection of perfumes from the comfort of your home. Our user-friendly website offers a seamless online shopping experience, complete with detailed product descriptions and customer reviews. You can also reach out to our customer support team for any assistance during your shopping journey.',
      image: `${import.meta.env.BASE_URL}assets/9ef8792ee90705f13e6a450be22afd92767d4144.png`,
      imageLeft: true
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
        <p className="relative shrink-0">Services</p>
      </div>

      {/* Hero Section */}
      <div className="relative h-[617px] w-full mt-10">
          <img alt="Services" className="absolute inset-0 w-full h-full object-cover" src={`${import.meta.env.BASE_URL}assets/1891546db904dad0145c3f844217ee6535fdd133.png`} />
          <div className="absolute inset-0 bg-black/71"></div>
          <div className="absolute content-stretch flex flex-col gap-[58px] items-center leading-normal left-[283px] not-italic text-center text-white top-[392px]">
            <h1 className="font-satoshi font-medium relative shrink-0 text-[50px] w-[678px]">
              Our Services
            </h1>
            <p className="font-satoshi leading-normal relative shrink-0 text-[20px] w-[866px]">
              At Local Face, we are dedicated to providing you with a delightful and immersive perfume shopping experience. Our services are tailored to ensure that you find the perfect fragrance that complements your unique personality and style. We take pride in offering a range of services that go beyond just selling perfumes, aiming to make your journey with us truly special.
            </p>
          </div>
        </div>

      {/* Services List */}
      <div className="w-full max-w-[1440px] mx-auto pt-20 pb-40 px-4 space-y-20">
        {services.map((service, idx) => (
          <div key={service.number} className={`content-stretch flex gap-[43px] items-start ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}>
            <div className="content-stretch flex flex-col gap-[85px] h-[500px] items-start relative shrink-0 w-[494px]">
              <p className="font-satoshi font-bold leading-normal not-italic relative shrink-0 text-[#ab572d] text-[55px] text-nowrap">
                {service.number}
              </p>
              <div className="content-stretch flex flex-col gap-[34px] items-start leading-normal not-italic relative shrink-0 text-white">
                <h2 className="font-satoshi font-bold h-[96px] relative shrink-0 text-[32px] w-[494px]">
                  {service.title}
                </h2>
                <p className="font-satoshi leading-normal relative shrink-0 text-[20px] w-[455px]">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="h-[500px] relative shrink-0 w-[699px] rounded-lg overflow-hidden">
              <img alt={service.title} className="absolute inset-0 w-full h-full object-cover" src={service.image} />
            </div>
          </div>
        ))}
      </div>

      {/* Closing Message */}
      <div className="font-satoshi leading-normal not-italic text-[20px] text-white w-full max-w-[1236px] mx-auto pt-20 pb-40 px-4">
        <p className="mb-0">At Local Face, our passion for perfumery drives us to go above and beyond to serve you better. We invite you to experience our exceptional services and indulge in the world of luxurious scents. Let us be your trusted fragrance destination, where your olfactory dreams come to life.</p>
        <p className="mb-0 mt-4">&nbsp;</p>
        <p className="mb-0">If you have any questions or need assistance, please do not hesitate to reach out to our friendly team. We're here to make your fragrance exploration a truly memorable one.</p>
        <p className="mb-0 mt-4">&nbsp;</p>
        <p>Your Local Face Team</p>
      </div>

      <Footer />
    </div>
  )
}

export default ServicesPage

