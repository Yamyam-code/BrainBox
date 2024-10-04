import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}

export default Router;
