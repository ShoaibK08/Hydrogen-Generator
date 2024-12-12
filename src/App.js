import { Routes, Route } from 'react-router-dom'; // No need to import BrowserRouter here
import HomePage from './component/pages/homepage/HomePage';
import IndexPage from './component/pages/indexpage/IndexPage';

function App() {
  return (
    // Removed <Router> from here as it should be in index.js
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/index-page" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
