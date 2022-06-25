import CreateArticleForm from "../components/Create-Article-Form";
import Layout from "./Layout";

import Header from '../components/Header';

export default function CreateArticle() {
  return (
    <Layout>
      <h2 className="text-center my-4">Create A Post</h2>
      <CreateArticleForm />
    </Layout>
  )
}