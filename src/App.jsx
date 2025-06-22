import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./components/context/BlogContext";
import { ImageProvider } from "./components/context/ImageContext";
import { SearchProvider } from "./components/context/SearchContext";
import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import BlogsPage from "./Pages/Blogs";
import BlogDetailsPage from "./Pages/BlogDetails";
import AboutPage from "./Pages/About";
import SearchResultsPage from "./Pages/SearchResults";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <SearchProvider>
      <BlogProvider>
        <ImageProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="blogs" element={<BlogsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="blogs/:id" element={<BlogDetailsPage />} />
                <Route path="search-results" element={<SearchResultsPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ImageProvider>
      </BlogProvider>
    </SearchProvider>
  );
}

export default App;
