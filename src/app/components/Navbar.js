 
// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">My Landing Page</Link>
        <ul className="flex space-x-4 text-white">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#products">Products</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="#reviews">Reviews</Link></li>
          <li><Link href="#about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;