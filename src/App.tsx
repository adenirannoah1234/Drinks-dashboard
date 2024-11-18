import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
