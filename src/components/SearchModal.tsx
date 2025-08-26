'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { sampleProducts } from '@/lib/sampleData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(sampleProducts.slice(0, 6));
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.designer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);
      setSearchResults(filtered);
    } else {
      setSearchResults(sampleProducts.slice(0, 6));
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
            {/* Search Header */}
            <div className="bg-white px-6 pt-6 pb-4">
              <div className="flex items-center">
                <div className="flex-1 relative">
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      className="w-full border-none outline-none text-lg placeholder-gray-400 pr-12"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  </form>
                  <button
                    onClick={onClose}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-200 mt-4"></div>
            </div>

            {/* Search Results */}
            <div className="bg-white px-6 pb-6">
              {searchResults.length > 0 ? (
                <>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    {searchQuery ? `Results for "${searchQuery}"` : 'Popular Products'}
                  </h3>
                  <div className="space-y-4">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={onClose}
                        className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {product.designer && `by ${product.designer} • `}${product.category}
                          </p>
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          ${product.price}
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {searchQuery && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => {
                          router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
                          onClose();
                        }}
                        className="w-full text-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        View all results for &ldquo;{searchQuery}&rdquo;
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-gray-500">No products found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
