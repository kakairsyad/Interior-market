import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, categories, sampleProducts } from "@/lib/sampleData";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = sampleProducts.filter(p => ['1', '3', '6'].includes(p.id));

  return (
    <div className="bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-gray-100 rounded-full opacity-30 rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light uppercase tracking-widest rounded-full">
                  Premium Design Collection
                </span>
              </div>
              <h1 className="text-7xl xl:text-8xl font-extralight text-gray-900 mb-8 tracking-tight leading-none">
                Timeless
                <br />
                <span className="italic text-gray-600">Modern</span>
                <br />
                Elegance
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-2xl">
                Discover premium furniture, lighting, and accessories that embody the perfect balance of 
                <span className="italic">form</span> and <span className="italic">function</span>.
              </p>
              <div className="flex flex-col gap-6 max-w-sm">
                <Link
                  href="/furniture"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white font-light uppercase tracking-wide hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Explore Collection
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-light uppercase tracking-wide hover:border-gray-900 hover:text-gray-900 transition-all duration-300 text-sm"
                >
                  Our Story
                </Link>
              </div>
            </div>
            
            <div className="relative block">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-1 transition-transform duration-700 w-full max-w-lg mx-auto lg:mx-0">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=750&fit=crop&crop=center"
                  alt="Modern living room"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-lg overflow-hidden shadow-lg -rotate-6">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop&crop=center"
                  alt="Design detail"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights Section - Testing Tailwind */}
      <section className="py-16 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Expert Designers</div>
            </div>
            <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Sustainable Materials</div>
            </div>
            <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Curated Pieces</div>
            </div>
            <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">25</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light uppercase tracking-widest rounded-full mb-6">
              Discover Our Collections
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Thoughtfully Curated Categories
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Each collection represents the pinnacle of contemporary design—where minimalism meets functionality, 
              creating pieces that elevate your everyday living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={`/${category.name.toLowerCase()}`}
                className="group block cursor-pointer"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="aspect-[5/4] overflow-hidden relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={600}
                      height={480}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                        {category.name}
                      </h3>
                      <span className="text-sm text-gray-400 font-light">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-gray-900 uppercase tracking-wide group-hover:text-gray-700 transition-colors duration-200">
                      Explore Collection
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light uppercase tracking-widest rounded-full mb-6">
                Customer Favorites
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Best Selling Designs
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                These exceptional pieces have captured the hearts of design enthusiasts worldwide, 
                combining timeless aesthetics with everyday functionality.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center text-gray-900 font-medium uppercase tracking-wide hover:text-gray-700 transition-colors duration-200 cursor-pointer"
              >
                View All Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop&crop=center"
                  alt="Modern interior"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {bestSellers.map((product) => (
              <div key={product.id} className="group">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light uppercase tracking-widest rounded-full mb-6">
              New Arrivals
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Latest Additions
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Fresh designs from our favorite creators, each piece carefully selected to enhance 
              your living space with authentic modern elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group transform hover:-translate-y-2 transition-all duration-500 animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-light uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            >
              Discover All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
