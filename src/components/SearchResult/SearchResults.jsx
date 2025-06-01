import { useContext } from "react";

import { BlogContext } from "../context/BlogContext";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";
const SearchResults = () => {
  const { query } = useContext(SearchContext);
  const { blogs } = useContext(BlogContext);

  const filteredBlogs = blogs.filter((blog) =>
    blog.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        “{query}” kategorisiyle ilgili sonuçlar
      </h2>

      {filteredBlogs.length > 0 ? (
        <ul className="space-y-4">
          {filteredBlogs.map((blog) => (
            <li key={blog.id} className="border p-4 rounded shadow">
              <Link to={`/blogs/${blog.id}`}>
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600">Kategori: {blog.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Bu kategoriyle eşleşen blog bulunamadı.</p>
      )}
    </div>
  );
};

export default SearchResults;
