import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 shadow flex justify-between">
      <h1 className="text-2xl font-bold">Rustik Plank</h1>

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;