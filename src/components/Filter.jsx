export default function Filter({ categories, handleFilter }) {

  return (

    <select
      className="border p-3 rounded-lg mb-6"
      onChange={(e)=>handleFilter(e.target.value)}
    >

      <option value="">
        Filter by Category
      </option>

      {categories.map(cat => (
        <option
          key={cat.idCategory}
          value={cat.strCategory}
        >
          {cat.strCategory}
        </option>
      ))}

    </select>

  );
}
