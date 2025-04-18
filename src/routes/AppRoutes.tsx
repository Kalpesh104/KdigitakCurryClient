import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import InstructorList from '../pages/InstructorList';
import Courses from '../pages/Courses';
import Lectures from '../pages/Lectures';
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/instructors" element={<InstructorList />} />
      <Route path="courses" element={<Courses />} />
      <Route path="lectures" element={<Lectures />} />
    </Route>
  </Routes>
);

export default AppRoutes;
