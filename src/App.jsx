import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectPage from './components/ProjectPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/denisse-alcantara" element={<HomePage />} />
        <Route path="/denisse-alcantara/about" element={<AboutPage />} />
        <Route path="/denisse-alcantara/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>



    </>

  )
}

export default App
