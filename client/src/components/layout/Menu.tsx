import { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoMenu.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

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
        {isMenuOpen ? <MenuIcon /> : <CloseIcon />}
      </button>
      <div
        className={`${
          isMenuOpen
            ? 'hidden'
            : 'fixed z-50 top-0 left-0 w-full h-full overflow-hidden shadow-lg transform transition-all'
        }`}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-30  -z-10"></div>
        <div className="flex justify-between items-center lg:pl-16 pl-4 py-3 bg-zinc-800 lg:w-1/2 xl:w-1/3 md:w-1/2 sm:w-full">
          <button
            onClick={() => {
              setIsMenuOpen(true);
              toggle();
            }}
            title="close"
          >
            <CloseIcon className="text-white my-1" />
          </button>
        </div>
        <div className="bg-zinc-900 lg:w-1/2 xl:w-1/3 md:w-1/2 sm:w-full lg:pl-16 pl-4 pb-5 pt-8 rounded-br-3xl">
          <div className="">
            <ul>
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
            <Link to="/auth/register" className="text-slate-100 ">
              <Button
                type="button"
                className="bg-orange-500 hover:bg-orange-600 lg:w-1/2 w-3/4 mt-5 mb-16 py-2"
              >
                Ingresar como organización
              </Button>
            </Link>
          </div>
          <div className="mt-20 flex justify-between lg:pr-16 pr-4">
            <div className="flex">
              <Link to="/home">
                <img className="w-10 mr-4" src={Logo} alt="LOGO" />
              </Link>
              <span className="text-slate-100 w-32">Enlace ONG</span>
            </div>
            <div className="w-36 flex justify-between">
              <LinkedInIcon className="text-slate-100" />
              <InstagramIcon className="text-slate-100" />
              <TwitterIcon className="text-slate-100" />
              <LanguageIcon className="text-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
