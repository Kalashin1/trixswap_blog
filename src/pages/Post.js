import { useParams } from "react-router-dom";
import Layout from "./Layout";
import PostHeader from "../components/Post-Header";
import PostContent from "../components/Post-Content";
import AlikePost from "../components/Alike-Post";

export default function Post() {
  const { id } = useParams();

  return (
    <Layout>
      <h2>Post {id}</h2>
      <PostHeader />
      <PostContent />
      <AlikePost />
    </Layout>
  );
}
