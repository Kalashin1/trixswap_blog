import Layout from "./Layout";
import Header from "../components/Header";
import __Categories from "../components/Categories";
import NewsLetter from "../components/Newletter";

export default function Catgories() {
  return (
    <Layout>
      <Header />
      <__Categories />
      <NewsLetter />
    </Layout>
  )
}