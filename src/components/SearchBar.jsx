export default function SearchBar({ search, setSearch, handleSearch }) {

  return (
    <div className="flex gap-3 mb-6">

      <input
        className="border rounded-lg p-3 flex-1 shadow"
        placeholder="Search recipes..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        Search
      </button>

    </div>
  );
}
