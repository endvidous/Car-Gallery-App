import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './Components/CarList';

const Routeses = () => (
    <Router>
      <Routes>
        <Route path="/" exact Component={CarList} />
        <Route path="/page/:page" Component={CarList} />
      </Routes>
    </Router>
);

export default Routeses;