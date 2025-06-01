// Footer.jsx
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { blogs } = useContext(BlogContext);
  const { setQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  const uniqueCategories = [...new Set(blogs.map((blog) => blog.category))];

  const handleCategoryClick = (category) => {
    setQuery(category);
    navigate("/search-results");
  };

  return (
    <div className="bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-semibold text-red-600 mb-6">My Blog</h1>
      <div>
        <h2 className="text-2xl mb-2">Kategoriler</h2>
        <ul className="flex justify-center gap-6 flex-wrap">
          {uniqueCategories.slice(0, 4).map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="leading-relaxed cursor-pointer hover:text-red-600"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <span className="block mt-5">Copyright ©2025 All rights reserved | Asım Özcan</span>
    </div>
  );
};

export default Footer;
