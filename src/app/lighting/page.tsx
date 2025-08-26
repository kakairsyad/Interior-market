'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, categories } from '@/lib/sampleData';

const LightingPage = () => {
  const lightingCategory = categories.find(cat => cat.name === 'Lighting');
  const lightingProducts = getProductsByCategory('Lighting');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredProducts = selectedSubcategory 
    ? lightingProducts.filter(product => product.subcategory === selectedSubcategory)
    : lightingProducts;

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Lighting Collection
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              {lightingCategory?.description}
            </p>
            
            {/* Subcategory Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedSubcategory(null)}
                className={`px-6 py-3 text-sm font-light uppercase tracking-wide transition-colors duration-200 ${
                  selectedSubcategory === null
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Lighting
              </button>
              {lightingCategory?.subcategories.map((subcategory) => (
                <button
                  key={subcategory.name}
                  onClick={() => setSelectedSubcategory(subcategory.name)}
                  className={`px-6 py-3 text-sm font-light uppercase tracking-wide transition-colors duration-200 ${
                    selectedSubcategory === subcategory.name
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subcategory.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedSubcategory && (
            <div className="mb-12">
              <h2 className="text-2xl font-light text-gray-900 mb-4">{selectedSubcategory}</h2>
              <p className="text-gray-600 font-light">
                {lightingCategory?.subcategories.find(sub => sub.name === selectedSubcategory)?.description}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showCategory={false} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-light text-gray-900 mb-4">No products found</h3>
              <p className="text-gray-600 font-light">Try selecting a different category or check back later for new arrivals.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LightingPage;
