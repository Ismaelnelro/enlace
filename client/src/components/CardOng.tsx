import VolunteerPositionCard from './VolunteerPositionCard';
import { DataOng } from './home/DataOng';

export default function CardOng() {
  return (
    <>
      {DataOng.map((position) => {
        return <VolunteerPositionCard key={position.id} position={position} />;
      })}
    </>
  );
}
