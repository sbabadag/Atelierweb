import { Link } from 'react-router-dom'
import MagnifyingGlass from './icons/MagnifyingGlass'
import User from './icons/User'
import Heart from './icons/Heart'
import Handbag from './icons/Handbag'

function Header() {
  return (
    <div className="flex gap-[162px] items-center justify-between w-full max-w-[1440px] mx-auto px-4 py-[35px]">
      <Link to="/" className="bg-clip-text font-danilo leading-normal not-italic relative shrink-0 text-[36px] w-[192px] block" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 192 41\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(0.0000026714 -2.65 -52.643 -0.000053068 82 33)\\' opacity=\\'1\\'><rect height=\\'34.915\\' width=\\'142.26\\' fill=\\'url(%23grad)\\' id=\\'quad\\' shape-rendering=\\'crispEdges\\'/><use href=\\'%23quad\\' transform=\\'scale(1 -1)\\\\'/><use href=\\'%23quad\\' transform=\\'scale(-1 1)\\\\'/><use href=\\'%23quad\\' transform=\\'scale(-1 -1)\\\\'/></g><defs><linearGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' x2=\\'5\\' y2=\\'5\\'><stop stop-color=\\'rgba(171,87,45,1)\\\\' offset=\\\\'0\\\\'/><stop stop-color=\\\\'rgba(204,121,64,1)\\\\' offset=\\\\'0.22031\\\\'/><stop stop-color=\\\\'rgba(236,154,82,1)\\\\' offset=\\\\'0.44062\\\\'/><stop stop-color=\\\\'rgba(200,113,48,1)\\\\' offset=\\\\'0.72026\\\\'/><stop stop-color=\\\\'rgba(183,92,32,1)\\\\' offset=\\\\'0.86008\\\\'/><stop stop-color=\\\\'rgba(165,71,15,1)\\\\' offset=\\\\'0.9999\\\\'/><stop stop-color=\\\\'rgba(171,88,41,1)\\\\' offset=\\\\'1\\\\'/></linearGradient></defs></svg>')" }}>
        Local Face
      </Link>
      <div className="content-stretch flex font-satoshi font-medium gap-[70px] items-start leading-normal not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <Link to="/" className="relative shrink-0 hover:text-brand-primary transition-colors">Home </Link>
        <Link to="/products" className="relative shrink-0 hover:text-brand-primary transition-colors">Shop</Link>
        <Link to="/about" className="relative shrink-0 hover:text-brand-primary transition-colors">About us </Link>
        <Link to="/services" className="relative shrink-0 hover:text-brand-primary transition-colors">Services</Link>
        <Link to="/blog" className="relative shrink-0 hover:text-brand-primary transition-colors">Blog</Link>
      </div>
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
        <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
          <MagnifyingGlass className="size-full" />
        </button>
        <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
          <User className="size-full" />
        </button>
        <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
          <Heart className="size-full" />
        </button>
        <button className="relative shrink-0 size-[32px] hover:opacity-70 transition-opacity">
          <Handbag className="size-full" />
        </button>
      </div>
    </div>
  )
}

export default Header

