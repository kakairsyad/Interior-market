import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/sampleData';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

const ProductCard = ({ product, showCategory = false }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`} className="group block cursor-pointer">
      <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden relative bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {!product.inStock && (
            <div className="absolute top-4 left-4">
              <span className="bg-gray-900 text-white text-xs font-medium px-3 py-1 uppercase tracking-wide">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          {showCategory && (
            <p className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">
              {product.category}
            </p>
          )}
          
          <h3 className="text-lg font-light text-gray-900 mb-1 group-hover:text-gray-600 transition-colors duration-200">
            {product.name}
          </h3>
          
          {product.designer && (
            <p className="text-sm text-gray-500 font-light mb-2">
              by {product.designer}
            </p>
          )}
          
          <p className="text-sm text-gray-600 font-light mb-4">
            {product.subcategory}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-light text-gray-900">
              ${product.price}
            </span>
            {!product.inStock && (
              <span className="text-sm text-gray-500 font-light">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
