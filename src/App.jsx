import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Routes, Route } from "react-router-dom";
import ProjectPage from './components/ProjectPage';



function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        </Routes>


    </>

  )
}

export default App
