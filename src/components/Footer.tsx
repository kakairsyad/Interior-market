import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-wide mb-6 text-white">MARKETPLACE</h3>
            <p className="text-white font-light leading-relaxed max-w-md mb-6">
              Curating exceptional design for modern living. Each piece in our collection 
              embodies the principles of quality, functionality, and timeless beauty.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.32-1.297L3.182 17.44l1.297-1.946c-.807-.872-1.297-2.023-1.297-3.32 0-2.594 2.1-4.694 4.693-4.694s4.694 2.1 4.694 4.693c0 2.594-2.1 4.694-4.693 4.694z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                <span className="sr-only">Pinterest</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.308-2.847 3.168-.814-.058-1.265-.468-1.97-.855-.276 1.478-.665 2.894-1.447 3.965-.596 1.004-1.27 1.418-2.186 1.387-.697-.024-1.233-.458-1.423-1.438-.33-1.725.24-4.32.558-6.295.318-1.975.633-4.14.558-6.295-.049-.753.218-1.414.969-1.438 1.163-.037 1.836 1.162 2.138 2.295.302 1.133.302 2.4.302 3.652 0 .928-.218 1.798-.665 2.52-.447.722-1.14 1.222-2.023 1.222-1.507 0-2.68-1.226-2.68-2.767 0-.896.302-1.798.906-2.52.603-.722 1.526-1.222 2.68-1.222 1.846 0 3.31 1.507 3.31 3.31z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wide uppercase mb-6">Shop</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/furniture" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/lighting" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Lighting
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wide uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/designers" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Designers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-200 font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm font-light">
            © 2024 Marketplace. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
