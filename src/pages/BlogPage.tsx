import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaretLeft from '../components/icons/CaretLeft'
import TwitterIcon from '../components/icons/TwitterIcon'
import FacebookIcon from '../components/icons/FacebookIcon'
import LinkedinIcon from '../components/icons/LinkedinIcon'

function BlogPage() {
  const params = useParams()
  void params.slug // Intentionally unused for now

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="relative">
        <Header />
      </div>
      
      {/* Breadcrumb */}
      <div className="flex font-inter font-normal gap-[9px] items-center justify-center leading-normal not-italic text-[16px] text-nowrap text-white pt-[120px] px-4">
        <Link to="/" className="relative shrink-0 hover:text-brand-primary transition-colors">Home</Link>
        <p className="relative shrink-0">/</p>
        <Link to="/blog" className="relative shrink-0 hover:text-brand-primary transition-colors">Blog</Link>
        <p className="relative shrink-0">/</p>
        <p className="relative shrink-0">The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories</p>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col gap-[68px] items-start w-full max-w-[1440px] mx-auto pt-10 pb-40 px-4">
        <div className="content-stretch flex flex-col gap-[100px] items-center justify-center relative shrink-0">
          <div className="content-stretch flex flex-col font-inter font-normal gap-[13px] items-center justify-center leading-normal not-italic relative shrink-0 text-[20px] text-nowrap text-white">
            <p className="relative shrink-0">January 5, 2023</p>
            <p className="relative shrink-0">Perfume Collections</p>
          </div>
          <h1 className="font-inter font-normal leading-normal not-italic relative shrink-0 text-[50px] text-center text-white w-[1180px]">
            The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories
          </h1>
          <div className="h-[628px] relative shrink-0 w-[1236px] rounded-lg overflow-hidden">
            <img alt="Blog" className="absolute inset-0 w-full h-full object-cover" src="/assets/2d189f2ef3a27c30cfcd0dbcaf8f93717fe33741.png" />
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0">
          <div className="font-inter font-normal leading-normal not-italic relative shrink-0 text-white w-[1236px]">
            <p className="font-satoshi mb-0 text-[20px]">
              Welcome, fragrance aficionados, to an exquisite journey into the captivating world of luxury perfume collections. A symphony of scents awaits as we delve into the art of curating a fragrance collection that reflects your essence, evokes cherished memories, and embraces the finest olfactory masterpieces. Just as a maestro conducts an orchestra, we invite you to become the conductor of your very own perfume symphony.
            </p>
            <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
            <h2 className="font-satoshi font-medium mb-0 text-[24px] mt-4">The Perfume Collection: A Personal Overture</h2>
            <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
            <p className="font-satoshi text-[20px] mt-4">
              A perfume collection is more than an assortment of fragrances; it is a reflection of your personality, your life's chapters, and the emotions that define you. As you embark on this aromatic voyage, consider what scents resonate with your soul, whisking you away to cherished moments and uncharted dreams. Each fragrance in your collection will tell a unique story, narrated by the notes that gracefully dance upon your skin.
            </p>
          </div>

          <div className="content-stretch flex gap-[83px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[500px] rounded-lg overflow-hidden">
              <img alt="Blog" className="absolute inset-0 w-full h-full object-cover" src="/assets/c420b22a0c8c95fda3b9c31c753fefd08f2d0dab.png" />
            </div>
            <div className="font-inter font-normal leading-normal not-italic relative shrink-0 text-white w-[651px]">
              <h2 className="font-satoshi font-medium mb-0 text-[24px]">The Overture: Discovering Your Signature Scent</h2>
              <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
              <p className="font-satoshi mb-0 text-[20px] mt-4">
                The journey to curating a luxury perfume collection begins with finding your signature scent—the one that feels like an olfactory extension of your being. Take time to explore different fragrance families, from opulent florals to mysterious orientals, to discover the notes that harmonize perfectly with your skin chemistry. This will be the foundation upon which you build your enchanting symphony of scents.
              </p>
              <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
              <h2 className="font-satoshi font-medium mb-0 text-[24px] mt-4">Commemorating Milestones</h2>
              <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
              <p className="font-satoshi text-[20px] mt-4">
                Just as the notes of a melody create beautiful harmonies, certain fragrances can encapsulate significant moments in your life. Whether it's a celebration of love, a momentous achievement, or a cherished memory with a loved one, select perfumes that become olfactory milestones. With each spritz, you'll be transported back in time, reliving the emotions that weave your life's narrative.
              </p>
            </div>
          </div>

          <div className="font-inter font-normal leading-normal not-italic relative shrink-0 text-white w-[1236px]">
            <h2 className="font-satoshi font-medium mb-0 text-[24px]">Exploring the Fragrance Palette</h2>
            <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
            <p className="font-satoshi mb-0 text-[20px] mt-4">
              As you continue composing your collection, it's essential to explore a diverse fragrance palette. Include scents that embody contrasting moods and evoke emotions ranging from serenity to exuberance. From the freshness of citrusy top notes to the warm embrace of rich base notes, each perfume adds a unique hue to your olfactory canvas.
            </p>
            <p className="mb-0 text-[24px] mt-4">&nbsp;</p>
            <h2 className="font-satoshi font-medium mb-0 text-[24px] mt-4">Embracing Niche Gems</h2>
            <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
            <p className="font-satoshi text-[20px] mt-4">
              Just as a symphony benefits from unique instruments, your collection can be enriched by the discovery of niche perfumes and artisanal creations. Venture beyond the mainstream, and explore the creations of master perfumers who pour their heart and soul into crafting distinctive scents. These hidden gems add an air of exclusivity to your olfactory repertoire.
            </p>
          </div>

          <div className="content-stretch flex gap-[85px] items-start relative shrink-0">
            <div className="font-inter font-normal leading-normal not-italic relative shrink-0 text-white w-[618px]">
              <h2 className="font-satoshi font-medium mb-0 text-[24px]">Perfume as an Art Form</h2>
              <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
              <p className="font-satoshi mb-0 text-[20px] mt-4">
                Perfume is not merely a product; it is an art form that captivates the senses and transcends time. Take a moment to appreciate the artistry behind each perfume, the skill of the perfumer in blending notes, and the emotions they convey through fragrance. Embrace the poetry in each bottle, and your collection will become an ode to the beauty of scent.
              </p>
              <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
              <h2 className="font-satoshi font-medium mb-0 text-[24px] mt-4">Displaying Your Symphony of Scents</h2>
              <p className="mb-0 text-[20px] mt-4">&nbsp;</p>
              <p className="font-satoshi text-[20px] mt-4">
                The grand finale of your perfume symphony lies in the elegant presentation of your collection. A tastefully curated display showcases the artistry of perfume bottles, transforming your collection into an aesthetic marvel. Whether nestled on a vintage vanity or arranged in a custom-made perfume cabinet, your fragrant ensemble becomes an exquisite visual and olfactory experience.
              </p>
            </div>
            <div className="relative shrink-0 size-[500px] rounded-lg overflow-hidden">
              <img alt="Blog" className="absolute inset-0 w-full h-full object-cover" src="/assets/4624a525ae7886c22b039d2c90c8e0778b6f5e6c.png" />
            </div>
          </div>

          <div className="font-satoshi leading-normal not-italic relative shrink-0 text-[20px] text-white w-[1224px]">
            <p className="mb-0">
              Dear perfume connoisseurs, may this guide inspire you to embark on a journey of curating a luxury perfume collection that harmonizes with your soul. As you add each new fragrance to your symphony, you'll find that your collection becomes more than an assemblage of scents—it becomes a masterpiece of memories, emotions, and the art of perfumery.
            </p>
            <p className="mb-0 mt-4">&nbsp;</p>
            <p className="mb-0">Happy curating!</p>
            <p className="mb-0">Kiara Smith</p>
            <p>&nbsp;</p>
          </div>

          {/* Share Section */}
          <div className="content-stretch flex gap-[434px] items-center justify-center relative shrink-0 w-[1245px]">
            <Link to="/blog" className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity">
              <CaretLeft className="relative shrink-0 size-[24px] text-white" />
              <p className="font-inter font-normal leading-normal not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                Previous Post
              </p>
            </Link>
            <div className="content-stretch flex flex-col gap-[17px] items-center justify-center relative shrink-0">
              <p className="font-inter font-normal leading-normal not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                Share On
              </p>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                <a href="#" className="overflow-clip relative shrink-0 size-[36px] hover:opacity-70 transition-opacity">
                  <TwitterIcon className="size-full" />
                </a>
                <a href="#" className="relative shrink-0 size-[36px] hover:opacity-70 transition-opacity">
                  <FacebookIcon className="size-full" />
                </a>
                <a href="#" className="overflow-clip relative shrink-0 size-[36px] hover:opacity-70 transition-opacity">
                  <LinkedinIcon className="size-full" />
                </a>
              </div>
            </div>
            <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 hover:opacity-70 transition-opacity cursor-pointer">
              <p className="font-inter font-normal leading-normal not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                Next Post
              </p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <CaretLeft className="size-[24px] text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPage

