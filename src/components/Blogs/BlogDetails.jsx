import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { ImageContext } from "../context/ImageContext";
import Wrapper from "../UI/Wrapper";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const { images } = useContext(ImageContext);

  const blogIndex = blogs.findIndex((b) => b.id.toString() === id);
  const blog = blogs[blogIndex];

  if (!blog) {
    return <p className="text-center text-red-500 text-xl mt-10">Blog bulunamadı.</p>;
  }

  // Resim başa sarma (circular)
  const image = images.length > 0 ? images[blogIndex % images.length] : null;

  return (
    <Wrapper className="max-w-4xl mt-8 mx-auto">
      <div>
        <h2 className="md:text-2xl text-xl mt-4 font-semibold text-red-600 ">{blog.category}</h2>
        <h1 className="md:text-4xl text-3xl capitalize mt-2 font-semibold mb-4">{blog.title}</h1>
        <div className="w-full mt-3 h-[1.5px] bg-slate-300" />
        <span className="text-gray-500 flex items-center gap-2 md:text-xl mt-2 mr-2">
          {blog.author}
          <i className="fa-solid fa-circle-dot text-[5px]" />
          {blog.date}
        </span>
      </div>

      {image && (
        <img
          src={image.urls?.small}
          alt={image.alt_description || blog.title}
          className="w-full max-w-[800px] mx-auto h-full p-6 object-cover mb-4 rounded-[32px]"
        />
      )}

      <div className="border p-2 md:p-6 rounded-xl">
        <h1 className="font-semibold text-xl md:text-2xl mb-4">How to Made</h1>
        <p className="mb-6 md:text-xl leading-relaxed">{blog.paragraph}</p>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((_, i) => (
            <img
              key={i}
              src={image?.urls?.small}
              alt={image?.alt_description || blog.title}
              className="w-full h-full object-cover rounded-[32px]"
            />
          ))}
        </div>

        <h1 className="font-semibold text-xl md:text-2xl my-4">What's New</h1>
        <p className="md:text-xl leading-relaxed">{blog.paragraph}</p>
      </div>
    </Wrapper>
  );
};

export default BlogDetails;
