import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function AuthenticationPage() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Card className="w-96">
          <h1 className="text-center text-4xl my-4">Login</h1>
          <Link to="/auth/volunteer/login">
            <Button type="button">Voluntario</Button>
          </Link>
          <Link to="/auth/organization/login">
            <Button type="button">Organización</Button>
          </Link>
        </Card>
      </div>
    </>
  );
}
