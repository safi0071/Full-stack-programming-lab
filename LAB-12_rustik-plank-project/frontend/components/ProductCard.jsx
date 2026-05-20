import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded"
      />

      <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
      <p className="mt-2">${product.price}</p>

      <Link href={`/product/${product._id}`}>
        <button className="bg-black text-white px-4 py-2 rounded mt-4">
          View Product
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;