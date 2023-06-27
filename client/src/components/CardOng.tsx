import VolunteerPositionCard from './VolunteerPositionCard';
import { DataOng } from './DataOng';

export default function CardOng() {
  return (
    <>
      {DataOng.map((position) => {
        return <VolunteerPositionCard key={position.id} position={position} />;
      })}
    </>
  );
}
