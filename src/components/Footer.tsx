import Copyright from './icons/Copyright'
import TwitterIcon from './icons/TwitterIcon'
import FacebookIcon from './icons/FacebookIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import InstagramIcon from './icons/InstagramIcon'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="relative mt-auto w-full pt-20 pb-10">
      <div className="relative w-full min-h-[591px] bg-gradient-to-b from-transparent to-black/80">
        <div className="flex flex-col gap-[47px] items-center justify-center w-full max-w-[1440px] mx-auto px-[calc(8.33%-18px)]">
        <div className="content-stretch flex gap-[146px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0">
            <p className="bg-clip-text font-danilo leading-normal not-italic relative shrink-0 text-[36px] w-[192px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 192 41\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(0.0000026714 -2.65 -52.643 -0.000053068 82 33)\\\\' opacity=\\\\'1\\\\'><rect height=\\\\'34.915\\\\' width=\\\\'142.26\\\\' fill=\\\\'url(%23grad)\\\\' id=\\\\'quad\\\\' shape-rendering=\\\\'crispEdges\\\\'/><use href=\\\\'%23quad\\\\' transform=\\\\'scale(1 -1)\\\\'/><use href=\\\\'%23quad\\\\' transform=\\\\'scale(-1 1)\\\\'/><use href=\\\\'%23quad\\\\' transform=\\\\'scale(-1 -1)\\\\'/></g><defs><linearGradient id=\\\\'grad\\\\' gradientUnits=\\\\'userSpaceOnUse\\\\' x2=\\\\'5\\\\' y2=\\\\'5\\\\'><stop stop-color=\\\\'rgba(171,87,45,1)\\\\\\\' offset=\\\\\\\\'0\\\\\\\\'/><stop stop-color=\\\\\\\\\\\\\\'rgba(204,121,64,1)\\\\\\\\\\\\\\' offset=\\\\\\\\\\\\\\'0.22031\\\\\\\\'/><stop stop-color=\\\\\\\\\\\\\\'rgba(236,154,82,1)\\\\\\\\\\\\\\' offset=\\\\\\\\\\\\\\'0.44062\\\\\\\\'/><stop stop-color=\\\\\\\\\\\\\\'rgba(200,113,48,1)\\\\\\\\\\\\\\' offset=\\\\\\\\\\\\\\'0.72026\\\\\\\\'/><stop stop-color=\\\\\\\\\\\\\\'rgba(183,92,32,1)\\\\\\\\\\\\\\' offset=\\\\\\\\\\\\\\'0.86008\\\\\\\\'/><stop stop-color=\\\\\\\\\\\\\\'rgba(165,71,15,1)\\\\\\\\\\\\\\' offset=\\\\\\\\\\\\\\'0.9999\\\\\\\\'/><stop stop-color=\\\\\\\\\\\\\\'rgba(171,88,41,1)\\\\\\\\\\\\\\' offset=\\\\\\\\\\\\\\'1\\\\\\\\'/></linearGradient></defs></svg>')" }}>
              Local Face
            </p>
            <p className="font-satoshi font-medium leading-normal not-italic relative shrink-0 text-[24px] text-nowrap text-white">
              Subscribe to Our Newsletter:
            </p>
            <p className="font-satoshi leading-normal not-italic relative shrink-0 text-[16px] text-white w-[304px]">
              Receive Updates on New Arrivals and Special Promotions!
            </p>
            <div className="relative w-[333px]">
              <input 
                type="email" 
                placeholder="Your email here" 
                className="bg-[#1d1d1d] border border-[#1d1d1d] border-solid h-[40px] rounded-[10px] w-full px-4 text-white placeholder:text-[#403f3f] focus:outline-none focus:border-brand-primary"
              />
              <button className="absolute bg-[#ab572d] h-[40px] right-0 rounded-br-[10px] rounded-tr-[10px] top-0 w-[86px] flex items-center justify-center hover:bg-[#8b4520] transition-colors">
                <span className="font-satoshi font-medium leading-normal not-italic text-[16px] text-nowrap text-white">Submit</span>
              </button>
            </div>
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
              <a href="#" className="overflow-clip relative shrink-0 size-[36px] hover:opacity-70 transition-opacity">
                <InstagramIcon className="size-full" />
              </a>
            </div>
          </div>
          <div className="content-stretch flex gap-[108px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="font-satoshi font-bold leading-[26px] relative shrink-0">Categories</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Fashion</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Jewelry</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Sports</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Electronics</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Indoor</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="font-satoshi font-bold leading-[26px] relative shrink-0">Shopping</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Payments</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Delivery options</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Buyer protection</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="font-satoshi font-bold leading-[26px] relative shrink-0">Customer care</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Help center</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Terms & Conditions</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Privacy policy</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Returns & refund</p>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Survey & feedback</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="font-satoshi font-bold leading-[26px] relative shrink-0">Pages</p>
                <Link to="/about" className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors">About Us</Link>
                <Link to="/products" className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors">Shop</Link>
                <p className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors cursor-pointer">Contact Us</p>
                <Link to="/services" className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors">Services</Link>
                <Link to="/blog" className="font-satoshi leading-normal relative shrink-0 hover:text-brand-primary transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px relative shrink-0 w-full max-w-[1235px] border-t border-white/20"></div>
        <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
          <Copyright className="relative shrink-0 size-[11px] text-white" />
          <p className="font-satoshi leading-normal not-italic relative shrink-0 text-[11px] text-nowrap text-white">2023 Local Face Inc. All rights reserved</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

