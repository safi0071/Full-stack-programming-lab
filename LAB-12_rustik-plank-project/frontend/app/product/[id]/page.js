'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProduct } from '../../../services/api';

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data } = await getProduct(params.id);
    setProduct(data);
  };

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">
      <img src={product.image} alt={product.name} className="rounded" />

      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="mt-5">{product.description}</p>
        <h2 className="mt-5 text-2xl">${product.price}</h2>

        <button className="bg-black text-white px-6 py-3 rounded mt-5">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;