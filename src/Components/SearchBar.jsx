import '../Css/index.css';

const SearchBar = ({ onSearch }) => {


  return (
    <div className="search-bar-main">
      
      <input
        type="text"
        className="search-input"
        placeholder="Search by Car Name"
        onChange={onSearch}
      />

      <button className="search-button" type="button">
        Search
      </button>

    </div>
  );
};

export default SearchBar;
