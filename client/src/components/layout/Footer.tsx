import Logo from '../../assets/LogoFooter.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-300 rounded-tl-3xl rounded-tr-3xl w-[99vw]">
      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-16 py-2">
        <div className="px-4 py-2">
          <h2 className="font-bold">Área</h2>
          <ul className="flex flex-col">
            <li className="text-sm">Administración</li>
            <li className="text-sm">Marketing</li>
            <li className="text-sm">Tecnología</li>
          </ul>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-gray-800 font-bold">Puestos más buscados</h2>
          <ul className="flex flex-col">
            <li className="text-sm">Administración</li>
            <li className="text-sm">Marketing</li>
            <li className="text-sm">Tecnología</li>
          </ul>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-gray-800 font-bold">Modalidad</h2>
          <ul className="flex flex-col">
            <li className="text-sm">Administración</li>
            <li className="text-sm">Marketing</li>
            <li className="text-sm">Tecnología</li>
          </ul>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-gray-800 font-bold">Fecha de publicación</h2>
          <ul className="flex flex-col">
            <li className="text-sm">Administración</li>
            <li className="text-sm">Marketing</li>
            <li className="text-sm">Tecnología</li>
          </ul>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-gray-800 font-bold">Soporte</h2>
          <ul className="flex flex-col">
            <li className="text-sm">Sobre nosotros</li>
            <li className="text-sm">Ayuda</li>
            <li className="text-sm">Medios de contacto</li>
          </ul>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-gray-800 font-bold">Preguntas frecuentes</h2>
          <ul className="flex flex-col">
            <li className="text-sm">Generales</li>
            <li className="text-sm">Para los voluntarios</li>
            <li className="text-sm">Para las organizaciones</li>
          </ul>
        </div>
      </section>
      <div className="bg-white w-full flex justify-evenly py-3 px-5">
        <div className="flex items-center">
          <img className="w-8" src={Logo} alt="logo" />
          <Link to="/home" className="text-sm mx-5 text-gray-500">
            ENLACE ONG
          </Link>
          <span className="text-sm text-gray-500">Copyright © Enlace - ONG 2023</span>
        </div>
        <div className="w-40 flex justify-between items-center">
          <LinkedInIcon className="text-gray-400" />
          <InstagramIcon className="text-gray-400" />
          <TwitterIcon className="text-gray-400" />
          <LanguageIcon className="text-gray-400" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
