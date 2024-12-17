import { Routes, Route } from 'react-router-dom'; // No need to import BrowserRouter here
import IndexPage from './Components/Pages/Indexpage/IndexPage';
import Theory from './Components/Pages/Theory/Theory';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/Pages/Homepage/HomePage.jsx';
import WarningPopup from './Components/WarningPopup/WarningPopup.js';


function App() {
  return (
    // Removed <Router> from here as it should be in index.js
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/index-page" element={<IndexPage />} />
      <Route path="/theory" element={<Theory />} />
    </Routes>
  );
}

export default App;
