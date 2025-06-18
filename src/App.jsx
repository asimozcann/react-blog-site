import { BlogProvider } from "./components/context/BlogContext";
import { ImageProvider } from "./components/context/ImageContext";
import { SearchProvider } from "./components/context/SearchContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import BlogsPage from "./Pages/Blogs";
import BlogDetailsPage from "./Pages/BlogDetails";
import AboutPage from "./Pages/About";

import SearchResultsPage from "./Pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "blogs", element: <BlogsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "blogs/:id", element: <BlogDetailsPage /> },
      { path: "search-results", element: <SearchResultsPage /> },
    ],
  },
]);

function App() {
  return (
    <SearchProvider>
      <BlogProvider>
        <ImageProvider>
          <RouterProvider router={router} />
        </ImageProvider>
      </BlogProvider>
    </SearchProvider>
  );
}

export default App;
