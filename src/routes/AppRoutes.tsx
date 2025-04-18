import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import InstructorList from '../pages/InstructorList';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/instructors" element={<InstructorList />} />
    </Route>
  </Routes>
);

export default AppRoutes;
