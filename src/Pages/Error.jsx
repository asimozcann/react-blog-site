import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[url('/public/error.jpg')] bg-cover bg-center h-screen text-white flex items-center justify-end  ">
      <div className="text-center p-12">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-black">Sayfa Bulunamadı</h2>
        <p className="text-xl mb-6">Aradığınız sayfa mevcut değil ya da kaldırılmış olabilir.</p>
        <Link
          to="/"
          className="px-6 py-2 text-xl bg-red-500 text-white rounded-full hover:bg-red-600 transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
