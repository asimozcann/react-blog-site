import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { ImageContext } from "../context/ImageContext";
import Wrapper from "../UI/Wrapper";
import HeroCard from "./HeroCard";

const Hero = () => {
  const { blogs, loading } = useContext(BlogContext);
  const { images, load } = useContext(ImageContext);
  let index = 0;
  // Hook'lar yukarıda çağrıldıktan sonra kontrol yap
  if (loading || load || !blogs.length || !images.length) {
    return <p className="text-center">Yükleniyor...</p>;
  }

  const imageUrl =
    images[index]?.urls?.regular || "https://via.placeholder.com/600x400";
  return (
    <main className="py-1 ">
      <Wrapper>
        <div className="flex flex-col  md:flex-row gap-4  overflow-hidden h-full md:h-[550px]">
          {/* Sol büyük kart */}
          <div className="flex-[2]  overflow-hidden">
            <HeroCard
              blogId={blogs[0].id}
              image={imageUrl}
              category={blogs[0].category}
              title={blogs[0].title}
              author={blogs[0].author}
              date={blogs[0].date}
            />
          </div>

          {/* Sağdaki küçük kartlar */}
          <div className="flex-[1] flex flex-col gap-4">
            {blogs.slice(1, 3).map((blog, i) => (
              <div key={blog.id} className="overflow-hidden  flex-1">
                <HeroCard
                  blogId={blog.id}
                  image={
                    images[i + 1]?.urls?.regular ||
                    "https://via.placeholder.com/600x400"
                  }
                  title={blog.title}
                  category={blog.category}
                  description={blog.body}
                  author={blog.author}
                  date={blog.date}
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default Hero;
