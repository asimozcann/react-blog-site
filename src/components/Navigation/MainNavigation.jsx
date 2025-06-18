import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import Wrapper from "../UI/Wrapper";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
const MainNavigation = () => {
  const [input, setInput] = useState("");
  const [toggleSearch, settoggleSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🔹 Yeni state
  const { setQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (toggleSearch) {
      if (input.trim() !== "") {
        setQuery(input.trim());
        navigate("/search-results");
        setMenuOpen(false); // 🔸 Aramada menü kapanabilir
      } else {
        settoggleSearch(false);
        setInput("");
      }
    } else {
      settoggleSearch(true);
    }
  };

  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full h-[70px] z-50 shadow-md">
      <Wrapper className="flex items-center justify-between h-[70px]">
        <div className="flex items-center gap-4">
          <NavLink className="text-red-600 font-semibold" to="/">
            <div className="md:flex hidden justify-center group border border-black p-2 items-center bg-white">
              <h1 className="text-black text-2xl font-mono border-r-4 border-white whitespace-nowrap overflow-hidden animate-typing transition-all duration-300 group-hover:text-red-600">
                My Blog
              </h1>
            </div>
          </NavLink>

          {/* 🔹 Burger menü butonu */}
          <i
            className="fa-solid fa-bars md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>

        {/* 🔸 Normal menü (md ve üstü) */}
        <ul className="nav-menu  md:flex items-center text-xl font-medium gap-20 uppercase">
           <li className="hidden md:block">
            <NavLink to="/">Ana Sayfa</NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink to="/blogs">Bloglar</NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink to="/about">Hakkımda</NavLink>
          </li>
          <li className="text-red-600 relative flex items-center gap-5">
            {toggleSearch && (
              <input
                type="text"
                placeholder="Kategori ara..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border w-full text-[18px] px-2 py-1 rounded-2xl text-black"
              />
            )}
            <i
              onClick={handleSearch}
              className="fa-solid fa-magnifying-glass absolute right-3 cursor-pointer hover:text-red-500"
            ></i>
          </li>
        </ul>
      </Wrapper>

      {/* 🔹 Mobil menü (768px altı) */}
      {menuOpen && (
        <ul className="nav-menu flex flex-col absolute top-[70px] left-0 w-full bg-white text-black text-xl font-medium gap-6 p-4 shadow-lg md:hidden z-50">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={() => setMenuOpen(false)}>
              Bloglar
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              Hakkımda
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default MainNavigation;
