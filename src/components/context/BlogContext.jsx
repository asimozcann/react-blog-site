import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        const authors = ["Ali", "Ayşe", "Mehmet", "Zeynep"];
        const categories = ["React", "JavaScript", "CSS", "HTML"];
        const fixedDates = [
          "2025-01-01",
          "2025-01-02",
          "2025-01-03",
          "2025-01-04",
        ];
        const paragraphs =["Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis veritatis mollitia explicabo sint corrupti.Iusto possimus, a velit obcaecati nisi ea vel nam. Ex dolor soluta quibusdam velit nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis veritatis mollitia explicabo sint corrupti. Iusto possimus, a velit obcaecati nisi ea vel nam. Ex dolor soluta quibusdam velit nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis veritatis mollitia explicabo sint corrupti.Iusto possimus, a velit obcaecati nisi ea vel nam. Ex dolor soluta quibusdam velit nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis veritatis mollitia explicabo sint corrupti. Iusto possimus, a velit obcaecati nisi ea vel nam. Ex dolor soluta quibusdam velit nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis veritatis mollitia explicabo sint corrupti.Iusto possimus, a velit obcaecati nisi ea vel nam. Ex dolor soluta quibusdam velit nemoLorem ipsum dolor sit amet consectetur adipisicing elit."
      
      ]

        const enrichedData = data.map((blog, index) => ({
          ...blog,
          author: authors[index % authors.length],
          category: categories[index % categories.length],
          date: fixedDates[index % fixedDates.length],
          paragraph : paragraphs[index%paragraphs.length]
        }));

        setBlogs(enrichedData);
        
        setLoading(false);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};
