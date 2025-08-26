export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  designer?: string;
  description: string;
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  inStock: boolean;
  featured: boolean;
}

export interface Category {
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Furniture',
    description: 'Contemporary furniture pieces that blend form and function seamlessly.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center',
    subcategories: [
      { name: 'Seating', description: 'Chairs, sofas, and benches designed for comfort and style.' },
      { name: 'Tables', description: 'Dining tables, coffee tables, and side tables for every space.' },
      { name: 'Storage', description: 'Shelving, cabinets, and storage solutions that organize beautifully.' }
    ]
  },
  {
    name: 'Lighting',
    description: 'Illumination that creates atmosphere and enhances your space.',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=400&fit=crop&crop=center',
    subcategories: [
      { name: 'Pendant Lights', description: 'Hanging lights that make a statement.' },
      { name: 'Table Lamps', description: 'Desk and accent lighting for focused illumination.' },
      { name: 'Floor Lamps', description: 'Standing lights that provide ambient illumination.' }
    ]
  },
  {
    name: 'Accessories',
    description: 'Thoughtfully designed objects that complete your living space.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center',
    subcategories: [
      { name: 'Textiles', description: 'Cushions, throws, and rugs that add warmth and texture.' },
      { name: 'Ceramics', description: 'Handcrafted pottery and decorative vessels.' },
      { name: 'Decorative Objects', description: 'Sculptural pieces and artistic accents.' }
    ]
  }
];

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Minimal Oak Chair',
    price: 299,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop&crop=center'
    ],
    category: 'Furniture',
    subcategory: 'Seating',
    designer: 'Nordic Design Studio',
    description: 'A beautifully crafted oak chair that embodies contemporary design principles. The clean lines and natural wood grain make it perfect for any modern interior.',
    materials: ['Solid Oak', 'Natural Oil Finish'],
    dimensions: { width: 45, height: 82, depth: 52 },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Ceramic Pendant Light',
    price: 189,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop&crop=center'
    ],
    category: 'Lighting',
    subcategory: 'Pendant Lights',
    designer: 'Light Studio',
    description: 'Handmade ceramic pendant light with a soft, warm glow. Perfect for creating ambient lighting in dining areas and living spaces.',
    materials: ['Glazed Ceramic', 'Textile Cord'],
    dimensions: { width: 25, height: 20, depth: 25 },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Walnut Coffee Table',
    price: 799,
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&h=600&fit=crop&crop=center'
    ],
    category: 'Furniture',
    subcategory: 'Tables',
    designer: 'Wood Collective',
    description: 'Solid walnut coffee table with clean geometric lines. The natural beauty of the wood grain is enhanced by expert craftsmanship.',
    materials: ['Solid Walnut', 'Natural Wax Finish'],
    dimensions: { width: 120, height: 40, depth: 60 },
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Wool Throw Pillow',
    price: 79,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&crop=center'
    ],
    category: 'Accessories',
    subcategory: 'Textiles',
    description: 'Soft merino wool throw pillow in natural tones. Adds warmth and texture to any seating arrangement.',
    materials: ['100% Merino Wool', 'Down Fill'],
    dimensions: { width: 50, height: 50, depth: 15 },
    inStock: false,
    featured: false
  },
  {
    id: '5',
    name: 'Concrete Table Lamp',
    price: 149,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center'
    ],
    category: 'Lighting',
    subcategory: 'Table Lamps',
    designer: 'Industrial Arts',
    description: 'Modern concrete table lamp with minimalist design. Provides focused task lighting with industrial aesthetic.',
    materials: ['Cast Concrete', 'Linen Shade'],
    dimensions: { width: 20, height: 45, depth: 20 },
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Modular Bookshelf',
    price: 449,
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=600&fit=crop&crop=center'
    ],
    category: 'Furniture',
    subcategory: 'Storage',
    designer: 'Modular Systems',
    description: 'Versatile modular bookshelf system that can be configured to fit any space. Clean lines and functional design.',
    materials: ['Birch Plywood', 'Steel Connectors'],
    dimensions: { width: 80, height: 180, depth: 30 },
    inStock: true,
    featured: true
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return sampleProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return sampleProducts.filter(product => 
    product.subcategory.toLowerCase() === subcategory.toLowerCase()
  );
};

export const getFeaturedProducts = (): Product[] => {
  return sampleProducts.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return sampleProducts.find(product => product.id === id);
};
