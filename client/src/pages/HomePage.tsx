import LandingPageBottom from '../components/home/Bottom';
import Collab from '../components/home/Collab';
import { FirstExperience } from '../components/home/FirstExperience';
import Header from '../components/home/Header';
import PostSearch from '../components/home/PostSearch';
import Layout from '../components/layout/Layout';

export const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Collab />
      <PostSearch />
      <FirstExperience />
      <LandingPageBottom />
    </Layout>
  );
};
