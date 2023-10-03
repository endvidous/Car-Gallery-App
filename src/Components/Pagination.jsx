import { Link } from 'react-router-dom';
import '../Css/index.css';


const Pagination = ({ currentPage, totalPages }) => {
  
    const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className='navigation'>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <Link to={`/page/${currentPage - 1}`} className="arrow">
              Prev
            </Link>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? 'active' : ''}`}
          >
            <Link to={`/page/${number}`} className="page-link">
              {number}
            </Link>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <Link to={`/page/${currentPage + 1}`} className="page-link">
              Next
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};


export default Pagination;
