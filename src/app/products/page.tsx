'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { sampleProducts, categories } from '@/lib/sampleData';

const ProductsContent = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'newest'>('newest');

  const filteredAndSortedProducts = useMemo(() => {
    let products = sampleProducts;

    // Filter by search query
    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.designer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      products = products.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'name':
        products = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        products = [...products].sort((a, b) => b.featured ? 1 : -1);
        break;
    }

    return products;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Discover our complete collection of furniture, lighting, and accessories
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 text-sm font-light uppercase tracking-wide transition-colors duration-200 ${
                  selectedCategory === null
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 text-sm font-light uppercase tracking-wide transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-light text-gray-700 uppercase tracking-wide">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-4 py-2 border border-gray-300 bg-white text-sm font-light focus:outline-none focus:border-gray-500"
              >
                <option value="newest">Newest</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 font-light">
              Showing {filteredAndSortedProducts.length} of {sampleProducts.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showCategory={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-light text-gray-900 mb-4">No products found</h3>
              <p className="text-gray-600 font-light mb-8">
                {searchQuery 
                  ? `No products match your search for "${searchQuery}". Try different keywords or browse our categories.`
                  : 'No products match your current filters. Try adjusting your selection.'
                }
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    window.history.pushState({}, '', '/products');
                  }}
                  className="px-6 py-3 bg-gray-900 text-white font-light uppercase tracking-wide hover:bg-gray-800 transition-colors duration-200"
                >
                  View All Products
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <Suspense fallback={
      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                All Products
              </h1>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Loading products...
              </p>
            </div>
          </div>
        </section>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
};

export default ProductsPage;
