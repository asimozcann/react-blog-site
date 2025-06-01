import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Wrapper from "../UI/Wrapper";
import PostsItem from "./PostsItem";
import { Link } from "react-router-dom";

const Posts = () => {
  const { blogs, loading } = useContext(BlogContext);

  if (loading) {
    return <p className="text-center">Yükleniyor...</p>;
  }

  return (
    <section className="">
      <Wrapper>
        <h1 className="relative text-3xl mb-1 font-medium ">Son Bloglar</h1>
        <div className="w-full mb-4 h-[1.5px] bg-gray-300" />
        <ul className="grid md:grid-cols-3 gap-5  ">
          {blogs.slice(0, 6).map((blog, index) => (
            <PostsItem key={blog.id} blog={blog} index={index} />
          ))}
        </ul>{" "}
        <div className="flex justify-end mt-4">
          <Link to="/blogs" className="text-red-600 text-2xl font-medium ">
            Tüm Bloglar
          </Link>
          
        </div>
        <div className="w-full mt-4 h-[1.5px] bg-gray-300" />
      </Wrapper>
    </section>
  );
};

export default Posts;
