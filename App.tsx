import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Scriptures from './pages/Scriptures';
import TechStack from './pages/TechStack';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/aboutme">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/scriptures" element={<Scriptures />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
