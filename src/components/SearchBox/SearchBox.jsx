import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch, value }) => {
  const handleSearch = (ev) => {
    onSearch(ev.target.value);
  };
  return (
    <label className={css.SearchBox}>
      <span>
        <b> Find contacts by name</b>
      </span>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Search for..."
        value={value}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox;