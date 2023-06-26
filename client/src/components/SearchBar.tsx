import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className="max-w-xl md:max-w-lg xl:scale-100 scale-[0.9]">
      <h1 className="xl:text-5xl md:text-4xl text-3xl font-normal">
        Comenza tu primera experiencia, <span className="text-orange-400 font-bold">ayudando</span>
      </h1>
      <form className="my-5 flex w-4/5">
        <label htmlFor="search" className="absolute flex py-3 px-3 ">
          <SearchIcon className="text-blue-300" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Buscar..."
          className="w-full appearance-none border-2 border-blue-300 rounded-l-2xl py-3 px-10 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline border-r-0"
        />
        <button
          type="submit"
          className="bg-blue-300 hover:bg-blue-400 rounded-r-full w-28 text-white font-semibold"
        >
          Buscar
        </button>
      </form>
      <div className="flex items-center">
        <span className="text-orange-500 font-bold text-sm justify-start mr-5">
          Temas populares:
        </span>
        <h2 className="text-orange-500 text-xs border border-1 px-2 rounded-full border-orange-400">
          Community Manager
        </h2>
        <h2 className="text-orange-500 mx-5 text-xs border border-1 px-2 rounded-full border-orange-400">
          Diseñador UI
        </h2>
        <h2 className="text-orange-500 text-xs border border-1 px-2 rounded-full border-orange-400">
          Desarrollador Jr.
        </h2>
      </div>
    </div>
  );
}

export default SearchBar;
