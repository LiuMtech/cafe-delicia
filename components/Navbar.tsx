import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar-custom fixed top-10 bg-black bg-opacity-55 backdrop-blur-md p-4 z-50 rounded-full" style={{ width: '65vw', left: '50%', transform: 'translateX(-50%)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="flex items-center pl-20">
              <img src="/logos/logo-white.png" alt="Cafe Delicia" style={{ width: '45px', height: '45px' }} className="mr-2" />
              <span className="pl-2 text-2xl font-bold text-white"><span className='font-bold'>Café </span><span className='italic'>Delicia</span></span>
            </span>
          </Link>
        </div>
        <ul className="nav-links flex gap-4 pr-20">
          <li>
            <Link href="/">
              <span className="text-white hover:text-customOrange transition duration-200">Inicio</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:text-customOrange transition duration-200">Contacto</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
