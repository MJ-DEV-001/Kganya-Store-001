import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Product } from '../types/index';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .limit(4);

      if (error) throw error;
      setFeaturedProducts(data || []);
    } catch (error) {
      console.error('Error loading featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200)',
          }}
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Walk in the Light
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Kganya - where faith meets fashion. Express your Christian identity
              through modern streetwear.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Message */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Light Your Path
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Kganya means "Light" in Setswana. We create streetwear that reflects
            your faith, celebrating the light of Christ in contemporary style.
            Every piece is designed to help you shine your light in the world.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Collection</h2>
            <Link to="/shop" className="text-black underline hover:no-underline">
              View All
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No featured products available yet.
            </div>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Faith-Inspired</h3>
              <p className="text-gray-400">
                Every design reflects our Christian values and message
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold mb-2">Quality Crafted</h3>
              <p className="text-gray-400">
                Premium materials and attention to detail in every piece
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-400">
                Building a community of believers expressing faith through fashion
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
