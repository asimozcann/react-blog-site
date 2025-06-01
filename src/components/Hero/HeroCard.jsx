import { Link } from "react-router-dom";

const HeroCard = ({ image, title, category, blogId, author, date }) => {
  return (
    <Link
      to={`/blogs/${blogId}`}
      className="relative block w-full h-full group overflow-hidden "
    >
      {/* Görsel */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
      />

      {/* Üstteki yazı */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end text-white p-4 pointer-events-none">
        <div className="p-4 flex flex-col gap-1">
          <h2 className="text-xl text-red-600 uppercase  font-bold ">
            {category}
          </h2>
          <p className="text-2xl capitalize">{title}</p>
          <div className=" flex flex-row items-center uppercase text-[13px]  gap-2">
            <span className="font-medium">{author}</span>
            <i className="fa-solid fa-circle-dot  text-[5px]"></i>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
