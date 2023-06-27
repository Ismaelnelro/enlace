import { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Logo from '@assets/logo/LogoMenu.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import { Icon } from '@mui/material';

interface MenuProps {
  isOpen: boolean;
  toggle: () => void;
}

export function Menu({ isOpen, toggle }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen);
  return (
    <div className="mr-5">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          toggle();
        }}
      >
        {isMenuOpen ?
          <MenuIcon />
          :
          <CloseIcon />}
      </button>
      <div className={`${isMenuOpen ? 'hidden' : 'absolute inset-0 bg-gray-800 opacity-30 -z-10 lg:hidden'}`}></div>

      <div className={`fixed transition-all duration-700 w-10/12 lg:w-1/4 -z-10 ${isMenuOpen ? '-left-full ' : 'left-0  shadow-2xl'}`}>

        <div className="bg-zinc-900 w-full h-[94vh] flex flex-col justify-between">
          <div className='w-12/12 h-full m-auto flex flex-col justify-between py-14'>
            <ul className="animate-fade-in-delay">
              <li className="text-slate-100 mb-7 hover:text-orange-500">
                <Link to="/#">Sobre Enlace</Link>
              </li>
              <li className="text-slate-100 mb-7 hover:text-orange-500">
                <Link to="/#">Bases y condiciones</Link>
              </li>
              <li className="text-slate-100 mb-7 hover:text-orange-500">
                <Link to="/#">Preguntas frecuentes</Link>
              </li>
              <li className="text-slate-100 mb-7 hover:text-orange-500">
                <Link to="/#">Medios de contacto</Link>
              </li>
            </ul>
            <Link to="/auth/register" className="text-slate-100 animate-fade-in-delay">
              <Button type="button" className="bg-orange-500 hover:bg-orange-600 px-6 py-2 mt-7">
                Ingresar como organización
              </Button>
            </Link>
          </div>
          <div className="flex justify-between items-center w-full h-auto p-4 border-t-2 border-t-white bg-zinc-900">
            <Link to="/home">
              <img className="w-full animate-fade-in-delay" src={Logo} alt="LOGO" />
            </Link>
            <div className="flex justify-between gap-4 text-slate-100 animate-fade-in-delay">
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LanguageIcon />
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}
