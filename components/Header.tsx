import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 sticky top-0 z-10">
      <nav className="flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/" className="text-white text-2xl font-bold">
          Posts Site
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-white">
              Acerca de mí
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
