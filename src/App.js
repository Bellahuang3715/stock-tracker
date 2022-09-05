import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StockOverview } from './pages/StockOverview';
import { StockDetail } from './pages/StockDetail';

import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverview />}/>
          <Route path="/detail/:symbol" element={<StockDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
