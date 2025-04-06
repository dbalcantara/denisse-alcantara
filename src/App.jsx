import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Routes, Route, useNavigate } from "react-router-dom";
import ProjectPage from './components/ProjectPage';



function App() {
  const navigate = useNavigate();

  return (
    <>
    <button onClick={() => navigate('/')}>Home</button>
    <button onClick={() => navigate('/about')}>About</button>
    <button onClick={() => navigate('/project')}>About</button>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>

    </>

  )
}

export default App
