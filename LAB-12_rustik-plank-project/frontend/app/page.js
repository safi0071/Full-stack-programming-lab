'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-bold">Rustik Plank Furniture</h1>
        <p className="mt-4">Luxury Modern Furniture Collection</p>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}