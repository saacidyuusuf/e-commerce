
const SearchClothes = ({query, setquery}) => {

  return (
    <div className="search">
      <form action="">
        <label htmlFor="">Search</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          placeholder="search"
        />
      </form>
    </div>
  );
};

export default SearchClothes;
