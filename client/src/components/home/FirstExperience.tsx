import Button from '../Button';
import Card from '../Card';

type infoType = {
  title: string;
  busqueda: string;
};

const info: infoType[] = [
  {
    title: 'Administracion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Comunicacion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Diseno',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Educacion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Marketing',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Produccion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Tecnologia',
    busqueda: '10 busquedas activas',
  },
];

export const FirstExperience = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFDC72] to-white">
      <div className="flex flex-col justify-center items-center">
        <h6 className=" text-[#434343] w-4/5 h-28 font-sans text-5xl text-center font-normal not-italic tracking-wide mt-16">
          Encontra tu primera experiencia laboral,
          <br />
          <span className="text-[#FF983D]">aporta un granito de arena</span>
        </h6>
        <div className="grid grid-cols-3 gap-6 mt-24">
          {info.map((experiencias) => (
            <Card
              key={experiencias.title}
              className="flex justify-center bg-white rounded-2xl items-center gap-6 w-80 h-24 p-6 shadow-blue-100"
            >
              <img
                className="w-9 h-7"
                src={`../../../src/assets/experiences/${experiencias.title}.png`}
                alt={experiencias.title}
              />
              <div className="w-56 flex flex-col justify-center">
                <h1 className=" text-2xl font-medium text-[#434343] tracking-wide">
                  {experiencias.title}
                </h1>
                <p className=" text-base text-[#434343] tracking-wide">{experiencias.busqueda}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className=" w-full flex justify-center items-center mt-32 mb-32">
        <div className=" w-1/3">
          <img src="../../../src/assets/experiences/hombresentado.png" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center relative  w-3/5">
          <p className=" w-3/5 h-44 font-medium text-4xl leading-10 text-center flex items-center">
            ¿Te gustaría ganar experiencia brindado ayuda a una organización sin fines de lucro?
          </p>
          <img
            src="../../../src/assets/experiences/Enlace.png"
            alt=""
            className="absolute w-96 top-1"
          />
          <Button
            type="button"
            className="bg-[#FF983D] w-60 p-3.5 text-2xl rounded-md text-[#434343]"
          >
            ¡Sumate!
          </Button>
        </div>
      </div>
    </div>
  );
};
