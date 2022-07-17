import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Problems from './pages/Problems';

function KCRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="problems" element={<Problems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default KCRouter;