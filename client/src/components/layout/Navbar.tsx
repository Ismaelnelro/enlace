import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import { Menu } from './Menu';
import Input from '../Input';

import Logo from '@assets/logo/LogoEnlaceSVG.svg';
import User from '@assets/icons/user.svg';

export function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLoggin] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const showLoginAndSignUp = (
    <div className=" sm:block sm:ml-6">

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
    <nav className=" flex items-center w-screen h-14 px-5 bg-white shadow-lg  z-50">
      {/* <div className=""> */}
        <div className="flex items-center justify-between lg:justify-start w-full">
          <Menu isOpen={isMenuOpen} toggle={toggleMenu} />
          <Link to="/home">
            <img className="w-12" src={Logo} alt="logo" />
          </Link>
        </div>
        {/* {isLogin ? showLoginAndSignUp : showLogoutAndCart} */}
      {/* </div> */}
    </nav>
  );
}
