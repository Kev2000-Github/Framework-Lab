import { SearchIcon } from "../../SVG/SearchIcon";

export const Search = ({ onSearch }) => {
  return (
    <>
      <input
        onChange={onSearch}
        type="text"
        name="hs-table-search"
        id="hs-table-search"
        className="block w-full
               p-3 pl-10 text-sm 
                rounded-md
                focus:border-blue-500 
                focus:ring-blue-500
                outline
                outline-1
                border-gray-700 "
        placeholder="Buscar por nombre"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <SearchIcon/>
      </div>
    </>
  );
};
