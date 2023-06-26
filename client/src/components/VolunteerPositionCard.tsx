import { VolunteerPosition } from '../types/VolunteerPosition';
import Card from './Card';

export default function VolunteerPositionCard({ position }: { position: VolunteerPosition }) {
  return (
    <div key={position.id} className="flex flex-col hover:scale-105 transition-transform">
      <div className=" relative w-full h-[40%] flex items-start justify-end">
        <span className="absolute bg-orange-500 px-4 py-[2px] rounded-full text-xs font-semibold  text-white mr-4 mt-2">
          {position.modality}
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={position.img}
          alt="position"
        />
      </div>
      <Card className="rounded-t-none h-44">
        <div>
          <h2 className="text-xs font-semibold ">{position.title}</h2>
          <p className="text-xs mt-3 text-gray-500">
            Ubicación: <span className="text-black font-medium">{position.location}</span>
          </p>
          <p className="text-xs text-gray-500">
            Duración: <span className="text-black font-medium">{position.duration}</span>
          </p>
        </div>
        <div className="w-full flex justify-end mt-2">
          <span className="text-xs text-gray-500">{position.date}</span>
        </div>
      </Card>
    </div>
  );
}
