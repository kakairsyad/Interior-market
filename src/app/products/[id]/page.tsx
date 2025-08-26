'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { getProductById, getProductsByCategory } from '@/lib/sampleData';

const ProductDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, openCart } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    openCart();
  };

  const currentImage = product.images[selectedImageIndex] || product.image;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <nav className="py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm font-light text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link href={`/${product.category.toLowerCase()}`} className="hover:text-gray-900 transition-colors duration-200">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={currentImage}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex space-x-4 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImageIndex === index
                          ? 'border-gray-900'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 font-light uppercase tracking-wide mb-2">
                  {product.category} • {product.subcategory}
                </p>
                <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
                  {product.name}
                </h1>
                {product.designer && (
                  <p className="text-lg text-gray-600 font-light mb-6">
                    by {product.designer}
                  </p>
                )}
                <p className="text-3xl font-light text-gray-900 mb-8">
                  ${product.price}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Materials</h3>
                <ul className="space-y-2">
                  {product.materials.map((material, index) => (
                    <li key={index} className="text-gray-600 font-light">
                      • {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Dimensions</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 font-light uppercase tracking-wide">Width</span>
                    <p className="text-gray-900 font-medium">{product.dimensions.width}cm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-light uppercase tracking-wide">Height</span>
                    <p className="text-gray-900 font-medium">{product.dimensions.height}cm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-light uppercase tracking-wide">Depth</span>
                    <p className="text-gray-900 font-medium">{product.dimensions.depth}cm</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <label htmlFor="quantity" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="px-4 py-2 border border-gray-300 bg-white text-sm font-light focus:outline-none focus:border-gray-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                {product.inStock ? (
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gray-900 text-white py-4 px-8 font-light uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300"
                  >
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-4 px-8 font-light uppercase tracking-wide cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}

                <p className="text-sm text-gray-600 font-light text-center">
                  {product.inStock ? 'In stock and ready to ship' : 'Currently out of stock'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
                You Might Also Like
              </h2>
              <p className="text-xl text-gray-600 font-light">
                More pieces from our {product.category.toLowerCase()} collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
