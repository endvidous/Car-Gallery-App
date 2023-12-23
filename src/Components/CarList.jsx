import { useParams } from 'react-router-dom';
import carsData from '../Data/carsData.json';
import CarCard from './CarCard';
import Pagination from './Pagination';
import '../Css/index.css';
import SearchBar from './SearchBar';
import { useState } from 'react';
import Fuse from 'fuse.js';


const CarList = () => {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const carsPerPage = 6;
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState(carsData.cars);

  //fuse options for fuzzy search
  const fuseOptions = {
    keys: ['CarName', 'Model', 'Brand', 'Year'],
    includeScore: true,
    shouldSort: true,
    threshold: 1,
  };

  const fuse = new Fuse(carsData.cars, fuseOptions);
  
  // Handle search input change
  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

  //find the filtered cars 
  const newFilteredCars = newSearchTerm === '' ? 
    carsData.cars : 
    fuse.search(newSearchTerm.toLowerCase().replaceAll(" ","")).map((result) => result.item);
    

    // Update the filteredCars state
    setFilteredCars(newFilteredCars);
  };

  const totalCars = filteredCars.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);

  return (
    <div className='CarList'> 
      <SearchBar onSearch={handleSearch} />
      
      {searchTerm === '' ? (
        <>
          <div className="cars-container">
            {filteredCars.slice(startIndex, endIndex).map((car) => (
              <div className="row-cars" key={car.ID}>
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      ) : (
        <div className="cars-container">
          {filteredCars.map((car) => (
            <div className="row-cars" key={car.ID}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarList;
