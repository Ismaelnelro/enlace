import Button from '../Button';
import Card from '../Card';
import CardOng from '../CardOng';
import LandingOrgsSVG from '../../assets/landing-orgs.svg';

export default function LandingPageBottom() {
  return (
    <div className="text-white">
      <div className="flex justify-evenly mb-5">
        <div className="border px-16 py-2 border-[#FF983D] text-[#434343] rounded-2xl">Diseño</div>
        <div className="border px-16 py-2 border-[#FF983D] text-[#434343] rounded-2xl">
          Comunicación
        </div>
        <div className="border px-16 py-2 border-[#FF983D] text-[#434343] rounded-2xl">
          Tecnología
        </div>
      </div>

      <div className="bg-[#FFDC72] rounded-lg mx-36 mb-20 py-20 flex justify-around text-black">
        <div className=" max-w-7xl mx-auto grid xl:grid-cols-4 xl:gap-7 md:grid-cols-2 md:gap-7 mt-3 px-4">
          <CardOng />
        </div>
      </div>

      <div className="flex items-center justify-around h-[25rem] bg-[#313131]">
        <div className="flex items-center flex-col">
          <h3 className="text-5xl mb-5 font-medium">Enlace - ONG</h3>
          <svg
            width="400"
            height="200"
            viewBox="0 0 61 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.9616 14.3553C24.9998 15.8855 23.7757 17.1096 22.2456 17.0713C20.7537 17.0713 19.5296 15.8472 19.5296 14.3553C19.5296 6.896 25.5927 0.832903 33.0521 0.832902L46.5936 0.832901C54.053 0.832902 60.1161 6.896 60.1161 14.3553C60.1161 21.8147 54.053 27.8778 46.5936 27.8778L40.8939 27.8778C42.4814 26.3285 43.8012 24.5115 44.7575 22.4841L46.5745 22.465C51.0692 22.4841 54.7033 18.8501 54.6841 14.3553C54.7033 9.86061 51.0692 6.22657 46.5745 6.2457L33.0712 6.2457C28.5765 6.22658 24.9424 9.86061 24.9616 14.3553ZM38.4649 11.6394C39.9567 11.6394 41.1808 12.8635 41.1808 14.3553C41.1808 21.8147 35.1177 27.8778 27.6584 27.8778L14.1168 27.8778C6.65749 27.8778 0.594387 21.8147 0.594388 14.3553C0.594388 6.896 6.65749 0.832902 14.1168 0.832901L19.8165 0.832903C18.229 2.38215 16.9093 4.19916 15.9338 6.2457L14.136 6.2457C9.64122 6.22657 6.00719 9.86061 6.02632 14.3553C6.00719 18.8501 9.64122 22.4841 14.136 22.465L27.6393 22.465C32.134 22.4841 35.768 18.8501 35.7489 14.3553C35.7106 12.8252 36.9347 11.6011 38.4649 11.6394Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="">
          <h3 className="text-6xl font-bold">Newsletter</h3>
          <p className="text-2xl font-light">Sé el primero en conocer todas las búsquedas</p>
          <form>
            <div className="relative z-0 w-full mb-6 group mt-2">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo Electrónico
              </label>
              <span className="font-light text-sm">Podés desuscribirte en cualquier momento.</span>
            </div>
            <Button type="submit" className="bg-[#FF983D] p-3  text-xl  rounded-md">
              Suscribirme
            </Button>
          </form>
        </div>
      </div>

      <Card className="bg-[#A8A1DF] my-44 rounded-3xl mx-20 pr-0 flex items-center justify-between">
        <div className="ml-28">
          <img src={LandingOrgsSVG} />
        </div>
        <Card className="bg-[#FF983D] w-1/3 rounded-l-xl rounded-r-none">
          <h3 className="text-4xl font-medium text-black">Organizaciones:</h3>
          <div className="mx-4">
            <p className="text-xl text-white mt-9">
              Si sos una organización o formás parte de una y te interesa sumarte a esta iniciativa
              ofreciendo prácticas a nuevos profesionales, te invitamos a registrarte y a leer las
              bases y condiciones.{' '}
            </p>
            <div className="flex mt-3 justify-between">
              <Button className="px-10 py-2.5 border bg-[#EEBD87]" type="button">
                Registrarme
              </Button>
              <Button className="px-10 py-2.5 border" type="button">
                Base y condiciones
              </Button>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}
