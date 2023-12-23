import '../Css/index.css';

const SearchBar = ({ onSearch }) => {


  return (
    <div className="search-bar-main">
      <input
        type="text"
        className="search-input"
        placeholder="Enter Car Name"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
