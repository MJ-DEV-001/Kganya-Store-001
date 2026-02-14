import { Link } from 'react-router-dom';
import type { Product } from '../types/index';
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image_url || 'https://via.placeholder.com/400'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">R{product.price.toFixed(2)}</span>
          {product.stock > 0 ? (
            <span className="text-green-600 text-sm">In Stock</span>
          ) : (
            <span className="text-red-600 text-sm">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}
