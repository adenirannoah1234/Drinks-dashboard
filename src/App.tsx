import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/Notfound';
import TransactionHistory from './pages/transaction-history/TransactionHistory';
import StockList from './pages/Dashboard/stock-list/StockList';
import StockInAndOut from './pages/stock-in-out/StockInAndOut';
import Inventory from './pages/Inventory/Inventory';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/stock-list" element={<StockList />} />
          <Route path="/stock-in-out" element={<StockInAndOut />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
