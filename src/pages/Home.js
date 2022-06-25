import Navbar from '../components/Navbar';
import Header from '../components/Header';
import RecentPosts from '../components/Recent-Posts';
import OtherPosts from '../components/Other-Posts';
import Footer from '../components/Footer';
import Layout from './Layout';

function Home () {
  return (
     <Layout>
      <Header />
      <RecentPosts />
      <OtherPosts />
     </Layout>
  )
}

export default Home;