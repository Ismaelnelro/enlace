import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Card from '../../../components/Card';

export const VolunteerLoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Coloca un email valido').required('El email es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className=" h-screen flex items-center justify-center">
      <Card>
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl text-gray-700 font-normal ">Iniciar Sesión - Voluntariado</h2>
          <div className="">
            <Input
              label="Correo"
              name="email"
              id="email"
              type="email"
              placeholder="Ingrese su correo electrónico"
              onChange={handleChange}
              error={errors.email}
              value={values.email}
            />
          </div>
          <div className="relative">
            <Input
              label="Contraseña"
              name="password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
              error={errors.password}
              value={values.password}
            />
            <div
              className="cursor-pointer top-10 flex right-0 pr-3 items-center absolute text-gray-500 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <a href="#!" className="text-xs">
            ¿Olvidaste tu contraseña?
          </a>
          <button
            className="bg-gray-500 mt-4 text-white py-2 w-full rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesión
          </button>
          <div className="my-4 px-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-700 after:mt-0.5 after:flex-1 after:border-t after:border-gray-700">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-gray-700">O</p>
          </div>

          <a
            className="mb-3 flex w-full items-center justify-center rounded-full bg-gray-500 py-2 text-center text-white"
            href="#!"
          >
            Ingresa con Google
          </a>
          <a
            className="mb-3 flex w-full items-center justify-center rounded-full bg-gray-500 py-2 text-center text-white"
            href="#!"
          >
            Ingresa con Facebook
          </a>
          <p className="text-sm mb-2">¿No tienes cuenta?</p>
          <Link
            className="mb-3 flex w-full items-center justify-center rounded-full bg-gray-500 py-2 text-center text-white"
            to="/auth/organization/register"
          >
            Regístrate
          </Link>
        </form>
      </Card>
    </div>
  );
};
