import { useContext } from "react";
import Wrapper from "../UI/Wrapper";
import { BlogContext } from "../context/BlogContext";
import { ImageContext } from "../context/ImageContext";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { blogs, loading } = useContext(BlogContext);
  const { images, load } = useContext(ImageContext);
  if (loading || load || !blogs.length || !images.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Wrapper className="">
      <h1 className="text-5xl text-black text-center font-mono  my-8 overflow-hidden group ">
        Bloglar
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.slice(9, 18).map((blog, index) => {
          const image = images[index];

          return (
            <Link
              to={`/blogs/${blog.id}`}
              className="flex flex-col justify-between items-center bg-white shadow-md rounded-lg p-4 group overflow-hidden h-[600px]"
              key={blog.id}
            >
              <div className="w-full max-w-[800px] h-[300px] overflow-hidden rounded relative">
                <img
                  src={image?.urls?.small || "/default.jpg"}
                  alt={image?.alt_description || blog.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-125"
                />
              </div>

              <div className="leading-6 mt-4 w-full max-w-[500px] flex flex-col justify-between flex-grow">
                <h1 className="text-3xl font-semibold text-red-600 mb-2">
                  {blog.category}
                </h1>
                <h3 className="text-xl capitalize font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-[16px] text-gray-600 leading-relaxed text-left mb-2 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore maiores asperiores beatae quis possimus ipsa velit
                  alias...
                </p>

                <span className="text-gray-500 flex items-center gap-2 text-sm mt-auto justify-end mr-2">
                  {blog.author}
                  <i className="fa-solid fa-circle-dot  text-[5px]"></i>
                  {blog.date}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Blogs;
