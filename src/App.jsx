import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectPage from './components/ProjectPage';



function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL} >
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        </Routes>
        </BrowserRouter>



    </>

  )
}

export default App
