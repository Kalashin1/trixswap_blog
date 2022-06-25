import Header from "../components/Header";
import Layout from "./Layout";
import AboutUs from "../components/About-us";
import OtherPosts from "../components/Other-Posts";

export default function About() {
  return (
    <Layout>
      <Header />
      <AboutUs />
      <OtherPosts />
    </Layout>
  )
}