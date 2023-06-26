import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/LogoEnlaceSVG.svg';
import User from '../../assets/user.svg';
import { Menu } from './Menu';
import Input from '../Input';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLogin, setIsLoggin] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const showLoginAndSignUp = (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex h-full items-center space-x-52">
        <Input
          className="h-5 rounded-3xl w-96"
          placeholder=""
          label=""
          id=""
          value=""
          type=""
          name=""
          error=""
        />
        <Link to="#">
          <img src={User} alt="" />
        </Link>
      </div>
    </div>
  );

  const showLogoutAndCart = (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex h-full items-center space-x-4">
        <Link to="/auth/login">
          <Button
            type="button"
            className="inline-flex bg-transparent items-center px-4 py-2 text-base font-bold text-black"
          >
            Iniciar sesión
          </Button>
        </Link>
        <Link to="/auth/register">
          <Button
            type="button"
            className="text-black inline-flex bg-transparent items-center px-5 py-1 border-2 border-gray-800 text-base font-bold rounded-full "
          >
            Registrarme
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex-shrink-0 flex items-center">
            <Menu isOpen={isMenuOpen} toggle={toggleMenu} />
            <Link to="/home">
              <img className="w-12" src={Logo} alt="logo" />
            </Link>
          </div>
          {isLogin ? showLoginAndSignUp : showLogoutAndCart}
        </div>
      </div>
    </nav>
  );
}
