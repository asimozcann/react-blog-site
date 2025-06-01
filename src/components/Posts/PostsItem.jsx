import { useContext } from "react";
import { Link } from "react-router-dom";
import { ImageContext } from "../context/ImageContext";

const PostsItem = ({ blog, index }) => {
  const { title, body, id, author, category, date } = blog;
  const { images, load } = useContext(ImageContext);

  if (load) {
    return <p className="text-center">Yükleniyor...</p>;
  }

  const imageUrl =
    images[index]?.urls?.regular || "https://via.placeholder.com/600x400";
  const truncate = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "." : text;
  };

  return (
    <li className="h-auto">
      <Link to={`/blogs/${id}`} className="block group overflow-hidden">
        {/* Görsel */}
        <div className="relative h-[270px] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="relative bg-white border border-gray-300 -mt-6 mx-auto w-[95%] max-w-[400px] h-[140px] p-4 text-black z-10 flex flex-col justify-between">
          <h2 className="text-[14px] text-red-600 uppercase font-bold">
            {category}
          </h2>
          <p className="mt-2 font-medium capitalize">{title}</p>
          <span className="text-gray-500 flex items-center gap-2 text-sm">
            {blog.author}
            <i className="fa-solid fa-circle-dot text-[5px]"></i>
            {blog.date}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default PostsItem;
